"use client";
import MainArticleCard from "@/components/MainArticleCard";
import { useAppSelector } from "@/lib/hooks";
import { BASE_URL } from "@/utils/helper";
import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { GiFullMetalBucket } from "react-icons/gi";

interface ArticleData {
  id: string;
  imgArticleUrl: string;
  createdAt: string;
  description: string;
  title: string;
  author: string;
  category: string;
}

const ArticlesByCategory: React.FC = () => {
  const categories = useAppSelector((state) => state.categories);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [articles, setArticles] = useState<ArticleData[]>([]);

  useEffect(() => {
    getArticlesByCategory();
  }, [selectedCategory]);

  const getArticlesByCategory = async () => {
    try {
      const response = await axios.get<ArticleData[]>(
        BASE_URL + `/articles?category=${selectedCategory}`
      );
      setArticles(response.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data);
      } else if (error instanceof Error) {
        alert(error.message);
      }
    }
  };
  return (
    <section className="my-20">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold text-nowrap">Articles</h1>
        <hr className="w-full border border-black" />
      </div>
      <div className="flex justify-between mt-4 uppercase border-b-2 border-gray-100 text-center">
        <span
          className={`block w-full border-b-2 hover:cursor-pointer ${
            selectedCategory === "" ? "border-black" : "border-transparent"
          }`}
          onClick={() => {
            setSelectedCategory("");
          }}
        >
          All
        </span>
        {categories.map((category) => (
          <span
            key={category.id}
            className={`block w-full border-b-2 hover:cursor-pointer ${
              selectedCategory === category.title
                ? "border-black"
                : "border-transparent"
            }`}
            onClick={() => {
              setSelectedCategory(category.title);
            }}
          >
            {category.title}
          </span>
        ))}
      </div>
      {!articles.length ? (
        <div className="flex flex-col items-center justify-center mt-8 h-[680px] text-gray-500">
          <p className="text-8xl">
            <GiFullMetalBucket />
          </p>
          <p className="text-2xl">Article Empty</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-x-8 gap-y-16 mt-8">
          {articles.map((article) => (
            <MainArticleCard
              key={article.id}
              author={article.author}
              category={article.category}
              createdAt={article.createdAt}
              description={article.description}
              imgArticleUrl={article.imgArticleUrl}
              title={article.title}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ArticlesByCategory;
