import { MdClose } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";

const TodoEditor = ({ setIsOpenEditor }) => {
  return (
    <div className="bg-black fixed z-50 flex justify-center items-center bg-opacity-50 inset-0">
      <div className="w-[600px] h-[500px] p-5 bg-white relative rounded-md">
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
        </div>
      </div>
    </div>
  );
};

export default TodoEditor;
