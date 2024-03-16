"use client";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import { menuItems } from "@/utils/helper";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { useAppSelector } from "@/lib/hooks";

const Navbar: React.FC = () => {
  const username = useAppSelector((state) => state.user.username);
  return (
    <nav className="z-10 absolute w-full py-5 bg-black">
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
          <div className="flex gap-[10px] text-white uppercase text-sm">
            {menuItems.map((menu, idx) => (
              <Link key={idx} href={menu.url}>
                {menu.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button className="h-[40px] w-[40px]">
              <IoSearch className="text-white text-3xl" />
            </button>
            <input
              type="text"
              name="search"
              placeholder="GET YOUR 120$ CHRISTMAS GIFT"
              className="h-10 w-[300px] px-4 py-[10px] rounded-sm bg-white text-black font-sansita font-bold placeholder-black"
            />
            <div className="relative group">
              {username ? (
                <>
                  <button className="h-[40px] px-3 py-2 rounded-sm bg-white font-bold">
                    {username}
                  </button>
                  <div className="hidden absolute min-w-36 right-0 rounded-sm space-y-2 px-4 py-2 bg-white group-hover:block">
                    <p className="hover:cursor-pointer">Profile</p>
                    <Link href="/articles/add">
                      <p className="hover:cursor-pointer">Create Article</p>
                    </Link>
                    <hr className="border border-black" />
                    <p className="hover:cursor-pointer">Logout</p>
                  </div>
                </>
              ) : (
                <Link href="/signin">
                  <button className="h-[40px] px-3 py-2 rounded-sm bg-white font-bold">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
