import React from "react";
import { Outlet, OutletProps } from "react-router-dom";

interface LayoutProps extends OutletProps {}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div
      style={{
        border: "2px dashed black",
        padding: 2,
        margin: 5,
        width: 500,
        height: 500,
      }}
    >
      <Outlet />
    </div>
  );
};

export default Layout;
