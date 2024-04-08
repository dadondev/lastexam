import React from "react";

const ColTable = ({
  type,
  children,
}: {
  children: React.ReactNode;
  type?: "left" | "right";
}) => {
  return (
    <th className={" dark:text-white capitalize text-black text-" + type}>
      {children}
    </th>
  );
};

export default ColTable;
