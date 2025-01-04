import React from "react";
import { FlipWords } from "./flip-words";
import { FadeText } from "./fade-text";
import {TextGenerateEffect} from './text-generate-effect'

const Hero = () => {
    // introduction paragraph
    return (
        <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden">
            {/* the glossy overlay */}
            <div className="absolute inset-0 w-screen h-screen bg-white/30 backdrop-blur shadow-md p-6" />
            <video autoPlay loop muted playsInline className=" w-full h-full object-cover">
                <source src="assets/hero-video.mp4" type="video/mp4" />
            </video>
            <p className="absolute right-10 z-10">
                <TextGenerateEffect words="إسماعيل, أخذ من اسمه الياء يـ" duration={3} filter={false} wordClassName="font-vazirmatn text-xl font-400 text-primary" />
            </p>
            <h1 className="absolute bottom-10 right-10 z-10">
                <FadeText
                    direction="down"
                    text="إسماعيل إبراهيم"
                    className="font-vazirmatn font-600 text-9xl text-white opacity-50"
                    framerProps={{
                        show: { transition: { delay: 2, duration: 2 } },
                    }}
                />
            </h1>
        </div>
    );
};

export default Hero;

