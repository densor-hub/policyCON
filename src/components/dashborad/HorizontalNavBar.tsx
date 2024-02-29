import { TbSearch } from "react-icons/tb";
import { BiSearch } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import React from "react";
import { MdOutlineNotifications, MdLightMode } from "react-icons/md";
import ProfilePicture from "../../assets/images/profileIPicture.png"

const HorizontalNavBar : React.FC = () => {
    return (
        <main className="bg-white flex relative p-3 m-3 ml-0 mr-0 mt-0 border-2 border-slate-200 rounded-md min-w-[450px] w-full" style={{}}>
            <section className="flex">
                <div className="relative top-1 text-slate-500 ml-3 mr-4" ><BiSearch /></div>
                <input type="text" placeholder="Search"></input>
            </section>
            <section className="flex absolute right-0">
                <div className="mt-1 mr-3"><FaGithub /></div>
                <div className="mt-1 mr-3"><MdOutlineNotifications /></div>
                <div className="mt-1 mr-3"><MdLightMode /></div>
                <div className="w-9 relative bottom-3 mr-3" ><img src={ProfilePicture}></img></div>
            </section>
        </main>
    )
}

export default HorizontalNavBar