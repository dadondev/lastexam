const Button = ({
  type,
  text,
  onClick,
  className,
  isSubmit,
}: {
  type: "edit" | "delete" | "mark";
  onClick?: (a?: any) => void;
  text?: string;
  className?: string;
  isSubmit?: boolean;
}) => {
  return (
    <button
      type={isSubmit ? "submit" : "button"}
      onClick={onClick}
      className={
        className +
        " py-3 px-6 lg:hover:opacity-70 text-[13px] md:text-base font-bold transition-all h-auto dark:lg:hover:bg-hover rounded-3xl dark:text-white text-" +
        (type === "edit" ? "blue " : "white ") +
        (type === "edit"
          ? "bg-calc dark:bg-lightBlue capitalize dark:lg:hover:bg-white dark:lg:hover:opacity-100 dark:lg:hover:text-blue"
          : type === "delete"
          ? "bg-orange capitalize"
          : "bg-purple lg:dark:hover:bg-purpleLight")
      }
    >
      {type !== "mark" ? type : text ? text : "Mark as Paid"}
    </button>
  );
};

export default Button;
