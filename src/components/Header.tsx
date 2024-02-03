import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-[#3F0071] font-mono w-full">
      <div className="p-5 shadow-md  bg-white  w-[99%] m-auto">
        <div className="flex items-center">
          <div className="space-x-2 ml-5">
            <span className="font-bold text-2xl  ">Luca</span>
            <span className="text-[#3F0071] font-bold text-2xl">Malli</span>
          </div>

          <div className="ml-auto">
            <nav className="space-x-4 flex items-center text-xl font-bold text-gray-600 ">
              <Link className="hover:text-[#3F0071]" href={"/"}>
                Home
              </Link>
              <Link className="hover:text-[#3F0071]" href={"/projects"}>
                Experience & Projects
              </Link>
              <Link className="hover:text-[#3F0071]" href={"/education"}>
                Education
              </Link>
              <Link className="hover:text-[#3F0071]" href={"/contact"}>
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
