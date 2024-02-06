import { ReactTyped } from "react-typed";
import luca from "../app/luca.jpeg";
import Image from "next/image";
import Link from "next/link";

export default function IntroductionSection() {
  return (
    <div className="md:mt-[200px] lg:mt-[200px] p-8  md:p-0 lg:p-0  justify-center sm:gap-52 flex md:flex-row flex-col items-center font-mono ">
      <div className="">
        <div className="space-y-4 mb-10">
          <h1 className="text-5xl mb-8">Hey!</h1>
          <h2 className="font-bold text-5xl" style={{ wordSpacing: "-0.3em" }}>
            I&rsquo;m
            <span className="text-[#3F0071] font-bold text-5xl "> Luca.</span>
          </h2>

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
                className="text-xl placeholder:text-black disabled:bg-white"
              />
            </ReactTyped>
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="bg-[#3F0071] text-white  px-10 py-4 rounded-md">
            <Link href="https://calendly.com/luca_malli/30min">
              Get in touch
            </Link>
          </button>
          <button className="text-[#3F0071] bg-white px-4  border-[#3F0071] border  py-2 rounded-md">
            Download Resume
          </button>
        </div>
      </div>

      <div className="relative  w-[200px] h-[200px] mt-12 md:mt-0 lg:mt-0  md:w-[400px] md:h-[400px]  lg:w-[400px] lg:h-[400px]">
        <Image src={luca} className="rounded-lg " alt="Luca" fill></Image>
      </div>
    </div>
  );
}
