import React from "react";
import { FlipWords } from "./flip-words";

const Hero = () => {

    return (
        <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden">
            <div className="absolute inset-0 w-screen h-screen bg-white/30 backdrop-blur-lg border border-white/20 shadow-md rounded-lg p-6" />
            <video autoPlay loop muted playsInline className=" w-full h-full object-cover">
                <source src="assets/hero-video.mp4" type="video/mp4" />
            </video>
            <h1 className="absolute z-50 font-vazirmatn font-900 text-8xl bottom-10 right-10 text-white">إسماعيل إبراهيم</h1>
        </div>
    );
};

export default Hero;

