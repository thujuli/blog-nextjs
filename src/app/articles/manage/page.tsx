"use client";
import Button from "@/components/Button";
import InputForm from "@/components/InputForm";
import SelectCategory from "@/components/SelectCategory";
import TextareaForm from "@/components/TextareaForm";
import { useAppSelector } from "@/lib/hooks";
import { BASE_URL } from "@/utils/helper";
import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";

interface ArticleData {
  id: string;
  imgArticleUrl: string;
  createdAt: string;
  description: string;
  title: string;
  author: string;
  category: string;
}

const initialArticle: ArticleData = {
  author: "",
  createdAt: "",
  description: "",
  id: "",
  imgArticleUrl: "",
  title: "",
  category: "",
};

// interface ShowArticlesProps {
//   articles: ArticleData[];
//   setShowModal: () => void;
// }

// const ShowArticles: React.FC<ShowArticlesProps> = (props) => {
//   const { articles } = props;

//   return articles.map((article) => (
//     <tr key={article.id}>
//       <td>{article.title}</td>
//       <td className="flex gap-4">
//         <Button
//           bgColor="bg-yellow-400"
//           textColor="text-black"
//           type="button"
//           onClick={() => setShowModal(!showModal)}
//         >
//           Edit
//         </Button>
//         <Button bgColor="bg-red-400" textColor="text-white" type="button">
//           Delete
//         </Button>
//       </td>
//     </tr>
//   ));
// };

const ArticlesPageManage: React.FC = () => {
  const username = useAppSelector((state) => state.user.username);
  const categories = useAppSelector((state) => state.categories);
  const [articles, setArticles] = useState<ArticleData[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [article, setArticle] = useState<ArticleData>(initialArticle);

  useEffect(() => {
    getArticles();
  }, [username]);

  const getArticles = async () => {
    try {
      const response = await axios.get<ArticleData[]>(
        BASE_URL + `/articles?author=${username}`
      );
      setArticles(response.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error.response?.data);
      } else if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  const onHandleEdit = (id: string) => {
    const articleSelected = articles.filter((article) => article.id === id);
    setArticle(articleSelected[0]);
    setShowModal(!showModal);
  };

  const onHandleUpdate = async () => {
    try {
      if (Object.values(article).includes("")) {
        throw Error("All field must be required!");
      }
      const response = await axios.put<ArticleData>(
        BASE_URL + `/articles/${article.id}`,
        article
      );

      const newArticles = articles.map((article) =>
        article.id === response.data.id ? response.data : article
      );
      setArticles(newArticles);
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data);
      } else if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      setArticle(initialArticle);
      setShowModal(false);
    }
  };

  const onHandleDelete = async (id: string) => {
    try {
      await axios.delete(BASE_URL + `/articles/${id}`);

      const newArticles = articles.filter((article) => article.id !== id);
      setArticles(newArticles);
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data);
      } else if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const printData = () => {
    return articles.map((article) => (
      <tr key={article.id}>
        <td>{article.title}</td>
        <td className="flex gap-4">
          <Button
            bgColor="bg-yellow-400"
            textColor="text-black"
            type="button"
            onClick={() => onHandleEdit(article.id)}
          >
            Edit
          </Button>
          <Button
            bgColor="bg-red-400"
            textColor="text-white"
            type="button"
            onClick={() => onHandleDelete(article.id)}
          >
            Delete
          </Button>
        </td>
      </tr>
    ));
  };

  return (
    <section>
      <div className="flex items-center justify-center gap-3">
        <h1 className="mb-4 text-2xl font-bold text-nowrap">Manage Articles</h1>
        <hr className="w-full border" />
      </div>
      <div className="mt-6">
        <table className="w-full">
          <thead className="border-b-2 font-bold">
            <tr>
              <td className="pb-2">Title</td>
              <td className="pb-2">Action</td>
            </tr>
          </thead>
          <tbody>
            {printData()}
            {/* {articles.map((article) => (
              <tr key={article.id}>
                <td>{article.title}</td>
                <td className="flex gap-4">
                  <Button
                    bgColor="bg-yellow-400"
                    textColor="text-black"
                    type="button"
                    onClick={() => onHandleEdit(article.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    bgColor="bg-red-400"
                    textColor="text-white"
                    type="button"
                    onClick={() => onHandleDelete(article.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))} */}
            {/* <ShowArticles articles={articles} setShowModal={setShowModal}/> */}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="z-10 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[500px] p-6 bg-gray-300 rounded-md">
          <div className="flex items-center justify-between gap-3 mb-4">
            <h1 className="text-2xl font-bold text-nowrap">
              Create New Article
            </h1>
            <button
              className="flex justify-center items-center h-8 w-8 p-2 rounded-full shadow-md bg-gray-200"
              onClick={() => setShowModal(!showModal)}
            >
              <span>x</span>
            </button>
          </div>
          <form className="space-y-2">
            <div className="w-full">
              <InputForm
                id="title"
                label="Title"
                type="text"
                defaultValue={article.title}
                onChange={(e) =>
                  setArticle({ ...article, title: e.target.value })
                }
              />
            </div>
            <div className="w-full">
              <SelectCategory
                categories={categories}
                id="category"
                label="Category"
                selected={article.category}
                onChange={(e) =>
                  setArticle({ ...article, category: e.target.value })
                }
              />
            </div>
            <div className="w-full">
              <InputForm
                id="imgArticleUrl"
                label="Image Article URL"
                type="text"
                defaultValue={article.imgArticleUrl}
                onChange={(e) =>
                  setArticle({ ...article, imgArticleUrl: e.target.value })
                }
              />
            </div>
            <div className="w-full">
              <TextareaForm
                id="description"
                label="Description"
                rows={3}
                defaultValue={article.description}
                onChange={(e) =>
                  setArticle({ ...article, description: e.target.value })
                }
              />
            </div>
          </form>
          <div className="flex justify-end gap-2">
            <Button
              bgColor="bg-red-400"
              textColor="text-black"
              type="button"
              onClick={() => setShowModal(!showModal)}
            >
              Cancel
            </Button>
            <Button
              bgColor="bg-green-400"
              textColor="text-white"
              type="button"
              onClick={onHandleUpdate}
            >
              Save
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ArticlesPageManage;
