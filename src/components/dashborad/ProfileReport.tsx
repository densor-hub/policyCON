import { FaDollarSign } from "react-icons/fa6";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import React from "react";
import { iProjectReport } from "../../Inerfaces";

const ProfileReport = ({ heading, year, progressPercentage, amount }: iProjectReport) => {
    return (
        <main className="flex justify-between bg-white w-full h-[100px] border-2 border-slate-200 rounded-lg">
            <section className="text-sm- ml-3 w-[150px]">
                <div className="text-slate-500 font-normal text-lg">{heading}</div>
                <div className="bg-amber-100 rounded-md text-center uppercase text-amber-500 font-semibold text-[11px] mb-3 w-20">Year {year}</div>
                <div className="flex text-[11px] w-full">
                    {Number(progressPercentage) > 0 ? <FaArrowUp size={10} className="relative top-[2px] mr-1 text-lime-500" /> : <FaArrowDown className="relative top-[2px] mr-1 text-red-500" />} {progressPercentage}%
                </div>
                <div className="flex font-semibold" ><FaDollarSign /><span className="relative bottom-1">{amount}k</span></div>
            </section>
            <section className="w-[calc(100%) - 150px]" style={{ border: "1px solid red" }}>
                dwindlingGraph
            </section>

        </main>
    )
}

export default ProfileReport