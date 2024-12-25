import Card from "./Card";
import Header from "./Header";

const TodoContainer = () => {
  return (
    <div className="max-w-screen-xl m-auto">
      <div>
        <Header />
        <Card />
      </div>
    </div>
  );
};

export default TodoContainer;
