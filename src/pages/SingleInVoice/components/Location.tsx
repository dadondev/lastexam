const Location = ({
  data,
}: {
  data: {
    id: string;
    author: string;
    city: string;
    address: string;
    code: string;
    country: string;
  };
}) => {
  return (
    <div className="flex flex-col gap-7 md:flex-row justify-between items-start mb-8 md:mb-5">
      <article className="grid">
        <span className="font-bold transition-all text-gray dark:text-blue">
          #<span className="dark:text-white text-black">{data.id}</span>
        </span>
        <span className="text-special font-medium dark:text-lightGray capitalize">
          {data.author.slice(0, data.author.lastIndexOf("@"))}
        </span>
      </article>
      <article className="grid">
        <span className="text-special font-medium dark:text-lightGray capitalize">
          {data.address}
        </span>
        <span className="text-special font-medium dark:text-lightGray capitalize">
          {data.city}
        </span>
        <span className="text-special font-medium dark:text-lightGray uppercase">
          {data.code}
        </span>
        <span className="text-special font-medium dark:text-lightGray capitalize">
          {data.country}
        </span>
      </article>
    </div>
  );
};

export default Location;
