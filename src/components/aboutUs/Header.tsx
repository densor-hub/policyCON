import { Link } from "react-router-dom"
import React from "react"
const Header = () => {
    return (
        <main>
            <div className="w-full bg-red-600 h-16 relative flex justify-end items-center">
                <Link to={'/dashboard'} className=" block bg-[#fee2e2] text-[#ef4444] mr-10 border-2 border-white rounded-lg px-3 hover:bg-red-600 hover:text-white">Dasboard</Link>
            </div>
        </main>
    )
}

export default Header