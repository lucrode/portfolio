import Link from "next/link";
import { CiInstagram, CiLinkedin, CiMail } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import contactSvg from "../undraw_personal_text.svg";

export default function Contact() {
  return (
    <div className="h-screen md:mt-40  lg-mt-40 p-8 font-mono flex">
      <div className="flex flex-col  md:ml-96 lg:ml-96 ml-0">
        <h2 className="font-bold text-5xl" style={{ wordSpacing: "-0.3em" }}>
          Get in <span className="text-[#3F0071]">Touch</span>
        </h2>
        <div className="flex space-x-4 mt-10">
          <Link
            href="mailto:lucamal3d@gmail.com"
            className="w-16 h-16 hover:scale-105  transition-transform"
          >
            <IoMail className="w-full h-full " />{" "}
          </Link>
          <Link
            href="mailto:lucamal3d@gmail.com"
            className="w-16 h-16 hover:scale-105  transition-transform"
          >
            <FaInstagram className="w-full h-full" />{" "}
          </Link>
          <Link
            href="mailto:lucamal3d@gmail.com"
            className="w-16 h-16 hover:scale-105  transition-transform"
          >
            <FaGithub className="w-full h-full " />{" "}
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
}
