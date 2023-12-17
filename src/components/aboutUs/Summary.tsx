import { TbProgressAlert, TbTarget } from "react-icons/tb";
import React, { forwardRef, useEffect, useRef, useImperativeHandle } from "react";
import { FaLightbulb } from "react-icons/fa";
import TextTyper from "./TextTyper";
import { Link } from "react-router-dom";
import Header from "./Header";

const Summary = forwardRef(({ }, ref) => {
  const ourGoalRef = useRef<HTMLDivElement>(null);
  const ourJourneyRef = useRef<HTMLDivElement>(null);
  const ourVisonRef = useRef<HTMLDivElement>(null)

  useImperativeHandle(ref, () => {
    return { componentHeight: window?.innerHeight }
  })

  useEffect(() => {
    setTimeout(() => {
      ourGoalRef.current.style.transform = "translateX(100px)"
      ourJourneyRef.current.style.transform = "translateY(-100px)"
      ourVisonRef.current.style.transform = "translateX(-100px)"
    }, 20);
  }, [])

  return (
    <main
      className="bg-white pb-4 -z-10 relative h-fit min-h-[500px]"
      style={{ bottom: "1px" }}
      id="services"
    >
      <header className="pt-10 pb-5 text-center font-semibold text-3xl mt-7">
        <p className="text-center mx-auto mb-5">Empowering Policy Conversations</p>
        <p className="text-xl">About PolicyCON</p>
      </header>
      <p className="text-center font-semibold mb-5 h-10">
        <TextTyper data={["Where Every Voice Shapes the Future"]} repeat={true} typingSpeed={120} />
      </p>
      <section className="block sm:flex w-fit mx-auto">
        <section className="py-5 px-2 relative right-[100px] transition-all duration-500 " ref={ourGoalRef}>
          <div className="h-[90px] w-[90px] rounded-full bg-[#fee2e2] text-[#ef4444] mx-auto animate-bounce" >
            <div className="mx-auto w-fit relative top-[50%] translate-y-[-50%] ">
              <TbTarget size={60} className="" />
            </div>
          </div>
          <div className="text-center font-semibold pt-5">Our Goal</div>
          <div className="w-[200px] text-[13px] text-slate-500 text-center p-4">
            We are committed to shaping the future of public policy globally 😎.
          </div>

        </section>

        <section className="py-5 px-2 relative top-[100px] transition-all duration-500" ref={ourJourneyRef}>
          <div className="h-[90px] w-[90px] rounded-full bg-[#fee2e2] text-[#ef4444]  mx-auto animate-bounce">
            <div className="mx-auto w-fit relative top-[50%] translate-y-[-50%]">
              <TbProgressAlert size={50} />
            </div>
          </div>
          <div className="text-center font-semibold pt-5">Our Journey </div>
          <div className="w-[200px] text-[13px] text-slate-500 text-center p-4">
            Founded in 2018, PolicyCON has rapidly evolved from a small forum to a thriving community 🎉.
          </div>

        </section>

        <section className="py-5 px-2 relative left-[100px] transition-all duration-500" ref={ourVisonRef}>
          <div className="h-[90px] w-[90px] rounded-full bg-[#fee2e2] text-[#ef4444]  mx-auto animate-bounce">
            <div className="mx-auto w-fit relative top-[50%] translate-y-[-50%]">
              <FaLightbulb size={40} />
            </div>
          </div>
          <div className="text-center font-semibold pt-5">Our Vison</div>
          <div className="w-[200px] text-[13px] text-slate-500 text-center p-4">
            We envision a world where policymaking is reflective of diverse viewpoints and is accessible to all.
          </div>
        </section>
      </section>
    </main>
  );
});
export default Summary;
