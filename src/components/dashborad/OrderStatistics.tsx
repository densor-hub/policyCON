import { SlOptionsVertical } from "react-icons/sl";
import { PiCoatHangerBold } from "react-icons/pi";
import { BiHome } from "react-icons/bi";
import { IoMdFootball } from "react-icons/io";
import { BsPhone } from "react-icons/bs";
import OrderStatisticsChart from "../../charts/OrderStatisticsChart";
import React from "react";
import { iOrderStatistics, iOrderStatisticsData } from "../../Inerfaces";

const OrderStatisticsData: iOrderStatisticsData[] = [
    { icon: { icon: BsPhone, size: 30, backgroundColor: "#e0e7ff", color: "#818cf8" }, heading: "Electronic", items: ["Mobile", "Earbuds", "TV"], value: 825000 },
    { icon: { icon: PiCoatHangerBold, size: 30, backgroundColor: "#ecfccb", color: "#84cc16" }, heading: "Fashion", items: ["Tshirt", "Jeans", "Shoes"], value: 23800 },
    { icon: { icon: BiHome, size: 30, backgroundColor: "#cffafe", color: "#22d3ee" }, heading: "Decor", items: ["Fine Art", "Dinning"], value: 23800 },
    { icon: { icon: IoMdFootball, size: 30, backgroundColor: "#f1f5f9", color: "#94a3b8" }, heading: "Sports", items: ["Football", "Cricket", "Kit"], value: 23800 }
]
const OrderStatistics = ({ heading, totalSales, totalOrders, weeklyPercentage }: iOrderStatistics) => {
    return (
        <main className="bg-white  min-w-[330px] w-full rounded-xl border-2 border-slate-200 h-full" >
            <div className="mb-7">
                <div className="flex justify-between p-5" >
                    <span className="font-semibold text-slate-500">  {heading}</span> <SlOptionsVertical className="text-slate-500 hover:text-indigo-300" />
                </div>
                <div className="text-xs ml-3 text-slate-400">{totalSales}K Total Sales</div>
            </div>
            <section className="flex ml-3 justify-between items-stretch text-slate-400 relative">
                <div >
                    <div className="font-semibold text-slate-500">{totalOrders?.toLocaleString()}</div>
                    <div className="text-xs">Total Orders</div>
                </div>
                <section className=" relative bottom-4 right-4" >
                    <OrderStatisticsChart />
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <div className="font-semibold">{weeklyPercentage}%</div>
                        <div className="text-[11px]">Weekly</div>
                    </div>

                </section>
            </section>
            <section>
                {OrderStatisticsData?.map((data: iOrderStatisticsData, index: number) => {
                    const Icon = data?.icon?.icon
                    return (
                        <div key={index} className="flex mb-2 ml-3" >
                            <Icon size={data?.icon?.size} style={{ color: `${data?.icon?.color}`, backgroundColor: `${data?.icon?.backgroundColor}`, padding: "3px", borderRadius: "5px" }} />
                            <section className="ml-3">
                                <div className="text-md text-slate-600" >{data?.heading}</div>
                                <div className="flex text-xs text-slate-400">
                                    {data?.items?.map((item: string, key: number) => {
                                        return <div key={key} >{item}, </div>
                                    })}
                                    <div>{data?.value}</div>
                                </div>

                            </section>
                        </div>
                    )
                })}
            </section>
        </main>
    )
}
export default OrderStatistics