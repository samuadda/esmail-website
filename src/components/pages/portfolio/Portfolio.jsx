import React from "react";
import { motion } from "motion/react";

const Portfolio = () => {

    return (
        <div className="w-screen h-screen p-28 bg-primary">
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{delay:0.3, duration:1}}
                className="text-secondary text-5xl font-500">
                أكثر من...
            </motion.h1>
        </div>
    );
};

export default Portfolio;
