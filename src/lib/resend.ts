import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

export const resendConfigStatus = {
  hasApiKey: Boolean(apiKey),
};

export function assertResendConfigured() {
  if (!apiKey) {
    throw new Error("Resend is not configured. Missing: RESEND_API_KEY");
  }
}

export const resend = apiKey ? new Resend(apiKey) : null;
