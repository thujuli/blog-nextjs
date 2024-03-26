"use client";
import { getBlogPosts } from "@/utils/contentful";
import React, { useEffect } from "react";

const OthersArticle: React.FC = () => {
  useEffect(() => {
    getOtherArticles();
  }, []);

  const getOtherArticles = async () => {
    try {
      const response = await getBlogPosts();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return <div></div>;
};

export default OthersArticle;
