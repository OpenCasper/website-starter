import { v2 as cloudinary } from "cloudinary";

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

export const cloudinaryConfigStatus = {
  hasCloudName: Boolean(cloudName),
  hasApiKey: Boolean(apiKey),
  hasApiSecret: Boolean(apiSecret),
};

export function assertCloudinaryConfigured() {
  const missing = Object.entries(cloudinaryConfigStatus)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missing.length > 0) {
    throw new Error(`Cloudinary is not fully configured. Missing: ${missing.join(", ")}`);
  }
}

if (cloudName && apiKey && apiSecret) {
  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
    secure: true,
  });
}

export { cloudinary };
