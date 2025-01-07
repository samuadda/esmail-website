import React from "react";
import { FlipWords } from "./flip-words";
import HeroImageEffect from "./HeroImageEffect";
import { TextGenerateEffect } from "./text-generate-effect";

const Hero = () => {
    // flipping words
    const words = ["يسوق", "يبدع", "يحلل", "يفكر", "يبيع"];

    return (
        <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden p-28">
            <div className="w-1/2 h-full flex flex-col justify-center items-start gap-8">
                <h1 className="font-700 text-8xl text-secondary">إسماعيل إبراهيم</h1>
                <p className="">
                    <TextGenerateEffect
                        className="text-lg font-500"
                        words="أنا هنا لتحويل أفكارك إلى نصوص قوية تلهم جمهورك وتعزز حضورك الرقمي دعنا نعمل معاً لنوصل رسالتك بفعالية وإبداع فقد أخذت من اسمي الياء"
                    />
                    <FlipWords words={words} duration={1} className="text-secondary text-lg font-800" />
                </p>
            </div>
            <div className="w-1/2 h-full p-10">
                <div className="">
                    {/* <img src="./assets/avatar-1.png" alt="esmail pic" width={300} className="w-full h-full object-contain" /> */}
                    <HeroImageEffect
                        imageSrc="./assets/avatar-1.png"
                        altText="Hero Image"
                        className="w-[420px]"
                        intensity={10} // Adjust the intensity as needed
                    />
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Hero;
