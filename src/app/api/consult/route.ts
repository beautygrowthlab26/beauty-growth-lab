import { NextResponse } from "next/server";
import { consultSchema } from "@/lib/validations";
import { sendNotificationEmail } from "@/lib/mail";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = consultSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_input" }, { status: 400 });
  }

  const {
    name,
    shopName,
    region,
    category,
    ageGroup,
    currentSns,
    toolsToLearn,
    difficulty,
    preferredFormat,
    phone,
  } = parsed.data;

  await sendNotificationEmail(
    `[무료 교육 상담 신청] ${shopName} (${name})`,
    `<p><strong>성함:</strong> ${name}</p>
     <p><strong>매장명:</strong> ${shopName}</p>
     <p><strong>지역:</strong> ${region}</p>
     <p><strong>업종:</strong> ${category}</p>
     <p><strong>연령대:</strong> ${ageGroup}</p>
     <p><strong>현재 사용하는 SNS:</strong> ${currentSns}</p>
     <p><strong>배우고 싶은 툴:</strong> ${toolsToLearn}</p>
     <p><strong>가장 어려운 점:</strong> ${difficulty}</p>
     <p><strong>교육 희망 방식:</strong> ${preferredFormat}</p>
     <p><strong>연락처:</strong> ${phone}</p>`
  );

  return NextResponse.json({ ok: true });
}
