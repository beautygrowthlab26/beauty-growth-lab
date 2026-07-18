import { ImageResponse } from "next/og.js";
import { writeFile, readFile } from "node:fs/promises";
import path from "node:path";
import React from "react";

const root = process.cwd();
const pretendardDir = path.join(root, "node_modules/pretendard/dist/public/static");
const pretendardBold = await readFile(path.join(pretendardDir, "Pretendard-Bold.otf"));
const pretendardRegular = await readFile(path.join(pretendardDir, "Pretendard-Regular.otf"));

const logoIconBuf = await readFile(path.join(root, "public/logo-icon.png"));
const logoIconDataUri = `data:image/png;base64,${logoIconBuf.toString("base64")}`;

const PRIMARY = "#0F5132";
const IVORY = "#FAF8F3";
const INK = "#1F2937";
const MUTED = "#6B7280";

function OgImage() {
  return React.createElement(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: IVORY,
        position: "relative",
        padding: "64px 80px",
      },
    },
    // top logo lockup
    React.createElement(
      "div",
      { style: { display: "flex", alignItems: "center", gap: 14 } },
      React.createElement("img", { src: logoIconDataUri, width: 48, height: 48 }),
      React.createElement(
        "span",
        { style: { fontSize: 26, fontWeight: 700, color: INK } },
        "Beauty Growth Lab"
      )
    ),
    // middle content
    React.createElement(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 24,
          maxWidth: 940,
        },
      },
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            padding: "8px 20px",
            borderRadius: 9999,
            background: "#DCE7E1",
            color: PRIMARY,
            fontSize: 22,
            fontWeight: 700,
          },
        },
        "40·50대 뷰티 원장님을 위한 실전 교육"
      ),
      React.createElement(
        "span",
        {
          style: {
            fontSize: 60,
            fontWeight: 700,
            color: INK,
            lineHeight: 1.3,
          },
        },
        "40·50대 뷰티 원장님도 직접 만들 수 있습니다"
      ),
      React.createElement(
        "span",
        {
          style: {
            fontSize: 28,
            color: MUTED,
            lineHeight: 1.5,
          },
        },
        "캡컷 · 미리캔버스 · 캔바 · AI로 매장 콘텐츠를 직접 만드는 실전 교육"
      )
    ),
    // bottom
    React.createElement(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 22,
          color: MUTED,
        },
      },
      React.createElement("span", null, "beautygrowthlab.co.kr"),
      React.createElement("span", null, "캡컷 · 캔바 · 미리캔버스 · AI 교육")
    )
  );
}

async function render(element, width, height, outFile) {
  const response = new ImageResponse(element, {
    width,
    height,
    fonts: [
      { name: "Pretendard", data: pretendardRegular, weight: 400, style: "normal" },
      { name: "Pretendard", data: pretendardBold, weight: 700, style: "normal" },
    ],
  });
  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(path.join(root, "public", outFile), buffer);
  console.log(`wrote public/${outFile} (${buffer.length} bytes)`);
}

await render(React.createElement(OgImage), 1200, 630, "og-default.png");
