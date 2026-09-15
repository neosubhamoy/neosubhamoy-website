// import { use } from "react"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Spinner } from "@/components/ui/spinner"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import type { Activity } from "@/components/contribution-graph"
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/contribution-graph"

export function GitHubContributions({
  contributions,
  githubProfileUrl,
  className,
}: {
  contributions: Activity[]
  githubProfileUrl: string
  className?: string
}) {
  // const data = use(contributions)

  return (
    <ContributionGraph
      className={cn("mx-auto py-2", className)}
      data={contributions}
      blockSize={11}
      blockMargin={3}
      blockRadius={2}
    >
      <ContributionGraphCalendar
        className="no-scrollbar px-2"
        title="GitHub Contributions"
      >
        {({ activity, dayIndex, weekIndex }) => (
          <Tooltip>
            <TooltipTrigger delay={100} render={<g />}>
              <ContributionGraphBlock
                activity={activity}
                dayIndex={dayIndex}
                weekIndex={weekIndex}
              />
            </TooltipTrigger>
            <TooltipContent side="top" className="font-sans px-3 py-2 text-sm gap-3">
              <p>
                {activity.count} contribution{activity.count > 1 ? "s" : null}{" "}
                on {format(new Date(activity.date), "dd MMM yyyy")}
              </p>
            </TooltipContent>
          </Tooltip>
        )}
      </ContributionGraphCalendar>

      <ContributionGraphFooter className="px-2">
        <ContributionGraphTotalCount>
          {({ totalCount, year }) => (
            <figcaption className="flex text-foreground text-wrap">
              <p className="text-muted-foreground mr-2">Fig. 2.</p>
              <p className="hidden md:block mr-1">{totalCount.toLocaleString("en")} contributions, {format(new Date(contributions[0].date), "dd.MM.yyyy")} - {format(new Date(contributions[contributions.length - 1].date), "dd.MM.yyyy")}. Source:</p>
              <p className="md:hidden mr-1">{totalCount.toLocaleString("en")} contributions in {year} on</p>
              <a
                className="text-foreground link-underline"
                href={githubProfileUrl}
                target="_blank"
                rel="noopener"
              >
                GitHub
              </a>
              .
            </figcaption>
          )}
        </ContributionGraphTotalCount>

        <ContributionGraphLegend />
      </ContributionGraphFooter>
    </ContributionGraph>
  )
}

export function GitHubContributionsFallback() {
  return (
    <div className="flex h-40.5 w-full items-center justify-center">
      <Spinner className="text-muted-foreground" />
    </div>
  )
}
