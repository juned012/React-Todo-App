import { MdClose } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoProvider";

const TodoEditor = ({ setIsOpenEditor }) => {
  const [todos, setTodos] = useState({
    title: "",
    description: "",
  });

  const { addToTask } = useContext(TodoContext);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setTodos({ ...todos, [id]: value });
  };

  const handleCreateTask = () => {
    addToTask(todos);
    setIsOpenEditor(false);
  };

  return (
    <div className="bg-black fixed z-50 flex justify-center items-center bg-opacity-50 inset-0">
      <div className="w-80 md:w-[600px] p-4 md:py-5 md:px-6 bg-white relative rounded-md">
        <button
          className="absolute right-2 top-2 bg-gray-200 p-1 rounded-sm border border-gray-300"
          onClick={() => setIsOpenEditor(false)}
        >
          <MdClose />
        </button>

        <div>
          <h1 className="flex items-center justify-center gap-1 text-xl font-semibold">
            <IoCreateOutline className="text-2xl" /> Create Your Task
          </h1>

          <div className="mt-4">
            <label htmlFor="title" className="text-base text-gray-700">
              Your Title:
            </label>
            <input
              value={todos.title}
              onChange={handleInputChange}
              type="text"
              id="title"
              placeholder="Enter title"
              className="p-2 rounded-sm md:p-5 w-full bg-gray-100 border outline-none mt-2"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="description" className="text-base text-gray-700">
              Your Description:
            </label>
            <input
              value={todos.description}
              onChange={handleInputChange}
              type="text"
              id="description"
              placeholder="Enter description"
              className="p-2 rounded-sm md:p-5 w-full bg-gray-100 border outline-none mt-2"
            />
          </div>
          <div className="mt-8 flex justify-between items-center">
            <button className="p-2 md:p-3 bg-red-600 hover:bg-red-700 transform transition-colors duration-100 text-white rounded-md">
              Save as Draft
            </button>
            <button
              onClick={handleCreateTask}
              className="p-2 md:p-3 bg-green-600 hover:bg-green-700 transform transition-colors duration-100 text-white rounded-md"
            >
              Create Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoEditor;
