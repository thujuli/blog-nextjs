"use client";
import Button from "@/components/Button";
import InputForm from "@/components/InputForm";
import SelectCategory from "@/components/SelectCategory";
import TextareaForm from "@/components/TextareaForm";
import { useAppSelector } from "@/lib/hooks";
import { BASE_URL } from "@/utils/helper";
import { dateLocal } from "@/utils/parser";
import axios, { AxiosError } from "axios";
import React, { useRef, useState } from "react";

interface IFormData {
  title: string;
  imgArticleUrl: string;
  description: string;
  author: string;
  createdAt: string;
  category: string;
}

const initialFormData: IFormData = {
  author: "",
  createdAt: "",
  description: "",
  imgArticleUrl: "",
  title: "",
  category: "",
};

const ArticlesPageAdd = () => {
  const username = useAppSelector((state) => state.user.username);
  const categories = useAppSelector((state) => state.categories);
  const [formData, setFormData] = useState<IFormData>(initialFormData);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [maxDescLength, setMaxDescLength] = useState(500);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onHandlePublish: React.MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    const data: IFormData = {
      ...formData,
      author: username,
      createdAt: currentDate.toLocaleDateString(),
    };

    try {
      console.log(data);

      if (Object.values(data).includes("")) {
        throw new Error("All field is required!");
      }

      if (textareaRef.current && textareaRef.current.value.length > 500) {
        throw new Error(
          "Check input description, the length of description must be less than or equal " +
            maxDescLength
        );
      }

      await axios.post(BASE_URL + "/articles", data);
      alert("Successfully create a new article!");
      setCurrentDate(new Date());
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data);
      } else if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <section>
      <div className="flex items-center gap-3">
        <h1 className="mb-4 text-2xl font-bold text-nowrap">
          Create New Article
        </h1>
        <hr className="w-full border" />
      </div>
      <form className="flex gap-6">
        <div className="w-8/12 space-y-4">
          <InputForm
            id="title"
            label="Title"
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <div className="flex flex-col">
            <SelectCategory
              categories={categories}
              id="category"
              label="Category"
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            />
            {/* <label htmlFor="category" className="font-europa-regular font-bold">
              Category
            </label>
            <select
              id="category"
              className="w-full px-2 py-1 border-2 rounded"
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              <option>Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.title}>
                  {category.title}
                </option>
              ))}
            </select> */}
            {/* <input
                type={type}
                id={id}
                defaultValue={defaultValue}
                readOnly={readOnly}
                onChange={onChange}
                className="w-full px-2 py-1 border-2 rounded"
              /> */}
          </div>
          <InputForm
            id="imgArticleURL"
            label="Image Article URL"
            type="text"
            onChange={(e) => {
              setFormData({ ...formData, imgArticleUrl: e.target.value });
            }}
          />
          <TextareaForm
            id="description"
            label="Description"
            rows={5}
            ref={textareaRef}
            onChange={(e) => {
              console.log(e.target.value);
              setFormData({ ...formData, description: e.target.value });
            }}
          />
          <p className="text-end text-gray-400 text-sm">
            {!textareaRef.current?.value.length
              ? "0"
              : textareaRef.current?.value.length}
            /{maxDescLength}
          </p>
        </div>
        <div className="w-4/12 space-y-4">
          <InputForm
            id="author"
            label="Author"
            type="text"
            defaultValue={username}
            readOnly
          />
          <InputForm
            id="createdAt"
            label="Created At"
            type="text"
            defaultValue={dateLocal(currentDate.toLocaleDateString())}
          />
          <Button
            bgColor="bg-lime-500"
            textColor="text-white"
            type="button"
            onClick={onHandlePublish}
          >
            Publish
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ArticlesPageAdd;
