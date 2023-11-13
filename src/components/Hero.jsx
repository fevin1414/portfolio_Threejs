import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import TypingAnimation from "../animation/TypingAnimation";
import MeCanvas from "./canvas/MeCanvas";
import StarsCanvas from "./canvas/Stars";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex sm:flex-row justify-between items-center">
      <div className="absolute inset-0 z-0">
        <StarsCanvas />
      </div>
      <div
        className={`z-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 sm:gap-20`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="text-white">
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915EFF]">Fevin</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            I am a Full Stack Web Developer <br className="sm:block hidden" />I
            <br className="sm:hidden" />{" "}
            <span style={{ display: "inline-block" }}></span>
            <TypingAnimation text=" develop websites, develop android applications, create 3d Videos, do photoshop, do video editing..." />
          </p>
        </div>
      </div>

      <MeCanvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
          <p className="justify-center items-center">Scroll down</p>
        </a>
      </div>
    </section>
  );
};

export default Hero;
