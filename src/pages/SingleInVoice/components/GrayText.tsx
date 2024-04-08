import React from "react";

const GrayText = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="text-special font-medium dark:text-lightGray capitalize">
      {children}
    </span>
  );
};

export default GrayText;
