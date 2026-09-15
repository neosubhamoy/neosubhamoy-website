import { Logo, GitHub } from "@/components/icons";
import ModeToggle from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { Button, buttonVariants } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { cn } from "cn";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { constants } from "@/lib/constants";
import { formatCount } from "@/lib/utils";

interface NavBarProps {
    stars: number;
}

export default function NavBar({props}: {props: NavBarProps}) {
    return (
        <nav className="sticky top-0 left-0 z-50 w-full border-b flex items-center justify-center bg-background">
            <div className="flex items-center justify-between w-[97%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] p-1 border-x">
                <a href="/">
                    <Logo className="w-16 h-12 text-foreground" />
                </a>
                <div className="flex items-center px-1 gap-2">
                    <div className="hidden md:flex items-center gap-4 mr-2">
                        <a href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground">Projects</a>
                        <a href="/showcase" className="text-sm font-medium text-muted-foreground hover:text-foreground">Showcase</a>
                        <a href="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground">Blog</a>
                        <a href="/sponsors" className="text-sm font-medium text-muted-foreground hover:text-foreground">Sponsors</a>
                    </div>
                    <Separator orientation="vertical" className="h-5 my-2 hidden md:block" />
                    <Button variant="ghost" className="group px-1.5 rounded-md hidden md:flex">
                        <Search className="w-4 text-muted-foreground group-hover:text-foreground" />
                        <KbdGroup>
                            <Kbd className="rounded border border-muted-foreground/10">Ctrl</Kbd>
                            <Kbd className="rounded border border-muted-foreground/10">K</Kbd>
                        </KbdGroup>
                    </Button>
                    <Separator orientation="vertical" className="h-5 my-2 hidden md:block" />
                    <Tooltip>
                        <TooltipTrigger delay={100} render={
                            <a href={constants.repo} target="_blank" className={cn(buttonVariants({ variant: "ghost" }), "px-1.5 rounded-md")}>
                                <GitHub className="w-4" />
                                <span className="text-sm text-muted-foreground mt-[0.115rem]">{formatCount(props.stars)}</span>
                            </a>
                        } />
                        <TooltipContent side="bottom" className="px-3 py-2 text-sm gap-3">
                            {props.stars} stars
                        </TooltipContent>
                    </Tooltip>
                    <Separator orientation="vertical" className="h-5 my-2" />
                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
}