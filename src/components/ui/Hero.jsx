import React from "react";
import { FlipWords } from "./flip-words";
import HeroImageEffect from "./HeroImageEffect";
import { TextGenerateEffect } from "./text-generate-effect";
import { ArrowLeft01Icon } from "hugeicons-react";

const Hero = () => {
    // flipping words
    const words = ["يسوق", "يبدع", "يحلل", "يفكر", "يبيع"];

    return (
        <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden p-28">
            <div className="w-1/2 h-full flex flex-col justify-center items-start gap-8">
                <h1 className="font-700 text-8xl text-secondary">إسماعيل إبراهيم</h1>
                <p className="">
                    <TextGenerateEffect
                        className="text-lg font-500 inline"
                        words="أنا هنا لتحويل أفكارك إلى نصوص قوية تلهم جمهورك وتعزز حضورك الرقمي دعنا نعمل معاً لنوصل رسالتك بفعالية وإبداع فقد أخذت من اسمي الياء"
                        wordClassName="inline text-primary"
                        flipWords={<FlipWords wordss={["يسوق", "يبدع", "يحلل", "يفكر", "يبيع"]} duration={1000} className="text-secondary text-lg font-800 inline" />}
                    />
                </p>
                <div className="relative flex justify-around w-full mt-10">
                    <div className="bg-accent text-lg text-center text-white py-1 px-8 rounded-full cursor-pointer ">كاتب محتوى</div>
                    <ArrowLeft01Icon size={40} color={"#eb455f"} variant={"stroke"} />
                    <div className="bg-accent text-lg text-center text-white py-1 px-8 rounded-full cursor-pointer">صانع محتوى</div>
                    <ArrowLeft01Icon size={40} color={"#eb455f"} variant={"stroke"} />
                    <div className="bg-accent text-lg text-center text-white py-1 px-8 rounded-full cursor-pointer">مدير إبداعي</div>
                </div>
            </div>
            <div className="w-1/2 h-full p-10 flex justify-center">
                <div className="">
                    <HeroImageEffect
                        imageSrc="./assets/avatar-1.png"
                        altText="Hero Image"
                        className="w-[450px]"
                        intensity={10} // Adjust the intensity as needed
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
