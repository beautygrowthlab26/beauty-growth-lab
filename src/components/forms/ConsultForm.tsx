"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Label, Input, Textarea, Select, ErrorText } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { consultSchema, type ConsultInput } from "@/lib/validations";

const categories = [
  "피부관리실",
  "에스테틱",
  "네일샵",
  "속눈썹샵",
  "반영구",
  "두피·헤드스파",
  "체형관리",
  "왁싱샵",
  "기타",
];

const ageGroups = ["30대 이하", "40대", "50대", "60대 이상"];

const snsOptions = ["인스타그램", "네이버 블로그", "카카오채널", "아직 운영하는 SNS가 없어요", "기타"];

const toolOptions = ["캡컷", "캔바", "미리캔버스", "ChatGPT(AI)", "잘 모르겠어요, 추천받고 싶어요"];

const formatOptions = ["1:1 코칭", "소규모 그룹 교육", "출장 교육", "온라인 교육", "아직 정하지 못했어요"];

export function ConsultForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ConsultInput>({ resolver: zodResolver(consultSchema) });

  async function onSubmit(data: ConsultInput) {
    setStatus("idle");
    try {
      const res = await fetch("/api/consult", {
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
        <p className="text-lg font-semibold text-ink">상담 신청이 접수되었습니다</p>
        <p className="text-base text-muted">
          상담 신청만으로 교육이나 서비스 결제가 확정되지 않습니다. 현재 상황을 확인한 뒤 적합한 과정을 안내해 드립니다.
        </p>
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
            성함
          </Label>
          <Input id="name" {...register("name")} placeholder="홍길동" />
          <ErrorText>{errors.name?.message}</ErrorText>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="shopName" required>
            매장명
          </Label>
          <Input id="shopName" {...register("shopName")} placeholder="OO 스킨케어" />
          <ErrorText>{errors.shopName?.message}</ErrorText>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="region" required>
            지역
          </Label>
          <Input id="region" {...register("region")} placeholder="예: 경기 광명" />
          <ErrorText>{errors.region?.message}</ErrorText>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="category" required>
            업종
          </Label>
          <Select id="category" {...register("category")} defaultValue="">
            <option value="" disabled>
              선택해주세요
            </option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </Select>
          <ErrorText>{errors.category?.message}</ErrorText>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="ageGroup" required>
            연령대
          </Label>
          <Select id="ageGroup" {...register("ageGroup")} defaultValue="">
            <option value="" disabled>
              선택해주세요
            </option>
            {ageGroups.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </Select>
          <ErrorText>{errors.ageGroup?.message}</ErrorText>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="currentSns" required>
            현재 사용하는 SNS
          </Label>
          <Select id="currentSns" {...register("currentSns")} defaultValue="">
            <option value="" disabled>
              선택해주세요
            </option>
            {snsOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </Select>
          <ErrorText>{errors.currentSns?.message}</ErrorText>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="toolsToLearn" required>
            배우고 싶은 툴
          </Label>
          <Select id="toolsToLearn" {...register("toolsToLearn")} defaultValue="">
            <option value="" disabled>
              선택해주세요
            </option>
            {toolOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </Select>
          <ErrorText>{errors.toolsToLearn?.message}</ErrorText>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="preferredFormat" required>
            교육 희망 방식
          </Label>
          <Select id="preferredFormat" {...register("preferredFormat")} defaultValue="">
            <option value="" disabled>
              선택해주세요
            </option>
            {formatOptions.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </Select>
          <ErrorText>{errors.preferredFormat?.message}</ErrorText>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="difficulty" required>
          가장 어려운 점
        </Label>
        <Textarea id="difficulty" {...register("difficulty")} placeholder="예: 릴스를 만들고 싶은데 영상 자르는 것부터 어렵습니다" />
        <ErrorText>{errors.difficulty?.message}</ErrorText>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="phone" required>
          연락처
        </Label>
        <Input id="phone" {...register("phone")} placeholder="010-0000-0000" />
        <ErrorText>{errors.phone?.message}</ErrorText>
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex items-start gap-2 text-base text-muted">
          <input type="checkbox" className="mt-1 size-5 accent-primary" {...register("consent")} />
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
        무료 교육 상담 신청하기
      </Button>
    </form>
  );
}
