import React from "react";
import Marquee from "./marquee";

const Portfolio = () => {

    return (
        <div className="w-screen h-screen">
            <Marquee className="h-96">
                <img src="./assets/logo-1.svg" alt="" />
                <img src="./assets/logo-2.svg" alt="" />
            </Marquee>
        </div>
    );
};

export default Portfolio;
