import React from "react";

const Container = ({ children, className }) => {
  return <div className={`${className} max-w-350 mx-auto px-3 md:px-0`}>{children}</div>;
};

export default Container;
