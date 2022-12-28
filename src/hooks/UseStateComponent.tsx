import React, { useState } from "react";

function UseStateComponent() {
  const [arr, setArr] = useState<number[]>([]);
  const [name, setName] = useState<string | null>(null);

  const handleAddToArray = () => {
    setArr([...arr, arr.length + 1]);
  };

  const handleSetName = () => {
    setName("Jack");
  };

  return (
    <div>
      <div>
        <button onClick={handleAddToArray}>Add to array</button>
        {JSON.stringify(arr)}
      </div>
      <div>
        <button onClick={handleSetName}>Set Name</button>
        {name}
      </div>
    </div>
  );
}

export default UseStateComponent;
