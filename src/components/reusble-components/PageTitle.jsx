import React from "react";
import { motion } from "motion/react";

const PageTitle = ({ title = "هات عنوانك", color = "secondary" }) => {
    return (
        <motion.h3
            // initial={{ x: 0 }}
            // whileInView={{ x: 5}}
            // transition={{ delay: 0.3, duration: 1 }}
            className={`relative top-0 text-center text-6xl font-900 ${color === "secondary" ? "text-white" : `text-${color}`}`}
        >
            {title}
        </motion.h3>
    );
};

export default PageTitle;
