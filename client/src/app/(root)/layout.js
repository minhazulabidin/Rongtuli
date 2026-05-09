import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      <hr />
      {children}
      <Footer/>
    </div>
  );
};

export default layout;
