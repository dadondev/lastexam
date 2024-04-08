import React from "react";

const Title = ({ children }: { children?: React.ReactNode }) => {
  return (
    <h1 className="text-2xl transition-all text-black md:text-4xl dark:text-white font-bold">
      {children}
    </h1>
  );
};

export default Title;
