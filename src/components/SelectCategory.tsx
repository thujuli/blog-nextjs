import React from "react";

interface Category {
  id: string;
  title: string;
}

interface Props {
  label: string;
  id: string;
  categories: Category[];
  selected?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectCategory: React.FC<Props> = (props) => {
  const { id, label, onChange, categories, selected } = props;

  return (
    <>
      <label htmlFor={id} className="font-europa-regular font-bold">
        {label}
      </label>
      <select
        id="category"
        className="w-full px-2 py-1 border-2 rounded"
        onChange={onChange}
      >
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option
            key={category.id}
            value={category.title}
            selected={category.title === selected}
          >
            {category.title}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectCategory;
