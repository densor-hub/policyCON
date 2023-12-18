import { SlOptionsVertical } from "react-icons/sl";
import TotalRevenueChart from "../../charts/TotalRevenueCharts";
import React from "react";
import { iTotalRevenue } from "../../Inerfaces";

const TotalRevenue = ({ heading, years }: iTotalRevenue) => {
    return (
        <main className=" h-[290px] w-full" style={{ borderTopRightRadius: "0", borderBottomRightRadius: "0" }}>
            <div className="flex justify-between p-5" >
                <span className="font-semibold text-slate-500">  {heading}</span> <SlOptionsVertical className="text-slate-500 hover:text-indigo-300" />
            </div>
            <section className="flex ml-5">
                {years?.map((year: string, key: number) => {
                    return (
                        <div key={key} className="flex mr-3 text-xs">
                            <div className="w-1 h-1 rounded-full bg-indigo-400 relative top-1.5 mr-2" ></div>
                            {year}
                        </div>
                    )
                })}
            </section>

            <CustomRevenueChart verticalValues={[30, 20, 10, 0, -10, -20]} horizontalValues={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']} />
            {/* <TotalRevenueChart/> */}
        </main>
    )
}

export default TotalRevenue

const CustomRevenueChart = ({ verticalValues, horizontalValues }) => {
    return (
        <section className="relative ml-3 " >
            <section className="absolute">
                {/* sadadasd
                        dsadasd
                        dsfdfsd
                        fefre */}
            </section>
            <section className="relative text-xs">
                <div>
                    {verticalValues?.map((value: any, key: number) => {
                        return (
                            <div key={key} className="h-7 border-slate-200  text-slate-400 border-b-[1px] ">
                                {value}
                            </div>
                        )
                    })}
                </div>
                <section className="flex w-full text-xs">
                    {horizontalValues?.map((value: any, key: number) => {
                        return <div key={key} className="w-full text-right text-slate-400" >
                            <span className="relative right-2">
                                {value}
                            </span>
                        </div>
                    })}
                </section>
            </section>

        </section>)
}