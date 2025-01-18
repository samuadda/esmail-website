import React from "react";
import { motion } from "motion/react";
import PageTitle from "../../reusble-components/PageTitle";

const Portfolio = () => {

    return (
        <motion.div
            className="w-screen h-screen p-28"
            initial={{ backgroundColor: "#fff" }}
            whileInView={{ backgroundColor: "#0d2b4c" }}
            transition={{ delay: 1, transition: 1.5, }}
        >
            <PageTitle />
        </motion.div>
    );
};

export default Portfolio;
