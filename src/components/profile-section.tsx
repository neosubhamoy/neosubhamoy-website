import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TextFlip } from "@/components/text-flip";
import { ShimmeringText } from "@/components/shimmering-text";
import { Bluesky, Discord, GitHub, LinkedIn, Reddit, Twitter, Verified } from "@/components/icons";
import PronunciationVoiceover from "@/components/pronunciation-voiceover";
import { CodeXml, Lightbulb, Link, Mail, MapPin, Mars, Phone } from "lucide-react";
import ZoneClock from "@/components/zone-clock";
import { CopyButton } from "@/components/copy-button";
import { constants } from "@/lib/constants";
import { cn } from "cn";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { buttonVariants } from "@/components/ui/button";

export interface ProfileSectionProps {
    profilePic: string;
    pronunciationAudio: string;
}

export default function ProfileSection({ props }: { props: ProfileSectionProps }) {
    return (
        <section className="flex flex-col">
            <div className="flex items-center screen-line-top screen-line-bottom">
                <div className="flex items-center justify-center p-0.5 border-r">
                    <Avatar className="size-30 md:size-40">
                        <AvatarImage
                            src={props.profilePic}
                            alt="@neo_subhamoy"
                            className="dark:brightness-85 transition duration-1500 ease-in-out"
                        />
                        <AvatarFallback>SB</AvatarFallback>
                    </Avatar>
                </div>
                <div className="grow h-full grid grid-rows-[1fr_auto_auto] divide-y divide-border">
                    <div className=""></div>
                    <div className="flex items-center px-4 gap-2">
                        <h1 className="hidden md:block text-[2rem]/none font-medium tracking-tight">Subhamoy Biswas</h1>
                        <h1 className="md:hidden text-[2rem]/none font-medium tracking-tight">Subhamoy</h1>
                        <Verified className="size-4.5 mt-0.5" />
                        <PronunciationVoiceover className="w-4.5 mt-0.5 text-muted-foreground hover:text-foreground" audioSrc={props.pronunciationAudio} />
                    </div>
                    <div className="h-12 md:h-8.5 px-4 pt-1 pb-1.5">
                        <TextFlip interval={3.5}>
                            <ShimmeringText className="font-mono text-sm text-balance" text="Full Stack Developer." />
                            <ShimmeringText className="font-mono text-sm text-balance" text="Design Engineer." />
                            <ShimmeringText className="font-mono text-sm text-balance" text="Open source contributor." />
                            <ShimmeringText className="font-mono text-sm text-balance" text="Placing every pixel with perfection." />
                        </TextFlip>
                    </div>
                </div>
            </div>
            <div className="stripe-divider screen-line-bottom"></div>
            <h2 className="sr-only">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-x-8 gap-y-2.5 relative screen-line-bottom">
                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 border-l border-border border-dashed pointer-events-none"></div>
                <div className="flex items-center gap-4 md:col-span-2">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-[0.40rem] select-none border border-muted-foreground/15 bg-muted ring-1 ring-border/50 ring-offset-1 ring-offset-background dark:ring-line">
                        <CodeXml className="w-4 text-muted-foreground" />
                    </div>
                    <p className="text-sm font-mono text-balance">Freelancer at @<a href="#" className="hover:link-underline ml-0.5 font-medium">Upwork</a></p>
                </div>
                <div className="flex items-center gap-4 md:col-span-2">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-[0.40rem] select-none border border-muted-foreground/15 bg-muted ring-1 ring-border/50 ring-offset-1 ring-offset-background dark:ring-line">
                        <Lightbulb className="w-4 text-muted-foreground" />
                    </div>
                    <p className="text-sm font-mono text-balance">Creator of @<a href="#" className="hover:link-underline ml-0.5 font-medium">NeoDLP</a></p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-[0.40rem] select-none border border-muted-foreground/15 bg-muted ring-1 ring-border/50 ring-offset-1 ring-offset-background dark:ring-line">
                        <MapPin className="w-4 text-muted-foreground" />
                    </div>
                    <a href={'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(constants.location)} target="_blank" className="text-sm font-mono text-balance hover:link-underline font-medium">{constants.location}</a>
                </div>
                <ZoneClock />
                <div className="flex items-center gap-4">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-[0.40rem] select-none border border-muted-foreground/15 bg-muted ring-1 ring-border/50 ring-offset-1 ring-offset-background dark:ring-line">
                        <Phone className="w-4 text-muted-foreground" />
                    </div>
                    <div className="group flex items-center gap-2">
                        <a href={'tel:' + constants.phone} className="text-sm font-mono text-balance hover:link-underline font-medium">{constants.phone}</a>
                        <CopyButton
                            className="hidden group-hover:flex text-muted-foreground hover:text-foreground"
                            variant="ghost"
                            size="icon-xs"
                            text={constants.phone}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-[0.40rem] select-none border border-muted-foreground/15 bg-muted ring-1 ring-border/50 ring-offset-1 ring-offset-background dark:ring-line">
                        <Mail className="w-4 text-muted-foreground" />
                    </div>
                    <div className="group flex items-center gap-2">
                        <a href={'mailto:' + constants.email} className="text-sm font-mono text-balance hover:link-underline font-medium">{constants.email}</a>
                        <CopyButton
                            className="hidden group-hover:flex text-muted-foreground hover:text-foreground"
                            variant="ghost"
                            size="icon-xs"
                            text={constants.email}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-[0.40rem] select-none border border-muted-foreground/15 bg-muted ring-1 ring-border/50 ring-offset-1 ring-offset-background dark:ring-line">
                        <Link className="w-4 text-muted-foreground" />
                    </div>
                    <a href="/" className="text-sm font-mono text-balance hover:link-underline font-medium">{constants.homepage}</a>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-[0.40rem] select-none border border-muted-foreground/15 bg-muted ring-1 ring-border/50 ring-offset-1 ring-offset-background dark:ring-line">
                        <Mars className="w-4 text-muted-foreground" />
                    </div>
                    <p className="text-sm font-mono text-balance">he/him</p>
                </div>
            </div>
            <h2 className="sr-only">Socials</h2>
            <div className="flex items-center gap-2 p-4 screen-line-bottom">
                <Tooltip>
                    <TooltipTrigger delay={100} render={
                        <a href={constants.socials.twitter.url + '?utm_source=' + constants.homepage} target="_blank" className={cn(buttonVariants({ variant: "outline", size: "icon" }), "rounded-md text-muted-foreground hover:text-foreground")}>
                            <Twitter className="w-4" />
                        </a>
                    } />
                    <TooltipContent side="top" className="px-3 py-2 text-sm gap-3">
                        X (@{constants.socials.twitter.username})
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger delay={100} render={
                        <a href={constants.socials.github.url + '?utm_source=' + constants.homepage} target="_blank" className={cn(buttonVariants({ variant: "outline", size: "icon" }), "rounded-md text-muted-foreground hover:text-foreground")}>
                            <GitHub className="w-4" />
                        </a>
                    } />
                    <TooltipContent side="top" className="px-3 py-2 text-sm gap-3">
                        GitHub ({constants.socials.github.username})
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger delay={100} render={
                        <a href={constants.socials.linkedin.url + '?utm_source=' + constants.homepage} target="_blank" className={cn(buttonVariants({ variant: "outline", size: "icon" }), "rounded-md text-muted-foreground hover:text-foreground")}>
                            <LinkedIn className="w-4" />
                        </a>
                    } />
                    <TooltipContent side="top" className="px-3 py-2 text-sm gap-3">
                        LinkedIn ({constants.socials.linkedin.username})
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger delay={100} render={
                        <a href={constants.socials.discord.url + '?utm_source=' + constants.homepage} target="_blank" className={cn(buttonVariants({ variant: "outline", size: "icon" }), "rounded-md text-muted-foreground hover:text-foreground")}>
                            <Discord className="w-4" />
                        </a>
                    } />
                    <TooltipContent side="top" className="px-3 py-2 text-sm gap-3">
                        Discord ({constants.socials.discord.username})
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger delay={100} render={
                        <a href={constants.socials.reddit.url + '?utm_source=' + constants.homepage} target="_blank" className={cn(buttonVariants({ variant: "outline", size: "icon" }), "rounded-md text-muted-foreground hover:text-foreground")}>
                            <Reddit className="w-4" />
                        </a>
                    } />
                    <TooltipContent side="top" className="px-3 py-2 text-sm gap-3">
                        Reddit ({constants.socials.reddit.username})
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger delay={100} render={
                        <a href={constants.socials.bluesky.url + '?utm_source=' + constants.homepage} target="_blank" className={cn(buttonVariants({ variant: "outline", size: "icon" }), "rounded-md text-muted-foreground hover:text-foreground")}>
                            <Bluesky className="w-4" />
                        </a>
                    } />
                    <TooltipContent side="top" className="px-3 py-2 text-sm gap-3">
                        Bluesky ({constants.socials.bluesky.username})
                    </TooltipContent>
                </Tooltip>
            </div>
        </section>
    );
}