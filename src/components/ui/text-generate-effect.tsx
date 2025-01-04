import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
    words = "",
    className = "",
    wordClassName = "",
    filter = true,
    duration = 0.5,
}: {
    words: string;
    className?: string;
    wordClassName?: string;
    filter?: boolean;
    duration?: number;
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

    return (
        <div className={cn("font-bold", className)}>
            <motion.div ref={scope}>
                {words.split(" ").map((word, idx) => (
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
            </motion.div>
        </div>
    );
};
