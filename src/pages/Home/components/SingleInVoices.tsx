import { useNavigate } from "react-router-dom";
import InVoiceTypes from "./InVoiceTypes";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const SingleInVoices = ({
  target,
  id,
  author,
  paymentTerms,
  price,
  date,
  type,
}: {
  target: string;
  id: string;
  author: string;
  date: string;
  paymentTerms: string;
  price: string;
  type: "paid" | "draft" | "pending" | string;
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/" + target);
  };
  const getDueDate = (date: string, dueDate: string) => {
    let month = date.slice(5, 7);
    const dateDay = date.slice(8);
    const dueDay = isNaN(+dueDate.slice(0, 2))
      ? +dueDate.slice(0, 1)
      : +dueDate.slice(0, 2);

    if (month.at(0) === "0") {
      month = month.at(-1)!;
    }
    let expression = dueDay + +dateDay;

    if (+month !== 12) {
      if (expression <= 30) {
        return `${+dateDay + +dueDay} ${months[+month - 1]}`;
      } else {
        return `${expression - 30} ${months[+month]}`;
      }
    } else {
      if (+dateDay + +dueDate <= 30) {
        return `${expression} ${months[+month - 1]}`;
      } else {
        return `${expression - 31} ${months[0]}`;
      }
    }
  };
  return (
    <div
      onClick={handleClick}
      className="w-full active:scale-90 max-w-[327px] z-10 animate-fade-in lg:hover:scale-95 lg:cursor-pointer md:gap-0 md:flex md:justify-between md:items-center grid grid-cols-[auto_auto] dark:bg-darkBlue items-center md:grid-rows-1 rounded-xl gap-6 bg-white p-6 shadow-[rgba(72,84,159,0.1)] md:max-w-[750px] grid-rows-2  justify-between transition-all"
    >
      <span className="font-bold transition-all dark:text-blue">
        #<span className="dark:text-white ">{id}</span>
      </span>
      <span className="text-special font-bold dark:text-white">{author}</span>
      <article className="grid  md:flex md:items-center md:gap-16 md:justify-between gap-2 transition-all dark:text-white">
        <span className="dark:text-lightGray font-medium text-gray text-sm">
          Due {getDueDate(date, paymentTerms)} 2024
        </span>
        <span className="font-bold">£ {price}</span>
      </article>
      <InVoiceTypes type={type} />
      <img
        alt="image"
        onClick={handleClick}
        src="/arrow-icon.svg"
        className="hidden md:block md:w-5 md:h-5 lg:hover:translate-x-2 lg:cursor-pointer lg:transition-all"
      />
    </div>
  );
};

export default SingleInVoices;
