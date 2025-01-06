"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
    words,
    duration = 3000, // The duration for each word flip
    className,
}: {
    words: string[];
    duration?: number;
    className?: string;
}) => {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    // Function to trigger the animation and change the word
    const startAnimation = useCallback(() => {
        const nextWord = words[words.indexOf(currentWord) + 1] || words[0];
        setCurrentWord(nextWord);
        setIsAnimating(true);
    }, [currentWord, words]);

    // Trigger word flip based on the duration prop
    useEffect(() => {
        if (!isAnimating) {
            const timer = setTimeout(() => {
                startAnimation();
            }, duration); // Duration passed as prop
            return () => clearTimeout(timer); // Clear timeout on unmount
        }
    }, [isAnimating, duration, startAnimation]);

    return (
        <AnimatePresence
            onExitComplete={() => {
                setIsAnimating(false);
            }}
        >
            <motion.div
                initial={{
                    opacity: 0,
                    y: 10,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    duration: duration / 1000, // Use duration here to control animation timing
                }}
                exit={{
                    opacity: 0,
                    y: -40,
                    x: 40,
                    filter: "blur(8px)",
                    scale: 2,
                    position: "absolute",
                    duration: duration / 1000, // Use duration for the exit transition as well
                }}
                className={cn("z-10 inline-block relative text-right text-neutral-900 dark:text-neutral-100 px-2", className)}
                key={currentWord}
            >
                <motion.span
                    initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                        duration: 0.3, // Fixed duration for the entry animation
                    }}
                    className="inline-block whitespace-nowrap"
                >
                    {currentWord}
                </motion.span>
            </motion.div>
        </AnimatePresence>
    );
};
