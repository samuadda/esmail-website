import React from "react";
import { motion } from "motion/react";
import {BackgroundBeams} from "../../ui/background-beams"
import PageTitle from "@/components/reusble-components/PageTitle";

const Portfolio = () => {

    const Card = ({title = "عنوان", number = "16"}) => {
        return (
            <div className="flex flex-col justify-center items-center">
                <h4 className="p-2 text-primary text-3xl font-500  border-primary border-4 rounded-lg  "> {`${number}+`}</h4>
                <span className="bg-accent text-white py-1 px-3 rounded-md"> {title}</span>
            </div>
        );
    }





    return (
        <div className="relative w-screen h-screen p-28 ">
            <BackgroundBeams />
            <PageTitle title="أكثر من..." />
            <div className="flex flex-col items-center gap-28 p-28">
                <div className="flex w-full justify-around ">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="flex w-full justify-around">
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
