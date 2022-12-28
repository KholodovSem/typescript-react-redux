import React, { useRef } from "react";

/* 
    * useRef типизация
    Точно также как и с useState, после имени хука в угловых скобках указываем 
    ожидаемый тип.
*/

const UncontrollInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return <input type={"text"} ref={inputRef} />;
};

export default UncontrollInput;
