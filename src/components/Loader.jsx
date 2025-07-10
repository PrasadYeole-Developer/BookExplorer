"use client";
import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Loader = () => {
  useGSAP(() => {
    document.documentElement.classList.add("loading");
    gsap.from(".content", {
      xPercent: -1000,
      duration: 0.9,
      ease: "back.inOut",
    });

    gsap.to(".content", {
      opacity: 0,
      delay: 2.2,
      duration: 0.3,
      ease: "power1.out",
    });

    gsap.to(".loader", {
      top: "-100%",
      delay: 2.5,
      duration: 1,
      ease: "power4.inOut",
      onComplete: () => {
        document.documentElement.classList.remove("loading");
      },
    });
  }, []);

  return (
    <div className="loader fixed z-50 top-0 left-0 bg-[#303030] w-full h-screen text-white flex items-center justify-center">
      <div className="content flex gap-[2rem]">
        <Image
          src="/favicon.png"
          alt="Logo Image"
          height={200}
          width={200}
          className="w-[6rem] h-[6rem] rounded-2xl shadow-md shadow-[#111] animate-bounce"
        />
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance pt-2">
          Books App{" "}
        </h1>{" "}
      </div>
    </div>
  );
};

export default Loader;
