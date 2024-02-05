"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Label } from "./ui/label";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const isSmallScreen = true;

  const handleLinkClick = () => {
    // Close the sheet when a link is clicked
    setIsSheetOpen(false);
  };

  return (
    <div className="bg-[#3F0071] font-mono w-full ">
      <div className="p-5 shadow-md  bg-white  w-[99%]  m-auto">
        <div className="flex items-center">
          <div className="space-x-2 ml-5">
            <span className="font-bold text-2xl">Luca</span>
            <span className="text-[#3F0071] font-bold text-2xl">Malli</span>
          </div>

          <div className="ml-auto lg:hidden">
            <Sheet open={isSheetOpen}>
              <SheetTrigger asChild>
                <FaBars onClick={() => setIsSheetOpen(!isSheetOpen)} />
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="flex items-left flex-col text-left text-xl font-bold text-gray-600 ">
                  <Link
                    className="hover:text-[#3F0071]"
                    href={"/"}
                    onClick={handleLinkClick}
                  >
                    Home
                  </Link>
                  <Link
                    className="hover:text-[#3F0071]"
                    href={"/projects"}
                    onClick={handleLinkClick}
                  >
                    Experience & Projects
                  </Link>
                  <Link
                    className="hover:text-[#3F0071]"
                    href={"/education"}
                    onClick={handleLinkClick}
                  >
                    Education
                  </Link>
                  <Link
                    className="hover:text-[#3F0071]"
                    href={"/contact"}
                    onClick={handleLinkClick}
                  >
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <div className="ml-auto hidden lg:block">
            <nav className="space-x-4 flex items-center text-xl font-bold text-gray-600 ">
              <Link
                className="hover:text-[#3F0071]"
                href={"/"}
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link
                className="hover:text-[#3F0071]"
                href={"/projects"}
                onClick={handleLinkClick}
              >
                Experience & Projects
              </Link>
              <Link
                className="hover:text-[#3F0071]"
                href={"/education"}
                onClick={handleLinkClick}
              >
                Education
              </Link>
              <Link
                className="hover:text-[#3F0071]"
                href={"/contact"}
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
