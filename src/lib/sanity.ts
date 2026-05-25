import { createClient } from "@sanity/client";

export const sanityConfig = {
  projectId: process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.SANITY_API_VERSION || process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-05-25",
};

const readToken = process.env.SANITY_API_READ_TOKEN;
const writeToken = process.env.SANITY_API_WRITE_TOKEN;

export const sanityConfigStatus = {
  hasProjectId: Boolean(sanityConfig.projectId),
  hasDataset: Boolean(sanityConfig.dataset),
  hasReadToken: Boolean(readToken),
  hasWriteToken: Boolean(writeToken),
};

function assertBaseSanityConfigured() {
  const missing = Object.entries({
    projectId: sanityConfigStatus.hasProjectId,
    dataset: sanityConfigStatus.hasDataset,
  })
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missing.length > 0) {
    throw new Error(`Sanity is not configured. Missing: ${missing.join(", ")}`);
  }
}

export function assertSanityReadConfigured() {
  assertBaseSanityConfigured();

  if (!readToken) {
    throw new Error("Sanity read token is not configured. Missing: SANITY_API_READ_TOKEN");
  }
}

export function assertSanityWriteConfigured() {
  assertBaseSanityConfigured();

  if (!writeToken) {
    throw new Error("Sanity write token is not configured. Missing: SANITY_API_WRITE_TOKEN");
  }
}

export const sanityReadClient =
  sanityConfig.projectId && sanityConfig.dataset && readToken
    ? createClient({
        ...sanityConfig,
        token: readToken,
        useCdn: false,
      })
    : null;

export const sanityWriteClient =
  sanityConfig.projectId && sanityConfig.dataset && writeToken
    ? createClient({
        ...sanityConfig,
        token: writeToken,
        useCdn: false,
      })
    : null;
