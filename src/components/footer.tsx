import { FluidGradientText } from "@/components/fluid-gradient-text";
import { Logo, GitHub, Twitter, LinkedIn, Dmca, Cloudflare} from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { constants } from "@/lib/constants";

interface FooterProps {
    versions: {
        astro: string;
        react: string;
        baseui: string;
        shadcn: string;
        tailwindcss: string;
    };
    build: {
        id: string;
        date: string;
    };
    commit: {
        sha: string;
        url: string;
    }
}

export default function Footer({props}: {props: FooterProps}) {
    return (
        <footer className="w-full border-t flex flex-col">
            <div className="flex items-center justify-center border-b">
                <div className="w-[96%] sm:w-[90%] md:max-w-3xl border-x flex flex-col">
                    <div className="stripe-divider screen-line-bottom h-12"></div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 py-2.5 screen-line-bottom">
                        <span className="font-mono">{constants.homepage}</span>
                        <span className="font-sans text-sm text-muted-foreground">A modern & highly-optimized dev poftfolio</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y divide-border border-b">
                        <div className="flex flex-col px-4 py-3 gap-1">
                            <h6 className="text-[0.65rem] text-muted-foreground">CRAFTED BY</h6>
                            <a target="_blank" href={constants.socials.twitter.url} className="text-sm font-mono link-underline">@{constants.socials.twitter.username}</a>
                        </div>
                        <div className="flex flex-col px-4 py-3 gap-1">
                            <h6 className="text-[0.65rem] text-muted-foreground">COMMIT</h6>
                            <a target="_blank" href={constants.repo + '/commit/' + props.commit.sha} className="text-sm font-mono link-underline">{props.commit.sha.slice(0, 7)}</a>
                        </div>
                        <div className="flex flex-col px-4 py-3 gap-1">
                            <h6 className="text-[0.65rem] text-muted-foreground">BUILD</h6>
                            <p className="text-sm font-mono">{props.build.id}</p>
                        </div>
                        <div className="flex flex-col px-4 py-3 gap-1">
                            <h6 className="text-[0.65rem] text-muted-foreground">DATE</h6>
                            <p className="text-sm font-mono">{props.build.date}</p>
                        </div>
                        <div className="flex flex-col px-4 py-3 gap-1">
                            <h6 className="text-[0.65rem] text-muted-foreground">DEPLOYED ON</h6>
                            <span className="flex items-center gap-2">
                                <Cloudflare className="w-4.5" />
                                <p className="text-sm font-mono">Cloudflare</p>
                            </span>
                        </div>
                        <div className="flex flex-col px-4 py-3 gap-1">
                            <h6 className="text-[0.65rem] text-muted-foreground">SOURCE CODE</h6>
                            <a target="_blank" href={constants.repo} className="text-sm font-mono link-underline">GitHub</a>
                        </div>
                        <div className="flex flex-col px-4 py-3 gap-1">
                            <h6 className="text-[0.65rem] text-muted-foreground">LICENSE</h6>
                            <a target="_blank" href={constants.repo + '/blob/main/LICENSE'} className="text-sm font-mono link-underline">MIT License</a>
                        </div>
                        <div className="flex flex-col px-4 py-3 gap-1">
                            <h6 className="text-[0.65rem] text-muted-foreground">ANALYTICS</h6>
                            <p className="text-sm font-mono">Google Analytics</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-y divide-border border-b">
                        <div className="flex flex-col px-4 py-3 gap-1">
                            <h6 className="text-[0.65rem] text-muted-foreground">STACK</h6>
                            <div className="flex flex-col gap-0.5">
                                <p className="text-sm font-mono">astro@{props.versions.astro}</p>
                                <p className="text-sm font-mono">react@{props.versions.react}</p>
                                <p className="text-sm font-mono">base-ui@{props.versions.baseui}</p>
                                <p className="text-sm font-mono">shadcn@{props.versions.shadcn}</p>
                                <p className="text-sm font-mono">tailwindcss@{props.versions.tailwindcss}</p>
                            </div>
                        </div>
                        <div className="flex flex-col px-4 py-3 gap-1">
                            <h6 className="text-[0.65rem] text-muted-foreground">TYPEFACE</h6>
                            <div className="flex flex-col gap-0.5">
                                <p className="text-sm font-mono">Geist</p>
                                <p className="text-sm font-mono">Pixelify Sans</p>
                                <p className="text-sm font-mono">Caveat</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col px-4 py-3 gap-1">
                        <h6 className="text-[0.65rem] text-muted-foreground">INSPIRED BY</h6>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8">
                            <p className="text-sm"><span className="font-mono text-muted-foreground mr-1">01</span> Chanh Dai</p>
                            <p className="text-sm"><span className="font-mono text-muted-foreground mr-1">02</span> Tailwind CSS</p>
                            <p className="text-sm"><span className="font-mono text-muted-foreground mr-1">03</span> shadcn/ui</p>
                            <p className="text-sm"><span className="font-mono text-muted-foreground mr-1">04</span> Vercel</p>
                            <p className="text-sm"><span className="font-mono text-muted-foreground mr-1">05</span> Resend</p>
                            <p className="text-sm"><span className="font-mono text-muted-foreground mr-1">06</span> Evil Charts</p>
                            <p className="text-sm"><span className="font-mono text-muted-foreground mr-1">07</span> Zeno Rocha</p>
                            <p className="text-sm"><span className="font-mono text-muted-foreground mr-1">08</span> Devouring Details</p>
                            <p className="text-sm"><span className="font-mono text-muted-foreground mr-1">09</span> Making Software</p>
                            <p className="text-sm"><span className="font-mono text-muted-foreground mr-1">10</span> Manu Arora</p>
                            <p className="text-sm"><span className="font-mono text-muted-foreground mr-1">11</span> Linear</p>
                            <p className="text-sm"><span className="font-mono text-muted-foreground mr-1">12</span> Aceternity UI</p>
                        </div>
                    </div>
                    <div className="spacer p-2 screen-line-top screen-line-bottom"></div>
                    <div className="flex items-center justify-between">
                        <a href="/" className="flex items-center px-2.5 py-1">
                            <Logo className="w-10 h-8 text-muted-foreground hover:text-foreground" />
                        </a>
                        <div className="flex items-center px-4 py-1 gap-3">
                            <a href={constants.socials.twitter.url} target="_blank">
                                <Twitter className="w-3.5 text-muted-foreground hover:text-foreground" />
                            </a>
                            <Separator orientation="vertical" />
                            <a href={constants.socials.github.url} target="_blank">
                                <GitHub className="w-4 text-muted-foreground hover:text-foreground" />
                            </a>
                            <Separator orientation="vertical" />
                            <a href={constants.socials.linkedin.url} target="_blank">
                                <LinkedIn className="w-4 text-muted-foreground hover:text-foreground" />
                            </a>
                            <Separator orientation="vertical" />
                            <a href={constants.dmca} target="_blank">
                                <Dmca className="w-13 text-muted-foreground hover:text-foreground" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <FluidGradientText text="SubhamoY" svgViewBoxWidth={1500} />
                <div className="spacer w-full p-10"></div>
            </div>
        </footer>
    );
}