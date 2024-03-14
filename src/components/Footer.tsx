import { abbreviateNumber } from "@/utils/parser";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between items-center py-10 px-20 bg-black text-white">
      <span className="font-europa-regular">
        Designed & Developed by{" "}
        <span className="font-europa-bold font-bold">XP DESIGN</span>
      </span>
      <div className="flex text-slate-300 gap-10">
        <span className="flex flex-col gap-1 justify-center items-center">
          <FaFacebook className="text-lg" />
          <span>{abbreviateNumber(3_700_000)}</span>
        </span>
        <span className="flex flex-col gap-1 justify-center items-center">
          <FaTwitter className="text-lg" />
          <span>{abbreviateNumber(2_400_000)}</span>
        </span>
        <span className="flex flex-col gap-1 justify-center items-center">
          <FaInstagram className="text-lg" />
          <span>{abbreviateNumber(3_700_000)}</span>
        </span>
        <span className="flex flex-col gap-1 justify-center items-center">
          <FaPinterest className="text-lg" />
          <span>{abbreviateNumber(2_400_000)}</span>
        </span>
        <span className="flex flex-col gap-1 justify-center items-center">
          <FaYoutube className="text-lg" />
          <span>{abbreviateNumber(2_400_000)}</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
