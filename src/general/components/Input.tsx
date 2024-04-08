
const Input = ({
  form,
  name,
  type,
  id,
}: {
  form: (a: string, b: object) => any;
  name: string;
  type?: string;
  id?: string;
}) => {
  return (
    <input
      id={id}
      type={type ? type : "text"}
      {...form(name, { required: true })}
      className={
        "border transition-all bg-transparent border-lightGray dark:border-lightBlue rounded-lg py-[18px] px-5 block focus:border-purpleLight outline-none dark:bg-darkBlue dark:text-white  w-full"
      }
    />
  );
};

export default Input;
