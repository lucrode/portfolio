import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full bg-[#3F0071]">
    <div className="p-5 shadow-md  bg-white  w-[99%] m-auto">
      <div className="flex items-center">
        <div className="space-x-2">
          <span className="font-bold text-2xl">Luca</span>
          <span className="text-[#3F0071] font-bold text-2xl">Malli</span>
        </div>

        <div className="ml-auto">
          <nav className="space-x-4 flex items-center">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
          </nav>
        </div>
      </div>
    </div>
    </div>
  );
}
