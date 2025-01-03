import { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";

const Card = () => {
  const { todoData } = useContext(TodoContext);

  return (
    <>
      {todoData.length === 0 ? (
        <h2>No Tasks!</h2>
      ) : (
        <>
          {todoData.map((todo, index) => (
            <div
              key={index}
              className="shadow-md border border-gray-100 bg-white p-4 rounded-xl cursor-pointer"
            >
              <div>
                <h1 className="text-xl font-semibold pb-2">{todo.title}</h1>
                <p className="text-sm">{todo.description}</p>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Card;
