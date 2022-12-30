import React, { Dispatch, SetStateAction } from "react";

interface NewTodoFormProps {
  value: string;
  updateText: Dispatch<SetStateAction<string>>;
  handleAction: () => void;
}

const NewTodoForm = ({ value, updateText, handleAction }: NewTodoFormProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    updateText(value);
  };

  return (
    <label>
      <input placeholder={"new todo"} value={value} onChange={handleChange} />
      <button onClick={handleAction}>Add todo</button>
    </label>
  );
};

export default NewTodoForm;
