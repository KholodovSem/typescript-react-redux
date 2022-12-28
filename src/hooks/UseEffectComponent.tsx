import React, { useState, useEffect } from "react";

function UseEffectComponent() {
  const [value, setValue] = useState<number>(1);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setValue((prevState: number) => prevState + 1);
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return <div>{value}</div>;
}

export default UseEffectComponent;
