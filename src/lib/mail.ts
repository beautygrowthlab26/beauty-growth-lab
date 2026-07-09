import { Resend } from "resend";
import { siteConfig } from "@/lib/seo";

export async function sendNotificationEmail(subject: string, html: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;

  if (!apiKey) {
    console.log(`[mail:dev] to=${to} subject=${subject}\n${html}`);
    return { delivered: false as const };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: `Beauty Growth Lab <noreply@${new URL(siteConfig.url).hostname}>`,
    to,
    subject,
    html,
  });

  if (error) {
    console.error("[mail:resend] send failed", error);
    throw new Error(`resend_error: ${error.message}`);
  }

  return { delivered: true as const };
}
