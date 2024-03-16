import ButtonCTA from "@/components/ButtonCTA";
import OverlayLayer from "@/components/OverlayLayer";
import Link from "next/link";
import React from "react";

const CTA: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/images/cta-home.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        minHeight: "540px",
      }}
      className="relative mt-20"
    >
      <OverlayLayer />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 mx-auto flex flex-col justify-center items-center text-white">
        <span className="font-bold px-2 py-[2px] rounded bg-slate-300/40">
          Travel
        </span>
        <h2 className="mt-2 text-3xl text-center font-bold">
          Richird Norton photorealistic rendering as real photos
        </h2>
        <p className="w-11/12 mt-4 mb-7 text-slate-200 text-center font-europa-regular">
          Progressively incentivize cooperative systems through technically
          sound functionalities. The credibly productivate seamless data.
        </p>
        <Link href="/login">
          <ButtonCTA className="text-indigo-500">
            Start planning your trip
          </ButtonCTA>
        </Link>
      </div>
    </div>
  );
};

export default CTA;
