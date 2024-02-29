import { SlOptionsVertical } from "react-icons/sl";
import { FaDollarSign } from "react-icons/fa6";
import React from "react";
import { iHeading, iTransactionData } from "../../Inerfaces";

const transactionsData: iTransactionData[] = [
    { source: "Paypal", heading: "Send money", amount: 82.6, currency: "USD", boxColor: "#fbcfe8" },
    { source: "Wallet", heading: "Mac'D", amount: 270.69, currency: "USD", boxColor: "#ede9fe" },
    { source: "Transfer", heading: "Refund", amount: 637.91, currency: "USD", boxColor: "#cffafe" },
    { source: "Credit Card", heading: "Ordered food", amount: 838.71, currency: "USD", boxColor: "#dcfce7" },
    { source: "Wallet", heading: "Starbucks", amount: 203.33, currency: "USD", boxColor: "#dcfce7" },
    { source: "Master card", heading: "Ordered food", amount: 92.45, currency: "USD", boxColor: "#ede9fe" }
]
const Trasactions :React.FC<{heading : string}>= ({ heading }: iHeading) => {
    return (
        <main className="w-full bg-white min-w-[350px] rounded-xl border-2 border-slate-200">
            <div className="flex justify-between p-5" >
                <span className="font-semibold text-slate-500">  {heading}</span> <SlOptionsVertical className="text-slate-500 hover:text-indigo-300" />
            </div>
            <section >
                {transactionsData?.map((transaction: iTransactionData, key: number) => {
                    return (
                        <div key={key} className="flex relative w-full h-14 items-center ml-3" >
                            <div className="w-8 h-8 rounded-md  top-1" style={{ backgroundColor: `${transaction?.boxColor}` }}></div>
                            <div className="ml-3">
                                <div className="text-xs text-slate-400">{transaction?.source}</div>
                                <div className="font-semibold text-slate-500">{transaction?.heading}</div>
                            </div>
                            <div className="flex absolute right-0 text-slate-500 font-semibold mr-5">{`${transaction?.amount > 0 ? "+" : ""}`}<FaDollarSign className="relative top-1" />{`${transaction?.amount} ${transaction?.currency}`}</div>
                        </div>
                    )
                })}
            </section>

        </main>
    )
}

export default Trasactions