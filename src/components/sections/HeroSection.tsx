"use client";

import React, { useState } from "react";
import MainButton from "../common/MainButton";
import { motion } from "framer-motion";

function HeroSection() {


  return (
    <section className="flex flex-col gap-8 md:flex-row justify-between items-center">
      <div>
        <p className="text-[24px] font-semibold">Hi I am</p>
        <p className="text-[32px] text-primary font-semibold">
          Muhammad Umair{" "}
        </p>
        <p className="text-[50px] md:text-[100px] font-extrabold leading-[4rem] md:leading-[6rem]">
          UI & UX
        </p>
        <p className="text-[50px] md:text-[100px] font-extrabold leading-[4rem] md:leading-[6rem]">
          Designer
        </p>
        <p className="my-8">
          I am a passionate UI/UX designer with a keen eye for detail and a love
          for creating intuitive, user-centered interfaces.
        </p>
        <div>
          <MainButton text="Hire Me" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-[35px]">
        <div className="relative">
          <motion.img
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            src="/images/hero_image.png"
            alt="hero image"
          />
          <motion.div
            initial={{ scale: 0 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              loop: Infinity,
              repeatDelay: 1,
            }}
            className="absolute top-[6rem] left-[5rem]"
          >
            <img src="/images/hero_shape.png" alt="hero image" />
          </motion.div>
        </div>

        <div className="flex gap-[25.03px]">
          <img src="/images/facebook.png" alt="facebook icon" />
          <img src="/images/twitter.png" alt="twitter icon" />
          <img src="/images/instagram.png" alt="instagram icon" />
          <img src="/images/linkedin.png" alt="linkedin icon" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
