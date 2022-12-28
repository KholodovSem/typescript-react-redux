import React, { useRef } from "react";

function UseRefComponent() {
  const ref = useRef<null | HTMLInputElement>(null);

  return (
    <div>
      <input type={"text"} ref={ref} />
    </div>
  );
}

export default UseRefComponent;
