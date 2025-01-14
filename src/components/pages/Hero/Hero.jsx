import React from "react";
import { FlipWords } from "./flip-words";
import HeroImageEffect from "./HeroImageEffect";
import { TextGenerateEffect } from "./text-generate-effect";
import { ArrowLeft01Icon } from "hugeicons-react";
import { motion } from "motion/react";
import BlurText from "./BlurText";

const Hero = () => {
    // flipping words
    const words = ["يسوق", "يبدع", "يحلل", "يفكر", "يبيع"];

    return (
        <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden p-28">
            <div className="w-1/2 h-full flex flex-col justify-center items-start gap-7">
                <h1 className="font-700 text-8xl text-secondary">
                    <BlurText text="إسماعيل إبراهيم" delay={0} animateBy="words" direction="bottom" />
                </h1>
                <p className="">
                    <TextGenerateEffect
                        className="text-lg font-500 inline"
                        words="أنا هنا لتحويل أفكارك إلى نصوص قوية تلهم جمهورك وتعزز حضورك الرقمي دعنا نعمل معاً لنوصل رسالتك بفعالية وإبداع فقد أخذت من اسمي الياء"
                        wordClassName="inline text-primary"
                        duration={0.1}
                        flipWords={<FlipWords wordss={["يسوق", "يبدع", "يحلل", "يفكر", "يبيع"]} duration={1000} className="text-secondary text-lg font-800 inline" />}
                    />
                </p>
                <div className="relative flex justify-around w-full mt-5">
                    <motion.div
                        initial={{ right: "-100px", opacity: 0 }}
                        animate={{ right: 0, opacity: 1, type: "tween" }}
                        className="relative bg-accent text-lg text-center text-white py-1 px-8 rounded-full  "
                    >
                        كاتب محتوى
                    </motion.div>
                    <ArrowLeft01Icon size={40} color={"#eb455f"} variant={"stroke"} />
                    <motion.div
                        initial={{ right: "-100px", opacity: 0 }}
                        animate={{ right: 0, opacity: 1, type: "tween" }}
                        transition={{ delay: 0.5 }}
                        className="relative bg-accent text-lg text-center text-white py-1 px-8 rounded-full "
                    >
                        صانع محتوى
                    </motion.div>
                    <ArrowLeft01Icon size={40} color={"#eb455f"} variant={"stroke"} />
                    <motion.div
                        initial={{ right: "-100px", opacity: 0 }}
                        animate={{ right: 0, opacity: 1, type: "tween" }}
                        transition={{ delay: 0.8 }}
                        className="relative bg-accent text-lg text-center text-white py-1 px-8 rounded-full "
                    >
                        مدير إبداعي
                    </motion.div>
                </div>
            </div>
            <div className="w-1/2 h-full p-10 flex justify-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: [0.8, 1.1, 1] }}>
                    <HeroImageEffect
                        imageSrc="./assets/avatar-1.png"
                        altText="Hero Image"
                        className="w-[450px]"
                        intensity={10} // Adjust the intensity as needed
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
