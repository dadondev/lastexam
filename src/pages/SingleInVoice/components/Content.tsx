import Calculate from "./Calculate";
import { History } from "./History";
import Location from "./Location";

const Content = ({ data }: { data: any | object }) => {
  return (
    <div className="p-6 bg-white md:p-8 dark:bg-darkBlue text-base rounded-lg transition-all w-full mx-auto">
      <Location data={data} />
      <History data={data} />
      <Calculate data={data} />
    </div>
  );
};

export default Content;
