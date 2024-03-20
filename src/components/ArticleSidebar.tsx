"use client";
import { useAppSelector } from "@/lib/hooks";
import { articlesMenu } from "@/utils/helper";
import Link from "next/link";
import React from "react";

const ArticleSidebar: React.FC = () => {
  const username = useAppSelector((state) => state.user.username);
  return (
    <section>
      <div>
        <div className="flex justify-center items-center h-[50px] w-[50px] mx-auto mb-2 bg-gray-300 text-2xl uppercase">
          <span>{username.slice(0, 2)}</span>
        </div>
        <p className="text-center">
          Hello, <strong>{username}</strong>
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-10">
        {articlesMenu.map((article, idx) => (
          <Link key={idx} href={article.url}>
            {article.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ArticleSidebar;
