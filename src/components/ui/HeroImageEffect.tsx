import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface HeroImageEffectProps {
    imageSrc: string;
    altText: string;
    className?: string;
    intensity?: number; // Controls the parallax intensity
}

const HeroImageEffect: React.FC<HeroImageEffectProps> = ({
    imageSrc,
    altText,
    className = "",
    intensity = 20, // Default parallax intensity
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const x = (event.clientX - rect.left) / rect.width - 0.5;
                const y = (event.clientY - rect.top) / rect.height - 0.5;

                containerRef.current.style.transform = `translate(${x * intensity}px, ${y * intensity}px)`;
            }
        };

        const handleMouseLeave = () => {
            if (containerRef.current) {
                containerRef.current.style.transform = "translate(0px, 0px)";
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener("mousemove", handleMouseMove);
            container.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (container) {
                container.removeEventListener("mousemove", handleMouseMove);
                container.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, [intensity]);

    return (
        <div className={cn("relative overflow-hidden", className)}>
            <div ref={containerRef} className="w-full h-full transition-transform duration-300 ease-out">
                <img src={imageSrc} alt={altText} className="w-full h-full object-cover" />
            </div>
        </div>
    );
};

export default HeroImageEffect;
