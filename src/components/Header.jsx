import { useState } from "react";
import TodoIcon from "../assets/todoIcon.png";
import DarkModeToggel from "./DarkModeToggel";
import { IoMdAdd } from "react-icons/io";
import TodoEditor from "./TodoEditor";

const Header = () => {
  const [isOpenEditor, setIsOpenEditor] = useState(false);

  return (
    <div className="py-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <img src={TodoIcon} alt="todo Icon" className="w-12" />
          <h2 className="text-2xl font-bold text-gray-800">Task Manager</h2>
        </div>
        <div>
          <DarkModeToggel />
        </div>
      </div>
      {isOpenEditor ? (
        <TodoEditor setIsOpenEditor={setIsOpenEditor} />
      ) : (
        <button
          onClick={() => setIsOpenEditor(true)}
          className="flex items-center gap-1 mt-8 bg-green-800 py-2 px-5 rounded-xl cursor-pointer text-white"
        >
          <IoMdAdd className="text-2xl" /> Create Task
        </button>
      )}
    </div>
  );
};

export default Header;
