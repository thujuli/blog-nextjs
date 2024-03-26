"use client";
import MainArticleCard from "@/components/MainArticleCard";
import React, { useEffect, useState } from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube, FaFacebookF, FaTwitter } from "react-icons/fa";
import { abbreviateNumber } from "@/utils/parser";
import Link from "next/link";
import axios, { AxiosError } from "axios";
import { BASE_URL } from "@/utils/helper";

interface ArticlesResponse {
  id: string;
  title: string;
  description: string;
  imgArticleUrl: string;
  author: string;
  imgAuthorUrl: string;
  category: string;
  share: number;
  createdAt: string;
}

const RecentDestinations: React.FC = () => {
  const [articles, setArticles] = useState<ArticlesResponse[]>([]);

  useEffect(() => {
    getArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getArticles = async () => {
    try {
      const response = await axios.get<ArticlesResponse[]>(
        BASE_URL + "/articles"
      );
      console.log(response.data);

      setArticles([...articles, ...response.data]);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else if (error instanceof AxiosError) {
        console.error(error.response?.data?.message);
      } else {
        console.error("Internal server error");
      }
    }
  };

  return (
    <section>
      <div className="flex justify-end gap-4 mt-8">
        <Link href="/" className="flex gap-1 items-center font-europa-regular">
          <FaFacebookF />
          {abbreviateNumber(3_700_000)}
        </Link>
        <Link href="/" className="flex gap-1 items-center font-europa-regular">
          <RiInstagramFill />
          {abbreviateNumber(2_400_000)}
        </Link>
        <Link href="/" className="flex gap-1 items-center font-europa-regular">
          <FaTwitter />
          {abbreviateNumber(3_700_000)}
        </Link>
        <Link href="/" className="flex gap-1 items-center font-europa-regular">
          <FaYoutube />
          {abbreviateNumber(2_400_000)}
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-x-8 gap-y-16 mt-8">
        {articles.map((article) => {
          const {
            author,
            createdAt,
            description,
            id,
            imgArticleUrl,
            imgAuthorUrl,
            share,
            title,
            category,
          } = article;

          return (
            <MainArticleCard
              key={id}
              author={author}
              description={description}
              category={category}
              createdAt={createdAt}
              imgAuthorUrl={imgAuthorUrl}
              imgArticleUrl={imgArticleUrl}
              share={share}
              title={title}
            />
          );
        })}
      </div>
      <button className="block mx-auto mt-20 px-16 py-3 border-2 border-black rounded-sm text-slate-600 font-bold">
        Load More
      </button>
    </section>
  );
};

export default RecentDestinations;
