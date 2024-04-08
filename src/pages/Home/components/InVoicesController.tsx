import InVoiceContent from "./InVoiceContent";
import FilterInVoices from "./FilterInVoices";

const InVoicesController = ({
  inVoices,
  setFilter,
  filter,
}: {
  inVoices: number;
  setFilter: (e: any) => void;
  filter: string;
}) => {
  return (
    <div className="min-w-full md:max-w-[672px] flex justify-between items-center">
      <InVoiceContent inVoices={inVoices} />
      <FilterInVoices filter={filter} setFilter={setFilter} />
    </div>
  );
};

export default InVoicesController;
