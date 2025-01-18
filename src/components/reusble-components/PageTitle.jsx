import React from "react";
import { motion } from "motion/react";

const PageTitle = ({ title = "هات عنوانك", color = "secondary" }) => {
    return (
        <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }} className={`text-${color} text-5xl font-500`}>
            {title}
        </motion.h1>
    );
};

export default PageTitle;
