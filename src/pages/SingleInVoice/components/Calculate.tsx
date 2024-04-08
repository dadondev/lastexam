import GrayText from "./GrayText";
import RowTable from "./RowTable";

const Calculate = ({ data }: { data: { items: any[] } }) => {
  return (
    <div className="w-full overflow-hidden rounded-lg">
      <div className="p-6 bg-calc dark:bg-lightBlue md:hidden">
        {data.items.map((e, i) => (
          <div key={i} className="text-black font-bold dark:text-white flex justify-between items-center">
            <article key={i} className="grid gap-2">
              <span className="dark:text-white">{e.name}</span>
              <span className="dark:text-gray text-blue">
                {e.count} x £ {e.price}
              </span>
            </article>

            <span>£ {e.price * e.count} </span>
          </div>
        ))}
      </div>
      <div className="hidden md:block p-8 transition-all bg-calc dark:bg-lightBlue">
        <table className="w-full">
          <thead className="grid mb-8">
            <tr className="grid grid-cols-[45%_1fr_1fr_1fr]">
              <th className="text-left">
                <GrayText>Item Name</GrayText>
              </th>
              <th className="text-right">
                <GrayText>QTY.</GrayText>
              </th>
              <th className="text-right">
                <GrayText>Price</GrayText>
              </th>
              <th className="text-right">
                <GrayText>Total</GrayText>
              </th>
            </tr>
          </thead>
          <tbody className="grid gap-8">
            {data.items.map((e, i) => (
              <RowTable key={i} name={e.name} price={e.price} count={e.count} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="py-[26px] text-white dark:bg-black transition-all px-6 bg-bg flex items-center justify-between">
        <span>Grand Total</span>
        <span className="text-2xl font-bold">
          £ {data.items.reduce((acc, e) => acc + e.price * e.count, 0)}
        </span>
      </div>
    </div>
  );
};

export default Calculate;
