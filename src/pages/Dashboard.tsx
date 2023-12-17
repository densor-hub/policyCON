import Sidebar from "../components/dashborad/Sidebar"
import HorizontalNavBar from "../components/dashborad/HorizontalNavBar"
import CongratulatoryMessage from "../components/dashborad/CongratulationsMessage"
import ProgressCard from "../components/dashborad/ProgressCard"
import TotalRevenue from "../components/dashborad/TotalRevenue"
import Growth from "../components/dashborad/Growth"
import ProfileReport from "../components/dashborad/ProfileReport"
import OrderStatistics from "../components/dashborad/OrderStatistics"
import Trasactions from "../components/dashborad/Transactions"
import IncomeExpensesProfitsTABS from "../components/dashborad/IncomeExpensesProfitsTABS"
import { LuWallet } from "react-icons/lu";
import { AiFillPieChart } from "react-icons/ai";
import { FaPaypal } from "react-icons/fa6";
import { BiCreditCard } from "react-icons/bi"
import React from "react"

const Dashboard = () => {
    return (
        <main className="min-w-[700px] overflow-x-hidden flex w-[100vw] bg-slate-100 min-h-screen">
            <Sidebar />
            <section className="w-[calc(100vw-240px)]">
                <HorizontalNavBar />
                <section className=" xl:flex w-full justify-between mb-3 " >
                    <div className="mb-3 xl:mb-0  ml-3 mr-4 w-full">
                        <CongratulatoryMessage name={"John"} progressPercentage={72} />
                    </div>
                    <div className="mx-auto flex w-[350px] justify-center item lg:justify-between relative lg:right-1" >
                        <div className="mr-3">
                            <ProgressCard icon={{ icon: AiFillPieChart, size: 40, backgroundColor: "#ecfccb", color: "#84cc16" }} title={"profit"} progressPercentage={72.8} amount={12628} />
                        </div>

                        <div>
                            <ProgressCard icon={{ icon: LuWallet, size: 40, backgroundColor: "#cffafe", color: "#22d3ee" }} title={"sales"} progressPercentage={28.42} amount={4678} />
                        </div>
                    </div>
                </section>
                <section className="xl:flex mb-3">
                    <section className="mb-3 lg:flex bg-white  w-full rounded-xl border-2 border-slate-200 ml-3 border-r-0 min-w-[450px] overflow-x-hidden" >
                        <TotalRevenue
                            heading={"Total Revenue"}
                            years={["2021", "2022"]}
                            months={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                            verticalValues={[30, 20, 10, 0, -10, -20]}
                        />
                        <div className="flex items-center justify-center" >
                            <Growth />
                        </div>
                    </section>
                    <section className="xl:w-[400px] ml-3 relative" >
                        <div className="mx-auto flex justify-between max-w-[360px]  right-0 " >
                            <div className="mr-3">
                                <ProgressCard icon={{ icon: FaPaypal, size: 30, backgroundColor: "#fee2e2", color: "#ef4444" }} title={"payment"} progressPercentage={-14.82} amount={2468} />
                            </div>
                            <div>
                                <ProgressCard icon={{ icon: BiCreditCard, size: 30, backgroundColor: "#dbeafe", color: "#a5b4fc" }} title={"transactions"} progressPercentage={28.14} amount={14857} />
                            </div>
                        </div>
                        <div className="mx-auto mt-3 w-full  bottom-0 right-0 max-w-[350px]">
                            <ProfileReport year={"2022"} amount={84686} heading={"Profile Report"} progressPercentage={68.2} />
                        </div>
                    </section>

                </section>

                <section className="xl:flex mt-3 ml-3">
                    <div className="mb-3 flex ">
                        <OrderStatistics heading={"Order Statistics"} totalOrders={8258} totalSales={42.82} weeklyPercentage={38} />
                        <IncomeExpensesProfitsTABS />
                    </div>
                    <div className="w-[300px]">
                        <Trasactions heading={"Transactions"} />
                    </div>
                </section>
            </section>
        </main>
    )
}
export default Dashboard