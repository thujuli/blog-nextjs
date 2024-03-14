import Image from "next/image";
import React from "react";
import OverlayLayer from "./OverlayLayer";

interface ImageTitleCardProps {
  title: string;
  imgUrl: string;
}

const ImageTitleCard: React.FC<ImageTitleCardProps> = (props) => {
  const { title, imgUrl } = props;

  return (
    <div className="relative w-60 h-[180px]">
      <OverlayLayer />
      <div
        style={{
          backgroundImage: `url("${imgUrl}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: "180px",
        }}
      >
        <p className="absolute top-1/2 w-full text-center text-white font-bold">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ImageTitleCard;
