"use client";

import { Separator } from "@/components/ui/separator";

export default function Education() {
  return (
    <div className="font-mono flex lg:mt-20  md:mt-20 p-8  flex-col  h-screen">
      <h2 className="font-bold text-5xl md:ml-96   lg:ml-96 mb-0 h-8 ">
        Education
      </h2>
      <div className="flex justify-center   md:mt-32 mt-12 lg:mt-32  ">
        <div className="flex ">
          <div className="flex flex-col mt-3 text-right mr-2">
            <h2 className="text-2xl md:text-4xl lg:text-4xl">High School</h2>
            <h2 className="text-l md:text-xl lg:text-xl">2020 - 2025</h2>
            <h2 className="text-2xl md:text-4xl lg:text-4xl mt-8 md:mt-14 lg:mt-14">
              Primary School
            </h2>
            <h2 className="text-l md:text-xl lg:text-xl">2016 - 2020</h2>
          </div>
          <div className="items-center flex flex-col">
            <span className="text-6xl">•</span>
            <Separator orientation="vertical" className="bg-black h-16" />
            <span className="text-6xl">•</span>
            <Separator orientation="vertical" className="bg-black h-16" />
          </div>
          <div className="flex flex-col mt-3 text-left ml-2">
            <h2 className="text-2xl md:text-4xl lg:text-4xl">HTBLA Kaindorf</h2>
            <h2 className="text-l md:text-xl lg:text-xl">
              IT Technology and Mathematics
            </h2>
            <h2 className="text-2xl md:text-4xl lg:text-4xl mt-8 md:mt-14 lg:mt-14">
              NMS Großklein
            </h2>
            <h2 className="text-l md:text-xl lg:text-xl">General</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
