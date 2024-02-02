"use client";
import Image from "next/image";
import luca from "./luca.jpeg";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <div>
      <div className="mt-[200px]  justify-center gap-52 flex  items-center ">
        <div className="">
          <div className="space-y-4 mb-10">
            <h1 className="text-5xl mb-8">Hey!</h1>
            <span className="font-bold text-5xl">I'm </span>{" "}
            <span className="text-[#3F0071] font-bold text-5xl"> Luca.</span>
            <div>
              <ReactTyped
                strings={["I code.", "I solve problems.", "I build solutions."]}
                typeSpeed={40}
                backSpeed={50}
                attr="placeholder"
                loop
              >
                <input
                  type="text"
                  disabled
                  className="text-xl placeholder:text-black"
                />
              </ReactTyped>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="bg-[#3F0071] text-white  px-10 py-4 rounded-md">
              Get in touch
            </button>
            <button className="text-[#3F0071] bg-white px-4  border-[#3F0071] border  py-2 rounded-md">
              Download Resume
            </button>
          </div>
        </div>

        <div className="relative  w-[400px] h-[400px]">
          <Image src={luca} className="rounded-lg " alt="Luca" fill></Image>
        </div>
      </div>
    </div>
  );
}
