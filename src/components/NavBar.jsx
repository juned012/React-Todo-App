import { GoTasklist } from "react-icons/go";
import { MdTaskAlt } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";

const NavBar = () => {
  return (
    <div className="pt-2 pb-8">
      <div className="flex gap-5">
        <div className="relative cursor-pointer text-gray-800 font-semibold group">
          <p className="flex items-center gap-1">
            <GoTasklist />
            <span>All Tasks</span>
          </p>
          <span
            className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-green-600 transform 
    scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          ></span>
        </div>

        <div className="relative cursor-pointer text-gray-800 group">
          <p className="flex items-center gap-1">
            <IoIosTimer />
            <span>Recently Added</span>
          </p>
          <span
            className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-green-600 transform 
          scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          ></span>
        </div>
        <div className="relative cursor-pointer text-gray-800 group">
          <p className="flex items-center gap-1">
            <MdTaskAlt />
            <span>Completed</span>
          </p>

          <span
            className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-green-600 transform 
          scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          ></span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
