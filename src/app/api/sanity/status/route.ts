import { NextResponse } from "next/server";
import { sanityConfig, sanityConfigStatus, sanityReadClient, sanityWriteClient } from "@/lib/sanity";

export const runtime = "nodejs";

export async function GET() {
  const baseConfigured = sanityConfigStatus.hasProjectId && sanityConfigStatus.hasDataset;
  const readConfigured = baseConfigured && sanityConfigStatus.hasReadToken && Boolean(sanityReadClient);
  const writeConfigured = baseConfigured && sanityConfigStatus.hasWriteToken && Boolean(sanityWriteClient);

  if (!baseConfigured || !readConfigured || !writeConfigured) {
    return NextResponse.json(
      {
        ok: false,
        configured: false,
        provider: "sanity",
        projectIdPresent: sanityConfigStatus.hasProjectId,
        datasetPresent: sanityConfigStatus.hasDataset,
        readTokenPresent: sanityConfigStatus.hasReadToken,
        writeTokenPresent: sanityConfigStatus.hasWriteToken,
      },
      { status: 503 },
    );
  }

  try {
    const [readResult, writeResult] = await Promise.all([
      sanityReadClient!.fetch<number>("count(*[_id in path('*')])"),
      sanityWriteClient!.fetch<number>("count(*[_id in path('*')])"),
    ]);

    return NextResponse.json({
      ok: true,
      configured: true,
      provider: "sanity",
      projectId: sanityConfig.projectId,
      dataset: sanityConfig.dataset,
      readTokenWorks: typeof readResult === "number",
      writeTokenWorks: typeof writeResult === "number",
      documentCount: readResult,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        configured: true,
        provider: "sanity",
        error: error instanceof Error ? error.message : "Unknown Sanity status error",
      },
      { status: 502 },
    );
  }
}
