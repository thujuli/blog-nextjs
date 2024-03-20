import { abbreviateNumber, dateLocal } from "@/utils/parser";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoImageOutline, IoShareSocialOutline } from "react-icons/io5";
import OverlayLayer from "./OverlayLayer";

interface MainArticleCardProps {
  categories?: string[];
  imgArticleUrl: string;
  title: string;
  description: string;
  author: string;
  createdAt: string;
  imgAuthorUrl: string;
  share: number;
}

const MainArticleCard: React.FC<MainArticleCardProps> = (props) => {
  const {
    categories,
    imgArticleUrl,
    title,
    description,
    author,
    createdAt,
    imgAuthorUrl,
    share,
  } = props;

  const [src, setSrc] = useState(imgAuthorUrl);
  return (
    <div>
      <div className="relative">
        <OverlayLayer />
        <Image
          src={imgArticleUrl}
          alt={title}
          width={420}
          height={360}
          placeholder="blur"
          blurDataURL="/images/blur.jpg"
          className="w-full h-[360px] object-cover"
        />
        <div className="absolute top-6 left-6 flex gap-1">
          {categories &&
            categories.length > 0 &&
            categories.map((val, idx) => (
              <span
                key={idx}
                className="h-10 px-[10px] py-2 rounded bg-slate-300/40 text-white font-bold"
              >
                {val}
              </span>
            ))}
        </div>
        <div className="absolute top-6 right-6 flex justify-center items-center h-10 w-10 bg-slate-300/40 rounded-full">
          <IoImageOutline className="text-2xl text-white text-center" />
        </div>
      </div>

      <h2 className="mt-8 text-3xl font-bold line-clamp-2">{title}</h2>
      <div className="mt-7 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Image
            src={src}
            alt={author}
            width={40}
            height={40}
            blurDataURL="/images/blur.jpg"
            onError={() => setSrc("/images/profile-error.jpg")}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-bold">{author}</span>
        </div>
        <p className="font-europa-regular text-slate-500">
          {dateLocal(createdAt)}
        </p>
        {share > 0 && (
          <span className="flex items-center text-slate-500 font-europa-regular">
            <IoShareSocialOutline />
            {abbreviateNumber(share)} {share > 1 ? "shares" : "share"}
          </span>
        )}
      </div>
      <p className="mt-6 text-slate-500 font-europa-regular line-clamp-3">
        {description}
      </p>
      <Link href="/">
        <button
          type="button"
          className="mt-6 pb-1 border-b border-black font-bold"
        >
          View Post
        </button>
      </Link>
    </div>
  );
};

export default MainArticleCard;
