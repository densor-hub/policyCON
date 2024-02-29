import { SiFacebook, SiGoogle } from "react-icons/si"
import { Link } from "react-router-dom"
import BgLeft from "../assets/images/loginBgLeft.png"
import BgRight from "../assets/images/loginBgRight.png"
import { useNavigate } from "react-router-dom"
import React from "react"

const LoginPage = () => {
    const navigateTo = useNavigate()
    return (
        <main className="w-full min-h-screen h-[530px]  relative overflow-y-hidden" >
            <section className="flex min-h-screen h-full relative">
                <div className="w-[50%]">
                    <img src={BgRight} className="h-full w-full"></img>
                </div>
                <div className="w-[50%]">
                    <img src={BgLeft} className="h-full w-full"></img>
                </div>
            </section>
            <section className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] min-h-[500px] min-w-[300px] rounded-xl bg-slate-100" >
                <p className="font-bold text-xl mt-14 text-center mb-10">Sign In</p>
                <form className="mb-10">
                    <CustomInput placeholder={"username or email"} />
                    <CustomInput placeholder={"password"} />
                    <button className="bg-purple-500 text-white uppercase text-sm flex justify-center items-center mx-auto rounded-2xl px-5 py-2 hover:bg-purple-300 hover:text-purple-500" onClick={() => { navigateTo('/dashboard') }}>Sign In</button>
                </form>

                <p className="text-slate-400 text-center mb-3">Or login with </p>
                <div className="flex text-center justify-center items-center mb-12" >
                    <SiFacebook size={30} className="text-blue-600 bg-white mr-4" />
                    <SiGoogle size={30} className="text-red-600 bg-white mr-4" />
                </div>

                <div className="text-slate-400 text-center text-[11px] mx-auto w-fit border" >
                    <Link to={''}>Sign Up</Link>
                </div>

            </section>
        </main >
    )
}

export default LoginPage



const CustomInput = ({ placeholder }) => {
    return (
        <div className=" mx-auto w-[70%] flex px-3 py-3 mb-5 bg-white rounded-lg" >
            <input placeholder={placeholder} className="w-[92%]"></input>
            <Options />
        </div>
    )
}

const Options = () => {
    return (
        <main className="bg-slate-400 flex w-fit px-1 py-0 rounded-md justify-center items-center">
            <div className="h-1 w-1 rounded-full bg-white ml-[1px]"></div>
            <div className="h-1 w-1 rounded-full  bg-white ml-[1px]"></div>
            <div className="h-1 w-1 rounded-full  bg-white ml-[2px]"></div>
        </main>
    )
}