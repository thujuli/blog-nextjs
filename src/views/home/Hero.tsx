import ButtonCTA from "@/components/ButtonCTA";
import OverlayLayer from "@/components/OverlayLayer";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/images/hero-home.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "100vh",
      }}
      className="relative"
    >
      <OverlayLayer />
      <div className="absolute top-1/2 flex flex-col items-center w-full">
        <h1 className="mb-1 text-5xl uppercase text-white">
          Inspiration for travel by real people
        </h1>
        <p className="mb-10 font-europa-regular text-white text-3xl">
          Book smart, travel simple
        </p>
        <Link href="/signin">
          <ButtonCTA>Start planning your trip</ButtonCTA>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
