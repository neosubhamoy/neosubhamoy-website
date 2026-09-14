import { useRef } from "react";
import { motion, useAnimationControls } from "motion/react";

interface PronunciationVoiceoverProps {
    className?: string;
    audioSrc: string;
}

export default function PronunciationVoiceover({ className, audioSrc }: PronunciationVoiceoverProps) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const innerWave = useAnimationControls();
    const outerWave = useAnimationControls();

    const handleClick = async () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            await audioRef.current.play();
        }

        innerWave.set({ opacity: 0, scale: 0.8 });
        outerWave.set({ opacity: 0, scale: 0.8 });

        await innerWave.start({
            opacity: 1,
            scale: 1,
            transition: { duration: 0.20, ease: "easeOut" }
        });

        await outerWave.start({
            opacity: 1,
            scale: 1,
            transition: { duration: 0.25, ease: "easeOut" }
        });
    };

    return (
        <span className="flex items-center justify-center">
            <audio ref={audioRef} src={audioSrc} autoPlay={false} controls={false} preload="auto" className="hidden" />
            <motion.svg
                onClick={handleClick}
                whileTap={{ scale: 0.92 }}
                xmlns="http://w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ userSelect: "none" }}
                className={className}
            >
                <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
                <motion.path
                    d="M16 9a5 5 0 0 1 0 6"
                    animate={innerWave}
                    initial={{ opacity: 1, scale: 1 }}
                    style={{ originX: 0, originY: 0.5 }}
                />
                <motion.path
                    d="M19.364 18.364a9 9 0 0 0 0-12.728"
                    animate={outerWave}
                    initial={{ opacity: 1, scale: 1 }}
                    style={{ originX: 0, originY: 0.5 }}
                />
            </motion.svg>
        </span>
    );
}