"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Label, Input, Textarea, Select, ErrorText } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { contactSchema, type ContactInput } from "@/lib/validations";
import { services } from "@/data/services";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactInput) {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card flex flex-col items-center gap-3 rounded-3xl p-12 text-center">
        <CheckCircle2 className="size-10 text-primary" />
        <p className="text-lg font-semibold text-ink">문의가 접수되었습니다</p>
        <p className="text-sm text-muted">빠른 시일 내에 담당 팀이 연락드리겠습니다.</p>
        <Button variant="secondary" onClick={() => setStatus("idle")}>
          다시 작성하기
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card flex flex-col gap-5 rounded-3xl p-8 sm:p-10">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" required>
            이름
          </Label>
          <Input id="name" {...register("name")} placeholder="홍길동" />
          <ErrorText>{errors.name?.message}</ErrorText>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="company" required>
            브랜드/회사명
          </Label>
          <Input id="company" {...register("company")} placeholder="뷰티성장연구소" />
          <ErrorText>{errors.company?.message}</ErrorText>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone" required>
            연락처
          </Label>
          <Input id="phone" {...register("phone")} placeholder="010-0000-0000" />
          <ErrorText>{errors.phone?.message}</ErrorText>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" required>
            이메일
          </Label>
          <Input id="email" type="email" {...register("email")} placeholder="you@brand.com" />
          <ErrorText>{errors.email?.message}</ErrorText>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="interest" required>
          관심 서비스
        </Label>
        <Select id="interest" {...register("interest")} defaultValue="">
          <option value="" disabled>
            선택해주세요
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="잘 모르겠어요">잘 모르겠어요 · 상담 후 결정</option>
        </Select>
        <ErrorText>{errors.interest?.message}</ErrorText>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message" required>
          문의 내용
        </Label>
        <Textarea id="message" {...register("message")} placeholder="브랜드 상황과 궁금한 점을 자유롭게 남겨주세요" />
        <ErrorText>{errors.message?.message}</ErrorText>
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex items-start gap-2 text-sm text-muted">
          <input type="checkbox" className="mt-0.5 size-4 accent-primary" {...register("consent")} />
          <span>
            <Link href="/privacy" className="font-medium text-ink underline underline-offset-2">
              개인정보 수집 및 이용
            </Link>
            에 동의합니다.
          </span>
        </label>
        <ErrorText>{errors.consent?.message}</ErrorText>
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-red-600">전송 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.</p>
      )}

      <Button type="submit" variant="accent" size="lg" disabled={isSubmitting} className="mt-2">
        {isSubmitting && <Loader2 className="size-4 animate-spin" />}
        문의 보내기
      </Button>
    </form>
  );
}
