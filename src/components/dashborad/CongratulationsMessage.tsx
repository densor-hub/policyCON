import { iCongratulationsMessage } from "../../Inerfaces"
import Avatar from "../../assets/images/Avatar.png"
import React from "react"

const CongratulationsMessage: React.FC<{name: string, progressPercentage: number | string}> = ({ name, progressPercentage }: iCongratulationsMessage) => {
    return (
        <main className="flex justify-between bg-white p-5 text-sm rounded-xl border-2 border-slate-200 lg:h-[178px] min-w-[450px] xl:min-w-[670px] w-full" >
            <section className="pr-24">
                <article className="text-sm text-slate-400">
                    <header className="text-xl font-semibold text-indigo-400 pb-6">
                        Congratulations {name} ! 🎉
                    </header>
                    <p>You have done {progressPercentage}% 😎 more sales today.</p>
                    <p>Check your new raising badge in your profile</p>
                    <button className="mt-5 p-1 border-indigo-200 text-[12px] uppercase text-indigo-400 font-semibold rounded-md bg-indigo-50 hover:bg-indigo-400 hover:text-white">
                        View badges
                    </button>
                </article>
            </section>
            <section className="flex relative top-5" >
                <img src={Avatar}></img>
            </section>
        </main>
    )
}

export default CongratulationsMessage