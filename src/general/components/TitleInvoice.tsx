const TitleInvoice = ({ id, text }: { id?: string; text?: string }) => {
  return (
    <h1 className="my-5 text-black capitalize  font-bold text-2xl dark:text-white">
      {id ? "Edit " : text}
      {id && (
        <span className="font-bold transition-all text-gray dark:text-blue">
          #
        </span>
      )}
      <span className="uppercase">{id}</span>
    </h1>
  );
};

export default TitleInvoice;
