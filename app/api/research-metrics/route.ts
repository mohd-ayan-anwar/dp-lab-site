
import { NextResponse } from "next/server";
import { researchMetrics } from "@/data/researchMetrics";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  return NextResponse.json({
    ...researchMetrics,
    updated: false,
    status: "Showing manually verified Google Scholar values",
  });
}
