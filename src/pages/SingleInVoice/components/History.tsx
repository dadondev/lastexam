import GrayText from "./GrayText";

let styles = `
dark:text-white
text-black
font-bold
`;
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

export const History = ({
  data,
}: {
  data: {
    invoiceDate: string;
    paymentTerms: string;
    clientName: string;
    clientAddress: string;
    email: string;
    clientCity: string;
    clientCode: string;
    clientCountry: string;
  };
}) => {
  const getDate = (date: string) => {
    const year = date.slice(0, 4);
    let month = date.slice(5, 7);
    let day = date.slice(8);
    if (day.at(0) === "0") {
      day = day.at(-1)!;
    }
    if (month.at(0) === "0") {
      month = month.at(-1)!;
    }

    let newDate = day;
    if (months[+month - 1]) {
      newDate = newDate + " " + months[+month - 1] + " " + year;
    }

    return newDate;
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
    <div className="flex flex-wrap mb-9 md:mb-[48px] lg:mb-[44px] justify-between max-w-[524px] items-start gap-x-[61px] md:gap-[21px] gap-y-8 ">
      <article className="flex flex-col gap-8 items-start">
        <div className="grid gap-3">
          <GrayText>Invoice Date</GrayText>
          <span className={styles}>{getDate(data.invoiceDate)}</span>
        </div>
        <div className="grid gap-3">
          <GrayText>Payment Due</GrayText>
          <span className={styles + " capitalize"}>
            {getDueDate(data.invoiceDate, data.paymentTerms)}{" "}
            {new Date().getFullYear()}
          </span>
        </div>
      </article>
      <article className="grid">
        <GrayText>Bill To</GrayText>
        <span className={styles + " mt-[10px] mb-1 capitalize"}>
          {data.clientName}
        </span>
        <GrayText>{data.clientAddress}</GrayText>
        <GrayText>{data.clientCity}</GrayText>
        <GrayText>{data.clientCode}</GrayText>
        <GrayText>{data.clientCountry}</GrayText>
      </article>
      <article className="grid">
        <GrayText>Send to</GrayText>
        <span className={styles + " mt-2"}>{data.email}</span>
      </article>
    </div>
  );
};
