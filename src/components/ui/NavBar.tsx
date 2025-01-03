import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

const NavBar = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(false); // Initially hidden
    const [prevScrollY, setPrevScrollY] = useState(0); // Track previous scroll position

    useMotionValueEvent(scrollYProgress, "change", () => {
        const currentScrollY = window.scrollY; // Get current scroll position
        const scrollThreshold = 100; // Adjust threshold as needed

        if (currentScrollY > scrollThreshold) {
            if (currentScrollY < prevScrollY) {
                setVisible(true); // Show nav when scrolling up past the threshold
            } else {
                setVisible(false); // Hide nav when scrolling down past the threshold
            }
        } else {
            setVisible(false); // Always hide nav if above the threshold
        }

        setPrevScrollY(currentScrollY); // Update previous scroll position
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 0,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full z-[5000] px-5 py-2 items-center justify-center gap-16 backdrop-blur-md bg-white/50 dark:bg-black/50",
                    className
                )}
            >
                {navItems.map((navItem: any, idx: number) => (
                    <a
                        key={`link=${idx}`}
                        href={navItem.link}
                        className={cn("relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500")}
                    >
                        <span className="block sm:hidden">{navItem.icon}</span>
                        <span className="hidden sm:block text-sm">{navItem.name}</span>
                    </a>
                ))}
                <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
                    <span>Login</span>
                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
                </button>
            </motion.div>
        </AnimatePresence>
    );
};

export default NavBar