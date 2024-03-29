import React, { forwardRef } from "react";

interface TextareaFormProps {
  id: string;
  label: string;
  rows: number;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareaForm: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaFormProps
> = (props, ref) => {
  const { id, label, rows, onChange, defaultValue } = props;

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="font-europa-regular font-bold">
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        onChange={onChange}
        ref={ref}
        defaultValue={defaultValue}
        className="w-full p-2 border-2 rounded"
      ></textarea>
    </div>
  );
};

export default forwardRef(TextareaForm);
