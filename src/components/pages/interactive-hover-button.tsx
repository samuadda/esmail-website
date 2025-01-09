import React from "react";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    borderColor?: string;
    dotColor?: string;
}

const InteractiveHoverButton = React.forwardRef<HTMLButtonElement, InteractiveHoverButtonProps>(
    ({ text = "Button", className, borderColor = "border-secondary", dotColor = "bg-secondary", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(`group relative w-32 cursor-pointer overflow-hidden rounded-xl ${borderColor} py-2 px-3 text-center font-semibold`, className)}
                {...props}
            >
                <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">{text}</span>
                <div className="absolute top-0 left-1 z-10 flex h-full w-full translate-x-1 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
                    <span>{text}</span>
                    <ArrowLeft />
                </div>
                <div
                    className={cn(
                        `absolute left-[13%] top-[40%] h-2 w-2 scale-[1] rounded-lg transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] ${dotColor}`
                    )}
                ></div>
            </button>
        );
    }
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export default InteractiveHoverButton;
