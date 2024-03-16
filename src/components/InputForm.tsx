import React from "react";

interface InputFormProps {
  type: string;
  label: string;
  id: string;
  defaultValue?: string;
  readOnly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<InputFormProps> = (props) => {
  const { defaultValue, label, type, id, onChange, readOnly } = props;
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={id} className="font-europa-regular font-bold">
          {label}
        </label>
        <input
          type={type}
          id={id}
          defaultValue={defaultValue}
          readOnly={readOnly}
          onChange={onChange}
          className="w-full px-2 py-1 border-2 rounded"
        />
      </div>
    </>
  );
};

export default InputForm;
