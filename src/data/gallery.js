// Auto-discover every image in src/assets/gallery using Vite's import.meta.glob.
// This is case-safe (handles .jpg / .JPG) and needs zero manual upkeep —
// drop a new photo in the folder and it shows up automatically.

const modules = import.meta.glob(
  '../assets/gallery/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}',
  { eager: true, import: 'default' }
)

// Try to pull a 4-digit year (20xx) out of the filename for a caption.
function captionFromPath(path) {
  const file = path.split('/').pop() || ''
  const match = file.match(/(20\d{2})/)
  return match ? `Site work · ${match[1]}` : 'Project site'
}

export const galleryImages = Object.entries(modules)
  .map(([path, src]) => ({
    src,
    caption: captionFromPath(path),
    key: path,
  }))
  // Sort by filename so the order is stable across builds.
  .sort((a, b) => a.key.localeCompare(b.key))
