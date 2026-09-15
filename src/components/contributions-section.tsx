import type { Activity } from "@/components/contribution-graph";
import { GitHubContributions } from "@/components/github-contributions";

interface ContributionsSectionProps {
    contributions: Activity[];
    profileUrl: string;
}

export default function ContributionsSection({ props }: { props: ContributionsSectionProps }) {
    return (
        <section className="flex flex-col px-1 py-2.5 border-b">
            <h2 className="sr-only">GitHub Contributions</h2>
            <GitHubContributions
                contributions={props.contributions}
                githubProfileUrl={props.profileUrl}
            />
        </section>
    );
}