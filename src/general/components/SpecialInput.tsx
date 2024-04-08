const SpecialInput = ({
  type,
  name,
  array,
  id,
  setData,
}: {
  type: string;
  name: string;
  array: any[];
  id: number;
  setData: (a: any) => void;
}) => {
  const currentEl = { ...array[id] };
  const handleChange = (e: any) => {
    const newObj = array[id];
    if (type === "number") {
      newObj[name] = Math.abs(e.target.value);
      setData([
        ...array.map((e, i) => {
          if (i !== id) {
            return e;
          } else {
            return newObj;
          }
        }),
      ]);
    } else {
      newObj[name] = e.target.value;
      setData([
        ...array.map((e, i) => {
          if (i !== id) {
            return e;
          } else {
            return newObj;
          }
        }),
      ]);
    }

    // const newObj = array.find((_, i) => i === id);
    // newObj[name] = e.target.value;
    // setData([...array.filter((_, i) => i !== id), newObj]);
  };

  return (
    <input
      type={type}
      min={type === "number" ? "0" : ""}
      required
      value={currentEl[name]}
      onChange={handleChange}
      className="border bg-transparent border-lightGray dark:border-lightBlue rounded-lg py-[18px] px-5 block focus:border-purpleLight outline-none dark:bg-darkBlue dark:text-white  w-full"
    />
  );
};

export default SpecialInput;
