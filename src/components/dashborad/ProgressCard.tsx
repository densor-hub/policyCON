import { SlOptionsVertical } from "react-icons/sl";
import { FaDollarSign } from "react-icons/fa6";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import React from "react";
import { iProgessCard } from "../../Inerfaces";

const ProgressCard = ({ icon, title, progressPercentage, amount }: iProgessCard) => {
    const Icon = icon?.icon
    return (
        <main className="w-[170px] h-[180px] bg-white border-2 border-slate-200 rounded-lg">
            <div className="flex p-2 justify-between mt-5">
                <div className="relative left-3 ">
                    <Icon size={icon?.size} style={{ color: `${icon?.color}`, backgroundColor: `${icon?.backgroundColor}`, padding: "3px", borderRadius: "5px" }} />
                </div>
                <div className="flex justify-center items-center relative right-3">
                    <SlOptionsVertical className="text-slate-500 hover:text-indigo-300" />
                </div>
            </div>
            <div className="pl-4 capitalize text-slate-400">{title}</div>
            <div className="flex font-normal text-slate-500 text-xl"  >
                <FaDollarSign className="relative top-1 ml-3" /><span>{amount?.toLocaleString()}</span>
            </div>
            <div className="flex mt-2 mb-3 pl-4 text-xs">
                {Number(progressPercentage) > 0 ? <FaArrowUp size={10} className="relative top-[2px] mr-1 text-lime-500" /> : <FaArrowDown size={10} className="relative top-[2px] mr-1 text-red-500" />}
                {progressPercentage}
            </div>
        </main>
    )
}

export default ProgressCard