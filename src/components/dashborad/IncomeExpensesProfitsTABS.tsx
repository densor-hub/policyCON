import { FaDollarSign } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import React from "react";
import IncomeExpenseProfitTabsChart from "../../charts/IncomeExpensesProfitsTABScharts";
import { iTabs, iTabsData } from "../../Inerfaces";

const tabsData: iTabs = {
    headings: ["Income", "Expenses", "Profit"],
    data: [
        { amount: 459.1, progressPercentage: 65, differenceToPreviousWeek: -39 },
    ]
}
const Tabs = () => {
    return (
        <main className="bg-white border-2 border-slate-200 rounded-xl min-w-[330px] w-full h-full">
            <div className="flex w-fit mx-auto mt-4">
                {tabsData?.headings?.map((heading: string, index: number) => {
                    return <button key={index} className={index == 0 ? "h-8 px-2  ml-1 mr-1 rounded-md bg-blue-600 text-white" : "h-8 px-2  ml-1 mr-1 rounded-md hover:bg-blue-600 hover:text-white"} >{heading}</button>
                })}
            </div>
            <section className="ml-3">
                {tabsData?.data?.map((data: iTabsData, index: number) => {
                    return (
                        <div key={index}>
                            <div>Total {tabsData?.headings[index]} </div>
                            <div className="flex"><FaDollarSign />{data?.amount} <FaArrowUp /> {data?.progressPercentage}%</div>

                            <div className=""><IncomeExpenseProfitTabsChart /></div>
                            <div className="flex text-center justify-center items-center" >
                                <div className="w-10 h-10 rounded-full flex justify-center items-center border-4 border-blue-400 border-l-transparent mr-3">{6.5}k</div>
                                <section >
                                    <div className="text-slate-500 font-semibold"> {tabsData?.headings[index]} this week</div>
                                    <div className="flex text-slate-400 text-[11px]">
                                        <FaDollarSign className="relative top-1 " />
                                        {Math.abs(data?.differenceToPreviousWeek)} {data?.differenceToPreviousWeek < 0 ? "less than" : "more than"} this week
                                    </div>
                                </section>
                            </div>
                        </div>
                    )
                })}
            </section>

        </main>
    )
}

export default Tabs