import { useState } from "react";

const SingleCheckbox = ({
  text,
  checked,
  setChecked,
}: {
  text: string;
  checked: string;
  setChecked: (a: string) => void;
}) => {
  return (
    <li
      className="flex group cursor-pointer gap-3 items-center text-sm font-bold text-left dark:text-white text-black"
      onClick={() => {
        if (text === checked) {
          setChecked("all");
        } else {
          setChecked(text);
        }
      }}
    >
      <div className="h-6 w-6 border-[2px] group-hover:bg-purple rounded-sm border-[transparent] group-hover:border-purple">
        <p
          className={
            "w-full h-full rounded-sm transition-all flex items-center justify-center " +
            (checked === text ? "bg-purple " : "bg-lightGray dark:bg-darkBlue")
          }
        >
          {checked === text && (
            <img src="/check.svg" alt="check" className="w-4" />
          )}
        </p>
      </div>
      <span>{text}</span>
    </li>
  );
};

export default SingleCheckbox;
