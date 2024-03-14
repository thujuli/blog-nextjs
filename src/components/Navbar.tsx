import React from "react";
import Container from "./Container";
import Image from "next/image";
import { menuItems } from "@/utils/helper";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";

const Navbar: React.FC = () => {
  return (
    <nav className="z-10 absolute w-full pt-[42px]">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={360}
              height={50}
              className="max-w-[240px] "
            />
          </Link>
          <div className="flex gap-[20px] text-white uppercase">
            {menuItems.map((menu, idx) => (
              <Link key={idx} href={menu.url}>
                {menu.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <button className="h-[40px] w-[40px]">
              <IoSearch className="text-white text-[32px]" />
            </button>
            <input
              type="text"
              name="search"
              placeholder="GET YOUR 120$ CHRISTMAS GIFT"
              className="w-[300px] px-4 py-[10px] rounded-sm bg-black text-white font-sansita font-bold placeholder-white"
            />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
