import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "이름을 입력해주세요"),
  company: z.string().min(1, "브랜드/회사명을 입력해주세요"),
  phone: z.string().min(1, "연락처를 입력해주세요"),
  email: z.string().email("올바른 이메일을 입력해주세요"),
  interest: z.string().min(1, "관심 서비스를 선택해주세요"),
  message: z.string().min(10, "문의 내용을 10자 이상 입력해주세요"),
  consent: z.literal(true, "개인정보 수집 및 이용에 동의해주세요"),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const consultSchema = z.object({
  name: z.string().min(1, "성함을 입력해주세요"),
  shopName: z.string().min(1, "매장명을 입력해주세요"),
  region: z.string().min(1, "지역을 입력해주세요"),
  category: z.string().min(1, "업종을 선택해주세요"),
  ageGroup: z.string().min(1, "연령대를 선택해주세요"),
  currentSns: z.string().min(1, "현재 사용하는 SNS를 선택해주세요"),
  toolsToLearn: z.string().min(1, "배우고 싶은 툴을 선택해주세요"),
  difficulty: z.string().min(5, "가장 어려운 점을 5자 이상 입력해주세요"),
  preferredFormat: z.string().min(1, "교육 희망 방식을 선택해주세요"),
  phone: z.string().min(1, "연락처를 입력해주세요"),
  consent: z.literal(true, "개인정보 수집 및 이용에 동의해주세요"),
});

export type ConsultInput = z.infer<typeof consultSchema>;
