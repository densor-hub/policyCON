import React from "react"
const CustomInput : React.FC<{placeholder: string}> = ({ placeholder }) => {
    return (
        <div className=" mx-auto w-[70%] flex px-3 py-3 mb-5 bg-white rounded-lg" >
            <input placeholder={placeholder} className="w-[92%]"></input>
            <Options />
        </div>
    )
}

const Options: React.FC = () => {
    return (
        <main className="bg-slate-400 flex w-fit px-1 py-0 rounded-md justify-center items-center">
            <div className="h-1 w-1 rounded-full bg-white ml-[1px]"></div>
            <div className="h-1 w-1 rounded-full  bg-white ml-[1px]"></div>
            <div className="h-1 w-1 rounded-full  bg-white ml-[2px]"></div>
        </main>
    )
}

export default CustomInput