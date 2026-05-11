// src/lib/cloudinary.ts
// Handles server-side Cloudinary operations (signed uploads, deletions).
// For admin uploads, we use the Cloudinary Upload API directly.

const CLOUD_NAME = import.meta.env.CLOUDINARY_CLOUD_NAME;
const API_KEY = import.meta.env.CLOUDINARY_API_KEY;
const API_SECRET = import.meta.env.CLOUDINARY_API_SECRET;

export function getCloudinaryUploadUrl(): string {
  return `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
}

/**
 * Returns the config the admin frontend needs for unsigned uploads.
 * Uses an unsigned upload preset configured in your Cloudinary dashboard.
 */
export function getUploadConfig() {
  return {
    cloudName: CLOUD_NAME,
    uploadPreset: import.meta.env.CLOUDINARY_UPLOAD_PRESET ?? 'brisa_uploads',
    uploadUrl: getCloudinaryUploadUrl(),
  };
}

/**
 * Build a Cloudinary URL with transformations.
 */
export function cloudinaryUrl(
  publicId: string,
  options: { width?: number; height?: number; quality?: number; format?: string } = {}
): string {
  const { width, height, quality = 80, format = 'auto' } = options;
  const transforms = [
    `q_${quality}`,
    `f_${format}`,
    width ? `w_${width}` : null,
    height ? `h_${height}` : null,
    'c_fill',
  ]
    .filter(Boolean)
    .join(',');

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms}/${publicId}`;
}
