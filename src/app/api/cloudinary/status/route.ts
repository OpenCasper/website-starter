import { NextResponse } from "next/server";
import { cloudinary, cloudinaryConfigStatus } from "@/lib/cloudinary";

export const runtime = "nodejs";

export async function GET() {
  const configured =
    cloudinaryConfigStatus.hasCloudName &&
    cloudinaryConfigStatus.hasApiKey &&
    cloudinaryConfigStatus.hasApiSecret;

  if (!configured) {
    return NextResponse.json(
      {
        ok: false,
        configured: false,
        cloudNamePresent: cloudinaryConfigStatus.hasCloudName,
        apiKeyPresent: cloudinaryConfigStatus.hasApiKey,
        apiSecretPresent: cloudinaryConfigStatus.hasApiSecret,
      },
      { status: 503 },
    );
  }

  try {
    await cloudinary.api.ping();

    return NextResponse.json({
      ok: true,
      configured: true,
      provider: "cloudinary",
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        configured: true,
        provider: "cloudinary",
        error: error instanceof Error ? error.message : "Unknown Cloudinary status error",
      },
      { status: 502 },
    );
  }
}
