import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { sendNotificationEmail } from "@/lib/mail";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_input" }, { status: 400 });
  }

  const { name, company, phone, email, interest, message } = parsed.data;

  await sendNotificationEmail(
    `[문의] ${company} - ${interest}`,
    `<p><strong>이름:</strong> ${name}</p>
     <p><strong>브랜드/회사명:</strong> ${company}</p>
     <p><strong>연락처:</strong> ${phone}</p>
     <p><strong>이메일:</strong> ${email}</p>
     <p><strong>관심 서비스:</strong> ${interest}</p>
     <p><strong>문의 내용:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>`
  );

  return NextResponse.json({ ok: true });
}
