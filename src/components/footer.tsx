import { FluidGradientText } from "@/components/fluid-gradient-text";
import { Logo, GitHub, Twitter, LinkedIn, Dmca} from "@/components/icons";
import { Separator } from "@/components/ui/separator";

interface FooterProps {
    versions: {
        app: string;
        astro: string;
        react: string;
        shadcn: string;
        tailwindcss: string;
    };
    build: {
        id: string;
        tag: string;
        date: string;
    }
}

export default function Footer({props}: {props: FooterProps}) {
    return (
        <footer className="w-full border-t flex flex-col">
            <div className="flex items-center justify-center border-b">
                <div className="w-[50%] border-x flex flex-col">
                    <div className="p-6 border-b-2 border-t bg-[repeating-linear-gradient(315deg,var(--border-lite)_0,var(--border-lite)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px]"></div>
                    <div className="flex items-center justify-between px-3 py-2 border-b">
                        <span className="font-mono">neosubhamoy.com</span>
                        <span className="font-sans text-sm text-muted-foreground">A modern & highly-optimized dev poftfolio</span>
                    </div>
                    <div className="grid grid-cols-4 divide-x divide-y divide-border border-b">
                        <div className="flex flex-col p-3 gap-1">
                            <h6 className="text-[0.65rem] text-muted-foreground">CRAFTED BY</h6>
                            <a target="_blank" href="https://x.com/neo_subhamoy" className="text-sm font-mono underline underline-offset-3 decoration-muted-foreground/50">@neo_subhamoy</a>
                        </div>
                        <div className="flex flex-col p-3 gap-1">
                            <h6 className="text-[0.65rem] text-muted-foreground">VERSION</h6>
                            <a target="_blank" href="#" className="text-sm font-mono underline underline-offset-3 decoration-muted-foreground/50">{props.versions.app}</a>
                        </div>
                        <div className="flex flex-col p-3 gap-1">
                            <h6 className="text-[0.65rem] text-muted-foreground">BUILD</h6>
                            <a target="_blank" href="#" className="text-sm font-mono underline underline-offset-3 decoration-muted-foreground/50">{props.build.tag}</a>
                        </div>
                        <div className="flex flex-col p-3 gap-1">
                            <h6 className="text-[0.65rem] text-muted-foreground">DATE</h6>
                            <p className="text-sm font-mono">{props.build.date}</p>
                        </div>
                        <div className="flex flex-col p-3 gap-1">
                            <h6 className="text-[0.65rem] text-muted-foreground">DEPLOYED ON</h6>
                            <p className="text-sm font-mono">Cloudflare</p>
                        </div>
                        <div className="flex flex-col p-3 gap-1">
                            <h6 className="text-[0.65rem] text-muted-foreground">SOURCE CODE</h6>
                            <a target="_blank" href="#" className="text-sm font-mono underline underline-offset-3 decoration-muted-foreground/50">GitHub</a>
                        </div>
                        <div className="flex flex-col p-3 gap-1">
                            <h6 className="text-[0.65rem] text-muted-foreground">LICENSE</h6>
                            <a target="_blank" href="#" className="text-sm font-mono underline underline-offset-3 decoration-muted-foreground/50">MIT License</a>
                        </div>
                        <div className="flex flex-col p-3 gap-1">
                            <h6 className="text-[0.65rem] text-muted-foreground">ANALYTICS</h6>
                            <p className="text-sm font-mono">Google Analytics</p>
                        </div>
                        <div className="flex flex-col p-3 gap-1 col-span-2">
                            <h6 className="text-[0.65rem] text-muted-foreground">STACK</h6>
                            <div className="flex flex-col gap-0.5">
                                <p className="text-sm font-mono">astro@{props.versions.astro}</p>
                                <p className="text-sm font-mono">react@{props.versions.react}</p>
                                <p className="text-sm font-mono">shadcn@{props.versions.shadcn}</p>
                                <p className="text-sm font-mono">tailwindcss@{props.versions.tailwindcss}</p>
                            </div>
                        </div>
                        <div className="flex flex-col p-3 gap-1 col-span-2">
                            <h6 className="text-[0.65rem] text-muted-foreground">TYPEFACE</h6>
                            <div className="flex flex-col gap-0.5">
                                <p className="text-sm font-mono">Geist</p>
                                <p className="text-sm font-mono">Pixelify Sans</p>
                            </div>
                        </div>
                        <div className="flex flex-col p-3 gap-1 col-span-4">
                            <h6 className="text-[0.65rem] text-muted-foreground">INSPIRED BY</h6>
                            <div className="grid grid-cols-4 gap-x-6">
                                <p className="text-sm font-mono"><span className="text-muted-foreground">01</span> Chanh Dai</p>
                                <p className="text-sm font-mono"><span className="text-muted-foreground">02</span> Tailwind CSS</p>
                                <p className="text-sm font-mono"><span className="text-muted-foreground">03</span> shadcn/ui</p>
                                <p className="text-sm font-mono"><span className="text-muted-foreground">04</span> Vercel</p>
                                <p className="text-sm font-mono"><span className="text-muted-foreground">05</span> Resend</p>
                                <p className="text-sm font-mono"><span className="text-muted-foreground">06</span> Zeno Rocha</p>
                                <p className="text-sm font-mono"><span className="text-muted-foreground">07</span> Evil Charts</p>
                                <p className="text-sm font-mono"><span className="text-muted-foreground">08</span> Devouring Details</p>
                            </div>
                        </div>
                    </div>
                    <div className="spacer p-1.5 border-b"></div>
                    <div className="flex items-center justify-between">
                        <a href="https://neosubhamoy.com" className="flex items-center px-2 py-1">
                            <Logo className="w-10 h-8 text-muted-foreground hover:text-primary" />
                        </a>
                        <div className="flex items-center px-3 py-1 gap-3">
                            <a href="#" className="">
                                <Twitter className="w-3.5 text-muted-foreground hover:text-primary" />
                            </a>
                            <Separator orientation="vertical" />
                            <a href="#" className="">
                                <GitHub className="w-4 text-muted-foreground hover:text-primary" />
                            </a>
                            <Separator orientation="vertical" />
                            <a href="#" className="">
                                <LinkedIn className="w-4 text-muted-foreground hover:text-primary" />
                            </a>
                            <Separator orientation="vertical" />
                            <a href="#" className="">
                                <Dmca className="w-13 text-muted-foreground hover:text-primary" />
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