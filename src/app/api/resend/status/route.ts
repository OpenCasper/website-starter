import { NextResponse } from "next/server";
import { resend, resendConfigStatus } from "@/lib/resend";

export const runtime = "nodejs";

export async function GET() {
  if (!resendConfigStatus.hasApiKey || !resend) {
    return NextResponse.json(
      {
        ok: false,
        configured: false,
        apiKeyPresent: resendConfigStatus.hasApiKey,
      },
      { status: 503 },
    );
  }

  try {
    const domains = await resend.domains.list();

    return NextResponse.json({
      ok: true,
      configured: true,
      provider: "resend",
      domainsAvailable: Array.isArray(domains.data) ? domains.data.length : null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        configured: true,
        provider: "resend",
        error: error instanceof Error ? error.message : "Unknown Resend status error",
      },
      { status: 502 },
    );
  }
}
