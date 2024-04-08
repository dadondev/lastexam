import React from "react";

const SectionName = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="font-bold text-purple mb-6 block capitalize">
      {children}
    </span>
  );
};

export default SectionName;
