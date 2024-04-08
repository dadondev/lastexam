const CancelBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="py-[18px] font-bold lg:hover:opacity-60 transition-all text-sm px-[26px] rounded-3xl bg-calc dark:bg-lightBlue text-blue dark:text-calc"
      onClick={onClick}
    >
      Cancel
    </button>
  );
};

export default CancelBtn;
