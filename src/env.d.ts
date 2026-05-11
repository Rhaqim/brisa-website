/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    user?: {
      userId: string;
      email: string;
    };
  }
}

interface ImportMetaEnv {
  readonly DATABASE_URL: string;
  readonly JWT_SECRET: string;
  readonly CLOUDINARY_CLOUD_NAME: string;
  readonly CLOUDINARY_API_KEY: string;
  readonly CLOUDINARY_API_SECRET: string;
  readonly CLOUDINARY_UPLOAD_PRESET: string;
}
