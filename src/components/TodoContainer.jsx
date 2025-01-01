import Header from "./Header";
import NavBar from "./NavBar";
import CardListing from "./CardListing";

const TodoContainer = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-2">
        <Header />
        <NavBar />
        <CardListing />
      </div>
    </div>
  );
};

export default TodoContainer;
