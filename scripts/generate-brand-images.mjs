import { ImageResponse } from "next/og.js";
import { writeFile, readFile } from "node:fs/promises";
import path from "node:path";
import React from "react";

const root = process.cwd();
const pretendardDir = path.join(root, "node_modules/pretendard/dist/public/static");
const pretendardBold = await readFile(path.join(pretendardDir, "Pretendard-Bold.otf"));
const pretendardRegular = await readFile(path.join(pretendardDir, "Pretendard-Regular.otf"));

const SPARKLE_PATH =
  "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z";

function sparkleDataUri(color = "white") {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}"><path d="${SPARKLE_PATH}"/></svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

const VIOLET = "#5B4CFF";
const ROSE = "#FF5A7A";
const INK = "#0E0E12";

function Logo() {
  return React.createElement(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(135deg, ${VIOLET} 0%, ${ROSE} 100%)`,
      },
    },
    React.createElement("img", {
      src: sparkleDataUri("white"),
      width: 260,
      height: 260,
    })
  );
}

function OgImage() {
  return React.createElement(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: INK,
        position: "relative",
        padding: "64px 80px",
      },
    },
    // glow blobs
    React.createElement("div", {
      style: {
        position: "absolute",
        top: -180,
        left: -120,
        width: 640,
        height: 640,
        borderRadius: 9999,
        background: `radial-gradient(circle, ${VIOLET}55 0%, ${VIOLET}00 70%)`,
        display: "flex",
      },
    }),
    React.createElement("div", {
      style: {
        position: "absolute",
        bottom: -220,
        right: -140,
        width: 620,
        height: 620,
        borderRadius: 9999,
        background: `radial-gradient(circle, ${ROSE}4d 0%, ${ROSE}00 70%)`,
        display: "flex",
      },
    }),
    // top logo lockup
    React.createElement(
      "div",
      { style: { display: "flex", alignItems: "center", gap: 14 } },
      React.createElement(
        "div",
        {
          style: {
            width: 48,
            height: 48,
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: `linear-gradient(135deg, ${VIOLET} 0%, ${ROSE} 100%)`,
          },
        },
        React.createElement("img", { src: sparkleDataUri("white"), width: 24, height: 24 })
      ),
      React.createElement(
        "span",
        { style: { fontSize: 26, fontWeight: 700, color: "white" } },
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
          maxWidth: 920,
        },
      },
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            padding: "8px 20px",
            borderRadius: 9999,
            background: "#5B4CFF33",
            color: "#C9C3FF",
            fontSize: 22,
            fontWeight: 700,
          },
        },
        "SEO → AEO → GEO"
      ),
      React.createElement(
        "span",
        {
          style: {
            fontSize: 64,
            fontWeight: 700,
            color: "white",
            lineHeight: 1.25,
          },
        },
        "AI가 추천하는 브랜드를 만듭니다"
      ),
      React.createElement(
        "span",
        {
          style: {
            fontSize: 28,
            color: "#A3A3AE",
            lineHeight: 1.5,
          },
        },
        "AI Search Optimization Company"
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
          color: "#6B6B76",
        },
      },
      React.createElement("span", null, "beautygrowthlab.co.kr"),
      React.createElement("span", null, "SEO · AEO · GEO")
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

await render(React.createElement(Logo), 512, 512, "logo.png");
await render(React.createElement(OgImage), 1200, 630, "og-default.png");
