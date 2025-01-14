import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import { FlipWords } from "./flip-words";

export const TextGenerateEffect = ({
    words = "",
    className = "",
    wordClassName = "",
    filter = true,
    duration = 0.1,
    flipWords,
}: {
    words: string;
    className?: string;
    wordClassName?: string;
    filter?: boolean;
    duration?: number;
    flipWords: React.ReactNode; // Accept FlipWords as a prop
}) => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (!words) return;
        animate(
            "span",
            {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
            },
            {
                duration: duration,
                delay: stagger(0.2),
            }
        );
    }, [animate, words, filter, duration]);

    const wordsArray = words.split(" ");

    return (
        <div className={cn("font-bold", className)}>
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => (
                    <motion.span
                        key={word + idx}
                        className={cn("dark:text-white text-black opacity-0", wordClassName)}
                        style={{
                            filter: filter ? "blur(10px)" : "none",
                        }}
                    >
                        {word}{" "}
                    </motion.span>
                ))}
                <motion.span
                    className={cn("dark:text-white text-black opacity-0", wordClassName)}
                    style={{
                        filter: filter ? "blur(10px)" : "none",
                    }}
                >
                    {flipWords}
                </motion.span>
            </motion.div>
        </div>
    );
};
