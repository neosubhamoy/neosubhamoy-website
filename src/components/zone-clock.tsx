import { getCurrentTimeDetails, type CurrentTimeDetails } from "@/hooks/use-timezone";
import { useEffect, useState } from "react";
import { motion } from "motion/react";


export default function ZoneClock() {
    const [currentTimeDetails, setCurrentTimeDetails] = useState<CurrentTimeDetails | null>(null);
    
    const date = currentTimeDetails?.targetDate;
    const minutes = date?.getMinutes() ?? 0;
    const hours = date?.getHours() ?? 0;

    const minuteAngle = minutes * 6;
    const hourAngle = (hours % 12) * 30 + minutes * 0.5;

    useEffect(() => {
        const updateTime = () => {
            setCurrentTimeDetails(getCurrentTimeDetails("Asia/Kolkata"));
        };

        updateTime();

        let intervalId: number | undefined;

        const now = new Date();
        const delay = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

        const timeoutId = window.setTimeout(() => {
            updateTime();
            intervalId = window.setInterval(updateTime, 60_000);
        }, delay);

        return () => {
            window.clearTimeout(timeoutId);

            if (intervalId !== undefined) {
                window.clearInterval(intervalId);
            }
        };
    }, []);

    const status = currentTimeDetails
    ? currentTimeDetails.direction === "same"
      ? "same time"
      : `${currentTimeDetails.difference} ${currentTimeDetails.direction}`
    : "--";

    return (
        <div className="flex items-center gap-4">
            <div className="flex size-6 shrink-0 items-center justify-center rounded-[0.40rem] select-none border border-muted-foreground/15 bg-muted ring-1 ring-border/50 ring-offset-1 ring-offset-background dark:ring-line">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 text-muted-foreground"
                >
                    <circle cx="12" cy="12" r="10" />
                    {currentTimeDetails ? (
                    <>
                        <motion.g
                            // initial={false}
                            animate={{ rotate: hourAngle }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            style={{
                                transformOrigin: "12px 12px",
                                transformBox: "view-box",
                            }}
                        >
                            <path d="M12 12V8" strokeWidth="2" />
                        </motion.g>
                        <motion.g
                            // initial={false}
                            animate={{ rotate: minuteAngle }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={{
                                transformOrigin: "12px 12px",
                                transformBox: "view-box",
                            }}
                        >
                            <path d="M12 12V6" strokeWidth="2" />
                        </motion.g>
                    </>
                    ) : (
                        <path d="M12 6v6l4 2"/>
                    )}
                </svg>
            </div>
            <p className="text-sm font-mono text-balance">
                {currentTimeDetails?.targetTime ?? "--:--"}{" "}
                <span className="text-muted-foreground">// {status}</span>
            </p>
        </div>
    );
}