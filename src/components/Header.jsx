import TodoIcon from "../assets/todoIcon.png";
import DarkModeToggel from "./DarkModeToggel";
const Header = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <img src={TodoIcon} alt="todo Icon" className="w-12" />
          <h2 className="text-2xl font-bold text-gray-800">Task Manager</h2>
        </div>
        <div>
          <DarkModeToggel />
        </div>
      </div>
    </div>
  );
};

export default Header;
