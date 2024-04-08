import React from "react";

const Label = ({
  children,
  hidden,
  disabled,
}: {
  children: React.ReactNode;
  hidden?: boolean;
  disabled?: boolean;
}) => {
  return (
    <span
      className={
        "dark:text-gray font-medium text-[13px] mb-2 text-blue " +
        (hidden ? "md:hidden " : "") +
        (disabled ? "opacity-75" : "")
      }
    >
      {children}
    </span>
  );
};

export default Label;
