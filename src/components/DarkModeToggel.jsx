import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const DarkModeToggel = () => {
  return (
    <div className="border border-gray-100 bg-white shadow-md rounded-full p-2 cursor-pointer">
      {/* <MdOutlineDarkMode className="text-2xl text-gray-800" /> */}
      <MdOutlineLightMode className="text-2xl text-gray-800" />
    </div>
  );
};

export default DarkModeToggel;
