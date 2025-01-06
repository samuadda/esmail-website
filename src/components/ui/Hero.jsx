import React from "react";
import { FlipWords } from "./flip-words";

const Hero = () => {
    // flipping words
    const words = ["يسوق", "يبدع", "يحلل", "يفكر", "يبيع"];

    return (
        <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden p-28">
            <div className="w-1/2 h-full p-10 flex flex-col justify-center items-start gap-8">
                <h1 className="font-700 text-7xl text-secondary">إسماعيل إبراهيم</h1>
                <p className="text-lg font-500 ">
                    أنا هنا لتحويل أفكارك إلى نصوص قوية تلهم جمهورك وتعزز حضورك الرقمي دعنا نعمل معاً لنوصل رسالتك بفعالية وإبداع فقد أخذت من اسمي الياء
                    <FlipWords words={words} duration={1} className="text-secondary" />
                </p>
            </div>
            <div className="w-1/2 h-full p-10">
                <div className="w-80 h-96 rounded-xl bg-accent">
                    <img src="./assets/avatar-1.png" alt="esmail pic" width={350} className="w-full h-full object-contain" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
