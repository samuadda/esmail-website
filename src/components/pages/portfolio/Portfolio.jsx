import React from "react";
import { motion } from "motion/react";
import { BackgroundBeams } from "../../ui/background-beams";
import PageTitle from "@/components/reusble-components/PageTitle";

const Portfolio = () => {
    const Card = ({ title = "عنوان", number = "16" }) => {
        return (
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col gap-3">
                    <h4 className="p-2 text-white text-5xl text-center align-middle font-medium flex-grow-0 flex-shrink-0">{`${number}+`}</h4>
                    <span className="bg-accent text-white text-2xl py-3 px-5 rounded-2xl ">{title}</span>
                </div>
            </div>
        );
    };

    return (
        <div className="relative w-screen p-24 bg-primary">
            <BackgroundBeams />
            <PageTitle title="أكثر من..." />
            <div className="flex flex-col items-center gap-24 p-24">
                <div className="flex w-full justify-around ">
                    <Card title="سنوات خبرة" number="5" />
                    <Card title="فيديو مُنتج" number="380" />
                    <Card title="مقالة" number="100" />
                </div>
                <div className="flex w-full justify-evenly">
                    <Card title="برامج أعدت محتواها" number="6" />
                    <Card title="جهة أعدت محتوى لها" number="20" />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
