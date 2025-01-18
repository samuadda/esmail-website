import React from "react";
import { motion } from "motion/react";

const PageTitle = ({ title = "هات عنوانك", color = "secondary" }) => {
    return (
        <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.3, duration: 1 }}
            className={`relative top-0 text-[150px] font-900 opacity-45 ${color === "secondary" ? "text-secondary" : `text-${color}`}`}
        >
            {title}
        </motion.h1>
    );
};

export default PageTitle;
