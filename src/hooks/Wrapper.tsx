import React, { PropsWithChildren } from "react";

interface WrapperProps {
  title: string;
}

function Wrapper({ title, children }: PropsWithChildren<WrapperProps>) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
      <hr />
    </div>
  );
}

export default Wrapper;
