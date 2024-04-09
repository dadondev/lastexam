import { useState } from "react";
import SingleCheckbox from "./SingleCheckbox";

const Filter = ({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: (e: any) => void;
}) => {
  const [show, setShow] = useState(false);
  return (
    <article className="flex flex-col items-center ">
      <p
        onClick={() => setShow(!show)}
        className="font-bold text-black dark:text-white transition-all text-sm flex items-center gap-3  cursor-pointer"
      >
        <span className="transition-all">
          Filter
          <span className="hidden md:inline"> by status</span>
        </span>

        <img
          src="/filter-arrow.svg"
          alt="arrow"
          className={"transition-all " + (show ? "rotate-180" : "")}
        />
      </p>
      <p></p>
      <ul
        className={
          "max-w-[192px] w-full transition-all z-20 bg-white rounded-[6px] p-6 absolute shadow-[0_35px_60px_-15px_rgba(72,84,159,0.25)] opacity-0 dark:shadow-[0_35px_60px_-15px_rgba(0, 0, 0, 0.25)] translate-y-[50px] dark:bg-lightBlue transition-all flex flex-col gap-2 " +
          (show ? "scale-100 opacity-100" : "scale-0 opacity-100")
        }
      >
        <SingleCheckbox text="Draft" checked={filter} setChecked={setFilter} />
        <SingleCheckbox
          text="Pending"
          checked={filter}
          setChecked={setFilter}
        />
        <SingleCheckbox text="Paid" checked={filter} setChecked={setFilter} />
      </ul>
    </article>
  );
};

export default Filter;
