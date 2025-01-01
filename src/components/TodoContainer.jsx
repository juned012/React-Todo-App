import Header from "./Header";
import NavBar from "./NavBar";
import CardListing from "./CardListing";

const TodoContainer = () => {
  return (
    <div className="max-w-screen-xl m-auto">
      <div>
        <Header />
        <NavBar />
        <CardListing />
      </div>
    </div>
  );
};

export default TodoContainer;
