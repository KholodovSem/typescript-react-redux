import React, { useState, FC } from "react";

const EventsExample: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inDrag, setInDrag] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Jopa");
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("Drag!");
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setInDrag(false);
  };

  const handleLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setInDrag(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setInDrag(true);
  };

  return (
    <div>
      <input type={"text"} value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Click!</button>
      <div
        draggable
        onDrag={handleDrag}
        style={{ width: 200, height: 200, background: "red" }}
      />
      <div
        onDrop={handleDrop}
        onDragLeave={handleLeave}
        onDragOver={handleDragOver}
        style={{
          width: 200,
          height: 200,
          background: inDrag ? "blue" : "red",
          marginTop: 15,
        }}
      />
    </div>
  );
};

export default EventsExample;
