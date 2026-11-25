
"use client";

import { useEffect, useState } from "react";
import { researchMetrics as fallbackMetrics } from "@/data/researchMetrics";

type Metrics = {
  publications: number;
  citations: number;
  hIndex: number;
  i10Index: number;
  updated?: boolean;
  status?: string;
  lastChecked?: string;
};

export default function ResearchMetrics() {
  const [metrics, setMetrics] = useState<Metrics>(fallbackMetrics);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMetrics() {
      try {
        const response = await fetch("/api/research-metrics", {
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Unable to fetch research metrics");
        }

        const data: Metrics = await response.json();

        setMetrics({
          publications: data.publications,
          citations: data.citations,
          hIndex: data.hIndex,
          i10Index: data.i10Index,
          updated: data.updated,
          status: data.status,
          lastChecked: data.lastChecked,
        });
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Research metrics fetch failed:", error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchMetrics();

    return () => controller.abort();
  }, []);

  return (
    <div className="mt-6 md:mt-0">
      <h3 className="font-serif text-xl text-[#0d1f3c] mb-4">
        Research Metrics
      </h3>

      <div className="bg-white border border-[#c9a84c] rounded-lg shadow-md overflow-hidden">
        <table className="text-sm w-full">
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-3 font-medium">Publications</td>
              <td className="px-4 py-3 text-right">
                {metrics.publications}
              </td>
            </tr>

            <tr className="border-b">
              <td className="px-4 py-3 font-medium">Citations</td>
              <td className="px-4 py-3 text-right">
                {metrics.citations.toLocaleString("en-IN")}
              </td>
            </tr>

            <tr className="border-b">
              <td className="px-4 py-3 font-medium">h-index</td>
              <td className="px-4 py-3 text-right">
                {metrics.hIndex}
              </td>
            </tr>

            <tr>
              <td className="px-4 py-3 font-medium">i10-index</td>
              <td className="px-4 py-3 text-right">
                {metrics.i10Index}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-500 mt-3 text-right">
        Source: Google Scholar · Last verified: {fallbackMetrics.lastVerified}
      </p>

      <p className="text-xs text-gray-500 mt-1 text-right">
        {loading
          ? "Checking for updates..."
          : metrics.updated
            ? "Latest data fetched from Google Scholar"
            : "Showing last verified values"}
      </p>
    </div>
  );
}
