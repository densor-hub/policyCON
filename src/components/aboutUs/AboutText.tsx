import React, { useState } from "react";
import { useEffect, useRef } from "react";

const AboutText = ({ summaryHeight }) => {
  const moreAboutUsRef = useRef<HTMLHeadingElement>(null)
  const ourMissionRef = useRef<HTMLElement>(null)

  const [animate, setAnimate] = useState({
    showMoreAboutUsHeading: false,
    showMoreAboutUsText: false,
  })
  useEffect(() => {
    const onPageScroll = () => {
      if (summaryHeight?.current?.componentHeight > window.innerHeight - window.scrollY + 100) {
        setAnimate(p => {
          return { ...p, showMoreAboutUsHeading: true }
        })
      }

      if (summaryHeight?.current?.componentHeight > window.innerHeight - window.scrollY + 400) {
        setAnimate(p => {
          return { ...p, showMoreAboutUsText: true }
        })
      }
    }
    document.addEventListener('scroll', onPageScroll)
  })

  useEffect(() => {
    if (moreAboutUsRef.current) {
      setTimeout(() => {
        if (animate?.showMoreAboutUsHeading) {
          moreAboutUsRef.current.style.opacity = "1"
          moreAboutUsRef.current.style.transform = "translateX(-100px)"
        }

        if (animate?.showMoreAboutUsText) {
          ourMissionRef.current.style.opacity = "1"
          ourMissionRef.current.style.transform = "translateX(-100px)"
        }
      }, 10)
    }

  }, [animate])

  return (
    <main
      className=" bg- bg-white relative"
      style={{ bottom: "3px" }}
      id="about-us"
    >
      <section className=" bg- bg-white pb-[80px ]  flex flex-col mt-10">
        <article className="text-left text-[14px] w-[70%] mx-auto pb-32">
          {animate.showMoreAboutUsHeading && <h1 className="font-bold text-center text-2xl pb-5 relative left-[100px] transition-all duration-500 opacity-0" ref={moreAboutUsRef}>More About Us</h1>}

          {<main ref={ourMissionRef} className="relative left-[100px] transition-all duration-500 opacity-0">
            <section >
              <h3 className="text-center italic text-red-500 font-bold pb-5">Our Mission</h3>
              <p className="pb-5">
                At PolicyCON, we are committed to shaping the future of public policy. Our platform is a beacon
                for dynamic discussions, bringing together diverse perspectives from around the globe. We
                believe in empowering voices, from seasoned analysts to enthusiastic newcomers, to
                contribute to meaningful policy changes.

              </p>
            </section>

            <section >
              <h3 className="text-center italic text-red-500 font-bold pb-5">Our Journey</h3>
              <p className="pb-5">
                Founded in 2018, PolicyCON has rapidly evolved from a small forum to a thriving community.
                Our journey began with a simple idea: to make policy discussions more accessible and inclusive.
                Today, we are proud to be a leading plaWorm where experts and enthusiasts alike can share
                insights, challenge norms, and drive innovation in policymaking.
                Our Community
              </p>
            </section>

            <section >
              <h3 className="text-center italic text-red-500 font-bold pb-5">Our Community</h3>
              <p className="pb-5">
                The heart of PolicyCON is our vibrant community. We foster an environment where open
                dialogue is encouraged, and diverse opinions are celebrated. Our members range from policy
                professionals and academics to students and activists, all united by a shared passion for shaping
                a beKer world.
              </p>
            </section>

            <section  >
              <h3 className="text-center italic text-red-500 font-bold pb-5">Our Impact</h3>
              <p className="pb-5">

                Through our plaWorm, we've facilitated critical conversations on global issues, influenced policy
                decisions, and provided a stage for underrepresented voices. Our impact extends beyond
                discussions, as we actively engage in policy research, host webinars, and collaborate with
                organizations for broader societal change.
              </p>
            </section>
            <section >
              <h3 className="text-center italic text-red-500 font-bold pb-5">Our Vision</h3>
              <p className="pb-5">
                Looking ahead, PolicyCON aims to further democratize policy discussion. We envision a world
                where policymaking is a collaborative effort, accessible to all, and reflective of diverse
                viewpoints. Our commitment to innovation and inclusivity drives us to continuously enhance
                our plaWorm, ensuring that every voice can be heard, and every idea can make a difference.
              </p>

              <p>
                Join Us, become a part of PolicyCON's journey. Whether you're looking to contribute your expertise,
                learn about policy, or simply engage in meaningful conversations, our doors are open. Join us
                today and be a part of shaping the policies of tomorrow.
              </p>
            </section>
          </main>}

        </article>
      </section>
    </main>
  );
};

export default AboutText;
