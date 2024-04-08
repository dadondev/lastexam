import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <span
      className="flex gap-3 items-center cursor-pointer md:mb-12 mb-8 lg:hover:text-gray dark:text-white text-black transition-all"
      onClick={() => navigate("/")}
    >
      <img alt="icon" src="/arrow-icon.svg" className="rotate-180 w-2" />
      <span className="font-bold">Go back</span>
    </span>
  );
};

export default Header;
