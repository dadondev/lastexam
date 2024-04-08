const InVoiceTypes = ({
  type,
}: {
  type: "pending" | "paid" | "draft" | string;
}) => {
  return (
    <article
      className={
        "py-[14px] rounded-md flex items-center font-bold capitalize justify-center gap-1 w-[104px] " +
        (type === "pending"
          ? "bg-pending "
          : type === "paid"
          ? "bg-paid "
          : "bg-draft dark:bg-[rgba(223,227,250,1)]") +
        (type === "pending"
          ? "text-[rgba(255,143,0,1)]"
          : type === "paid"
          ? "text-[rgba(51,214,159,1)]"
          : "text-[rgba(55,59,83,1)] dark:text-white")
      }
    >
      <svg
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="4" cy="4" r="4" fill="currentColor" />
      </svg>
      {type}
    </article>
  );
};

export default InVoiceTypes;
