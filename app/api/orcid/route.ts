import { NextResponse } from "next/server";

type OrcidWorkSummary = {
  title?: {
    title?: {
      value?: string;
    };
  };
  "journal-title"?: {
    value?: string;
  };
  "publication-date"?: {
    year?: {
      value?: string;
    };
  };
  type?: string;
};

type OrcidGroup = {
  "work-summary": OrcidWorkSummary[];
};

type OrcidResponse = {
  group?: OrcidGroup[];
};

type Publication = {
  title: string;
  journal: string;
  year: number;
  type: string;
};

export async function GET() {
  const ORCID_ID = "0000-0002-6290-6380";

  try {
    const response = await fetch(
      `https://pub.orcid.org/v3.0/${ORCID_ID}/works`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch ORCID data.");
    }

    const data = (await response.json()) as OrcidResponse;

    const publications: Publication[] = (data.group ?? [])
      .map((group: OrcidGroup) => {
        const summaries = group["work-summary"];

        const latestWork = summaries.reduce(
          (
            latest: OrcidWorkSummary,
            current: OrcidWorkSummary
          ): OrcidWorkSummary => {
            const latestYear = Number(
              latest["publication-date"]?.year?.value ?? 0
            );

            const currentYear = Number(
              current["publication-date"]?.year?.value ?? 0
            );

            return currentYear > latestYear ? current : latest;
          }
        );

        return {
          title: latestWork.title?.title?.value ?? "No title",
          journal: latestWork["journal-title"]?.value ?? "",
          year: Number(
            latestWork["publication-date"]?.year?.value ?? 0
          ),
          type: latestWork.type ?? "",
        };
      })
      .filter(
        (publication: Publication) =>
          publication.type === "journal-article"
      )
      .filter((publication: Publication) => publication.year > 0)
      .sort(
        (a: Publication, b: Publication) => b.year - a.year
      )
      .slice(0, 10);

    return NextResponse.json(publications);
  } catch {
    return NextResponse.json(
      {
        error: "Failed to fetch ORCID data.",
      },
      {
        status: 500,
      }
    );
  }
}