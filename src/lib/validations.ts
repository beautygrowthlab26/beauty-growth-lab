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

export const bgiSchema = z.object({
  company: z.string().min(1, "브랜드/회사명을 입력해주세요"),
  website: z.string().min(1, "웹사이트 또는 플레이스/인스타그램 링크를 입력해주세요"),
  industry: z.string().min(1, "업종을 입력해주세요"),
  email: z.string().email("올바른 이메일을 입력해주세요"),
  phone: z.string().optional(),
  consent: z.literal(true, "개인정보 수집 및 이용에 동의해주세요"),
});

export type BgiInput = z.infer<typeof bgiSchema>;
