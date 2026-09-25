import type { Activity } from "@/components/contribution-graph";
import { GitHubContributions } from "@/components/github-contributions";

interface ContributionsSectionProps {
    contributions: Activity[];
    profileUrl: string;
}

export default function ContributionsSection({ props }: { props: ContributionsSectionProps }) {
    return (
        <section className="flex flex-col px-2 py-2.5 screen-line-bottom">
            <h2 className="sr-only">GitHub Contributions</h2>
            <GitHubContributions
                contributions={props.contributions}
                githubProfileUrl={props.profileUrl}
            />
        </section>
    );
}