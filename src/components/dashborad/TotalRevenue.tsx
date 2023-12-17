import { SlOptionsVertical } from "react-icons/sl";
import TotalRevenueChart from "../../charts/TotalRevenueCharts";
import React from "react";
import { iTotalRevenue } from "../../Inerfaces";

const TotalRevenue = ({ heading, years, months, verticalValues }: iTotalRevenue) => {
    return (
        <main className="" style={{ borderTopRightRadius: "0", borderBottomRightRadius: "0" }}>
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

            <TotalRevenueChart />
        </main>
    )
}

export default TotalRevenue

// <section className="relative ml-3 " >
//                 <section className="absolute">
//                     {/* sadadasd
//                     dsadasd
//                     dsfdfsd
//                     fefre */}
//                 </section>
//                 <section className="relative text-xs">
//                     <div>
//                         {verticalValues?.map((value) => {
//                             return (
//                                 <div className="h-7 border-slate-500" style={{ borderBottom: "1px solid #d1d5db" }}>
//                                     {value}
//                                 </div>
//                             )
//                         })}
//                     </div>
//                     <section className="flex w-full text-xs">
//                         {months?.map(month => {
//                             return <div className="w-full text-right" >
//                                 <span className="relative right-2">
//                                     {month}
//                                 </span>
//                             </div>
//                         })}
//                     </section>
//                 </section>

//             </section>