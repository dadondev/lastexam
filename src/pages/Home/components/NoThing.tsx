const NoThing = () => {
  return (
    <div className="w-auto flex flex-col items-center mt-20">
      <img src="/nothing.svg" alt="nothing" className="mb-10" />
      <h1 className="font-bold dark:text-white text-black text-2xl mb-6">
        There is nothing here
      </h1>
      <p className="text-center font-medium w-[206px] text-[13px] dark:text-lightGray text-gray">
        Create an invoice by clicking the <span className="font-bold">New</span>{" "}
        button and get started
      </p>
    </div>
  );
};

export default NoThing;
