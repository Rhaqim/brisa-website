// src/lib/cloudinary.ts
// Server-side Cloudinary operations using the official SDK.
// ImageUpload.svelte uses unsigned browser-direct uploads (no SDK needed client-side).
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure:     true,
});

/**
 * Returns the config the admin frontend (ImageUpload.svelte) needs for
 * unsigned browser-direct uploads. No API secret is exposed to the client.
 */
export function getUploadConfig() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME ?? '';
  return {
    cloudName,
    uploadPreset: process.env.CLOUDINARY_UPLOAD_PRESET ?? 'brisa_uploads',
    uploadUrl:    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
  };
}

/**
 * Build a Cloudinary delivery URL with transformations using the SDK.
 * Accepts a full URL or a bare public_id.
 */
export function cloudinaryUrl(
  publicIdOrUrl: string,
  options: { width?: number; height?: number; quality?: number; format?: string; crop?: string } = {}
): string {
  const { width, height, quality = 80, format = 'auto', crop = 'fill' } = options;
  return cloudinary.url(publicIdOrUrl, {
    fetch_format: format,
    quality,
    width,
    height,
    crop,
    secure: true,
  });
}

/**
 * Delete an image from Cloudinary by its public_id.
 * Used by admin gallery/story endpoints when an image is removed.
 */
export async function deleteImage(publicId: string): Promise<void> {
  await cloudinary.uploader.destroy(publicId);
}
