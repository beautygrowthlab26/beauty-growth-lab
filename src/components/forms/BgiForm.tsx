"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Label, Input, ErrorText } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { bgiSchema, type BgiInput } from "@/lib/validations";

export function BgiForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BgiInput>({ resolver: zodResolver(bgiSchema) });

  async function onSubmit(data: BgiInput) {
    setStatus("idle");
    try {
      const res = await fetch("/api/bgi", {
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
      <div className="glass flex flex-col items-center gap-3 rounded-3xl p-12 text-center">
        <CheckCircle2 className="size-10 text-violet" />
        <p className="text-lg font-semibold text-ink">진단 신청이 접수되었습니다</p>
        <p className="text-sm text-muted">저희 팀이 직접 분석한 무료 BGI 리포트를 이메일로 보내드립니다.</p>
        <Button variant="secondary" onClick={() => setStatus("idle")}>
          다시 신청하기
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass flex flex-col gap-5 rounded-3xl p-8 sm:p-10">
      <div className="flex flex-col gap-2">
        <Label htmlFor="company" required>
          브랜드/회사명
        </Label>
        <Input id="company" {...register("company")} placeholder="뷰티성장연구소" />
        <ErrorText>{errors.company?.message}</ErrorText>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="website" required>
          웹사이트 / 플레이스 / 인스타그램 링크
        </Label>
        <Input id="website" {...register("website")} placeholder="https://" />
        <ErrorText>{errors.website?.message}</ErrorText>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="industry" required>
            업종
          </Label>
          <Input id="industry" {...register("industry")} placeholder="예: 스킨케어, 피부과, 헤어샵" />
          <ErrorText>{errors.industry?.message}</ErrorText>
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
        <Label htmlFor="phone">연락처 (선택)</Label>
        <Input id="phone" {...register("phone")} placeholder="010-0000-0000" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex items-start gap-2 text-sm text-muted">
          <input type="checkbox" className="mt-0.5 size-4 accent-violet" {...register("consent")} />
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
        <p className="text-sm font-medium text-rose">전송 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.</p>
      )}

      <Button type="submit" variant="accent" size="lg" disabled={isSubmitting} className="mt-2">
        {isSubmitting && <Loader2 className="size-4 animate-spin" />}
        무료 BGI 진단 신청하기
      </Button>
    </form>
  );
}
