import InteractiveHoverButton from "./interactive-hover-button";
import { motion } from "framer-motion"; // Ensure this is from 'framer-motion'
import { FollowerPointerCard } from "../../ui/following-pointer";
import { useEffect, useState } from "react";

const NavBar = () => {
    const [isVisible, setIsVisible] = useState(true); // Track visibility of the navbar
    const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine whether to show or hide the navbar
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Clean up event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    const navItems = [
        { title: "الرئيسية", route: "./" },
        { title: "التجارب", route: "./ex" },
        { title: "الأعمال", route: "./wo" },
        { title: "النصوص", route: "sc" },
    ];

    return (
        <motion.nav
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : "-100%" }} // Move navbar up when hidden
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full flex justify-between items-center px-28 py-5 top-0 fixed z-50 backdrop-blur-md bg-white/30 border-b border-white/20"
        >
            <div>
                <ul className="flex gap-10 text-lg items-center">
                    {navItems.map(item => {
                        const isActive = window.location.pathname === item.route;
                        return (
                            <li key={item.title} className="text-primary font-400 cursor-pointer hover:opacity-50 transition-all duration-300">
                                <a href={item.route}>{item.title}</a>
                            </li>
                        );
                    })}
                    <FollowerPointerCard title="اصبر علينا">
                        <li className="relative text-primary font-400">
                            <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-sm before:content-['قريباً'] before:absolute before:inset-0 before:flex before:items-center before:justify-center before:text-white before:font-bold before:leading-none" />
                            <a href="#" className="cursor-none opacity-45">
                                المدونة
                            </a>
                        </li>
                    </FollowerPointerCard>
                </ul>
            </div>
            <div className="flex items-center gap-3">
                <InteractiveHoverButton text="خلنا نتواصل" className="text-white " borderColor="bg-primary" dotColor="bg-primary" />
            </div>
        </motion.nav>
    );
};

export default NavBar;
