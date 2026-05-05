import Header from "@/components/layout/Header/Header";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      <hr />
      {children}
    </div>
  );
};

export default layout;
