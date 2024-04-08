const LoginInput = ({
  form,
  name,
  type,
  className,
  rule,
}: {
  form: (a: string, b: object) => any;
  name: string;
  type?: string;
  className?: string;
  rule?: string;
}) => {
  return (
    <input
      type={type ? type : "text"}
      {...form(name, { required: true, minLength: 8 })}
      className={
        "border transition-all bg-transparent border-lightGray dark:border-lightBlue rounded-lg py-[18px] px-5 block focus:border-purpleLight outline-none dark:bg-darkBlue dark:text-white  w-full pr-10" +
        className
      }
    />
  );
};

export default LoginInput;
