// One-off / repeatable image optimizer for the gallery.
// Resizes every image in src/assets/gallery to a max 1600px long edge and
// re-encodes as quality-82 JPEG, stripping camera metadata. Never upscales.
// Originals are preserved in the project-root `images/` folder.
import { readdir, stat, rename, unlink } from 'node:fs/promises'
import { join, extname, basename } from 'node:path'
import sharp from 'sharp'

const DIR = new URL('../src/assets/gallery/', import.meta.url).pathname.replace(
  /^\/([A-Za-z]:)/,
  '$1'
)
const MAX = 1600
const QUALITY = 82
const exts = new Set(['.jpg', '.jpeg', '.png', '.webp'])

const files = (await readdir(DIR)).filter((f) =>
  exts.has(extname(f).toLowerCase())
)

let before = 0
let after = 0

for (const file of files) {
  const src = join(DIR, file)
  before += (await stat(src)).size

  // Normalise every output to a lowercase .jpg name.
  const targetName = basename(file, extname(file)) + '.jpg'
  const tmp = join(DIR, '__tmp__' + targetName)

  await sharp(src)
    .rotate() // respect EXIF orientation, then strip metadata
    .resize({ width: MAX, height: MAX, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(tmp)

  // Remove the source (it may have a different extension/case) then move temp in.
  await unlink(src)
  const finalPath = join(DIR, targetName)
  await rename(tmp, finalPath)

  after += (await stat(finalPath)).size
  console.log(`✓ ${file} -> ${targetName}`)
}

const mb = (b) => (b / 1024 / 1024).toFixed(1)
console.log(
  `\nDone. ${files.length} images: ${mb(before)} MB -> ${mb(after)} MB ` +
    `(${Math.round((1 - after / before) * 100)}% smaller)`
)
