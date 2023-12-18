import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { GrUserSettings } from "react-icons/gr";
import { RiLoginBoxLine } from "react-icons/ri";
import { GoPersonAdd, GoPeople } from "react-icons/go";
import SneatLoggo from "../../assets/images/sneatIcon.png";
import { useLocation } from "react-router-dom";
import React from "react";
import { iSideBarData } from "../../Inerfaces";

const sidebarData: iSideBarData[] = [
    {
        heading: "",
        data:
            [{ label: "Dashboard", icon: BiHome, path: "/dashboard" },
            { label: "Account Settings", icon: GrUserSettings, path: "" }
            ]
    },
    {
        heading: "Pages",
        data:
            [{ label: "Login", icon: RiLoginBoxLine, path: "/" },
            { label: "Register", icon: GoPersonAdd, path: "/" }
            ]
    },
    {
        heading: "About us",
        data:
            [{ label: "About us", icon: GoPeople, path: "/about-us" },

            ]
    }
]

const Sidebar = () => {
    const { pathname } = useLocation();
    return (
        <main className="w-40 xl:w-52 bg-white">
            <div className="flex w-[80%] mx-auto pt-2 pb-2" >
                <img src={SneatLoggo} className="w-7 h-7" />
                <div className="font-semibold text-slate-600 text-2xl" >
                    sneat
                </div>
            </div>
            {sidebarData?.map((item: iSideBarData, index: number) => {
                return (
                    <div key={index} className={item?.data?.find(elements => {
                        return elements?.path === pathname
                    }) ? "border-r-4 border-r-indigo-600" : ""}>
                        <div className="text-[10px] text-slate-400  uppercase font-semibold mt-3 mb-3 w-[80%] mx-auto"> {item?.heading}</div>
                        <div>{item?.data?.map((data, key) => {
                            const Icon = data?.icon
                            return (
                                <div key={key} className="rounded-xl  w-[90%] mx-auto text-slate-500 text-sm font-semibold hover:bg-indigo-100 hover:text-indigo-500 mb-2" >
                                    <Link to={data?.path} className="flex p-2">
                                        <Icon style={{ color: "#6366f1", margin: "5px" }} />
                                        <span className="relative top-0.5">{data?.label}</span>
                                    </Link>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                )
            })}
        </main>
    )
}

export default Sidebar


