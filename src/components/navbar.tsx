import { Logo } from "@/components/icons";
import ModeToggle from "@/components/mode-toggle";


export default function NavBar() {
    return (
        <nav className="sticky top-0 left-0 z-50 w-full border-b flex items-center justify-center bg-background">
            <div className="flex items-center justify-between w-[50%] p-1 border-x">
                <Logo className="w-16 h-12 text-black dark:text-white" />
                <div className="flex items-center px-2 gap-3">
                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
}