import { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const BlurText = ({
    text = "",
    delay = 200,
    className = "",
    direction = "top", // 'top' or 'bottom'
    threshold = 0.1,
    rootMargin = "0px",
    animationFrom,
    animationTo,
    easing = "easeOutCubic",
    onAnimationComplete,
}) => {
    const [inView, setInView] = useState(false);
    const ref = useRef();

    // Default animations based on direction
    const defaultFrom =
        direction === "top"
            ? {
                  filter: "blur(10px)",
                  opacity: 0,
                  transform: "translate3d(0,-50px,0)",
              }
            : {
                  filter: "blur(10px)",
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
              };

    const defaultTo = [
        {
            filter: "blur(5px)",
            opacity: 0.5,
            transform: direction === "top" ? "translate3d(0,5px,0)" : "translate3d(0,-5px,0)",
        },
        { filter: "blur(0px)", opacity: 1, transform: "translate3d(0,0,0)" },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(ref.current);
                }
            },
            { threshold, rootMargin }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const springProps = useSpring({
        from: animationFrom || defaultFrom,
        to: inView ? animationTo || defaultTo : animationFrom || defaultFrom,
        delay,
        config: { easing },
        onRest: () => {
            if (inView && onAnimationComplete) {
                onAnimationComplete();
            }
        },
    });

    return (
        <animated.p ref={ref} style={springProps} className={`blur-text ${className} transition-transform will-change-[transform,filter,opacity]`}>
            {text}
        </animated.p>
    );
};

export default BlurText;
