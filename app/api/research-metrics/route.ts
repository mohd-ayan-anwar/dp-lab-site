
import { NextResponse } from "next/server";
import { researchMetrics } from "@/data/researchMetrics";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const SCHOLAR_URL =
  "https://scholar.google.com/citations?user=GaleEZ8AAAAJ&hl=en";

function extractNumbers(html: string, className: string) {
  const escaped = className.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(
    `<td[^>]*class=["'][^"']*${escaped}[^"']*["'][^>]*>([\\s\\S]*?)<\\/td>`,
    "gi"
  );

  return [...html.matchAll(regex)]
    .map((match) =>
      Number(match[1].replace(/<[^>]*>/g, "").replace(/,/g, "").trim())
    )
    .filter(Number.isFinite);
}

function getFallback() {
  return {
    ...researchMetrics,
    updated: false,
    status: "Using last verified Google Scholar values",
  };
}

export async function GET() {
  try {
    const response = await fetch(SCHOLAR_URL, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/158.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml",
      },
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      return NextResponse.json(getFallback());
    }

    const html = await response.text();

    if (
      /not a robot|unusual traffic|captcha|sorry\/index|verify you are/i.test(
        html
      )
    ) {
      return NextResponse.json(getFallback());
    }

    const values = extractNumbers(html, "gsc_rsb_std");

    if (values.length < 6) {
      return NextResponse.json(getFallback());
    }

    const [citations, , hIndex, , i10Index] = values;

    if (
      !Number.isFinite(citations) ||
      !Number.isFinite(hIndex) ||
      !Number.isFinite(i10Index) ||
      citations <= 0
    ) {
      return NextResponse.json(getFallback());
    }

    return NextResponse.json({
      ...researchMetrics,
      citations,
      hIndex,
      i10Index,
      updated: true,
      status: "Fetched from Google Scholar",
      lastChecked: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(getFallback());
  }
}
