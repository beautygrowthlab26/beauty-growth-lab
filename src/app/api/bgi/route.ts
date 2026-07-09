import { NextResponse } from "next/server";
import { bgiSchema } from "@/lib/validations";
import { sendNotificationEmail } from "@/lib/mail";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = bgiSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_input" }, { status: 400 });
  }

  const { company, website, industry, email, phone } = parsed.data;

  await sendNotificationEmail(
    `[무료 BGI 진단 신청] ${company}`,
    `<p><strong>브랜드/회사명:</strong> ${company}</p>
     <p><strong>웹사이트/링크:</strong> ${website}</p>
     <p><strong>업종:</strong> ${industry}</p>
     <p><strong>이메일:</strong> ${email}</p>
     <p><strong>연락처:</strong> ${phone ?? "-"}</p>`
  );

  return NextResponse.json({ ok: true });
}
