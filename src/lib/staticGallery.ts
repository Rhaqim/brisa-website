/**
 * staticGallery.ts
 *
 * Reads public/assets/gallery/ at runtime and returns a gallery array.
 *
 * Convention:
 *   public/assets/gallery/photo.jpg          → category "General"
 *   public/assets/gallery/Market Support Imo 2025/photo.jpg  → category "Market Support Imo 2025"
 *
 * Any subdirectory becomes an album whose name equals the folder name.
 * Files directly in the gallery root end up in "General".
 */

import fs from 'node:fs';
import path from 'node:path';
import { FALLBACK_GALLERY } from './fallback';

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.avif', '.bmp']);

function isImage(name: string): boolean {
  return IMAGE_EXTS.has(path.extname(name).toLowerCase());
}

/** Derive a human-readable label from a filename (strip extension, replace [-_] with spaces). */
function fileLabel(name: string): string {
  return name.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
}

export interface StaticGalleryImage {
  id: string;
  url: string;
  alt_text: string;
  caption: string;
  category: string;
}

/**
 * Scans public/assets/gallery/ and returns an array ready for use in GalleryAlbums / GallerySection.
 * Falls back to FALLBACK_GALLERY if the directory cannot be read.
 */
export function readStaticGallery(): StaticGalleryImage[] {
  const galleryDir = path.join(process.cwd(), 'public', 'assets', 'gallery');

  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(galleryDir, { withFileTypes: true });
  } catch {
    // Directory missing or unreadable — use hardcoded fallback
    return FALLBACK_GALLERY;
  }

  const images: StaticGalleryImage[] = [];

  for (const entry of entries) {
    if (entry.isFile() && isImage(entry.name)) {
      // Root-level image → General
      images.push({
        id: `static-${entry.name}`,
        url: `/assets/gallery/${encodeURIComponent(entry.name)}`,
        alt_text: fileLabel(entry.name),
        caption: fileLabel(entry.name),
        category: 'General',
      });
    } else if (entry.isDirectory()) {
      const albumName = entry.name;
      const albumDir = path.join(galleryDir, albumName);

      let albumEntries: fs.Dirent[];
      try {
        albumEntries = fs.readdirSync(albumDir, { withFileTypes: true });
      } catch {
        continue;
      }

      for (const file of albumEntries) {
        if (file.isFile() && isImage(file.name)) {
          images.push({
            id: `static-${albumName}-${file.name}`,
            // Encode each segment separately so spaces become %20
            url: `/assets/gallery/${encodeURIComponent(albumName)}/${encodeURIComponent(file.name)}`,
            alt_text: fileLabel(file.name),
            caption: fileLabel(file.name),
            category: albumName,
          });
        }
      }
    }
  }

  // If the directory exists but is empty, still show fallback placeholders
  return images.length > 0 ? images : FALLBACK_GALLERY;
}
