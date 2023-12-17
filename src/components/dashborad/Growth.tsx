import React, { useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa6";
import { LuWallet } from "react-icons/lu";
import { BiDollar } from "react-icons/bi";
import { iGrowthData } from "../../Inerfaces";

const growthData: iGrowthData[] = [
    { year: "2022", icon: { icon: BiDollar, size: 25, backgroundColor: "#e0e7ff", color: "#6366f1" }, amount: 41.2, overallGrowth: 78, companyGrowth: 62 },
    { year: "2023", icon: { icon: LuWallet, size: 30, backgroundColor: "#cffafe", color: "#22d3ee" }, amount: 32.5, overallGrowth: 78, companyGrowth: 62 }
]
const Growth = () => {
    const [selectedData, setSelctedData] = useState<iGrowthData>(
        {
            year: "2022",
            icon: { icon: BiDollar, size: 25, backgroundColor: "#e0e7ff", color: "#6366f1" },
            amount: 41.2,
            overallGrowth: 78,
            companyGrowth: 62
        }
    )
    const [showYearsDropDown, setShowYearsDropDown] = useState(false)
    return (
        <main className="w-[220px] border-0 border-slate-200 bg-white rounded-xl" style={{ borderTopLeftRadius: "0", borderBottomLeftRadius: "0", borderLeft: "1px solid #e5e7eb" }} >
            <section className="bg-indigo-100 text-indigo-400 w-fit rounded-md h-[25px] text-sm mx-auto mt-7">
                <button onClick={() => { setShowYearsDropDown(true) }} className="flex">{selectedData?.year} <MdKeyboardArrowDown /></button>
                {showYearsDropDown && growthData?.map((data, key) => {
                    return (
                        <div key={key} className="bg-indigo-400 text-white z-1 hover:bg-indigo-300">
                            <button onClick={() => {
                                setSelctedData(data)
                                setShowYearsDropDown(false)
                            }}>{data?.year}
                            </button>
                        </div>
                    )
                })}
            </section>

            <section className="h-24 w-24 rounded-full mx-auto flex justify-center items-center mt-5 mb-3 z-0" style={{ border: '1px solid red' }}>CHART</section>
            <div className="text-xs text-slate-500 text-center font-semibold mb-2">
                {selectedData?.companyGrowth}% Company Growth
            </div>
            <section className="flex ml-5">
                {growthData?.map((growth, index) => {
                    const Icon = growth?.icon?.icon
                    return (
                        <div key={index} className="ml-4 ">
                            <div className="flex relative">
                                <Icon size={growth?.icon?.size} style={{ color: `${growth?.icon?.color}`, backgroundColor: `${growth?.icon?.backgroundColor}`, padding: "3px", borderRadius: "5px", marginRight: "3px" }} />
                                <div className="text-xs relative bottom-1">
                                    <div className="text-slate-400">{growth?.year}</div>
                                    <div className="flex text-slate-600 font-semibold"><FaDollarSign />{growth?.amount}k</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>
        </main>
    )
}

export default Growth