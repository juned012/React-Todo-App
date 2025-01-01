const NavBar = () => {
  return (
    <div className="pt-2 pb-8">
      <div className="flex gap-5">
        <div className="relative cursor-pointer text-gray-800 font-semibold group">
          <span>All Tasks</span>
          <span
            className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-green-600 transform 
    scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          ></span>
        </div>

        <div className="relative cursor-pointer text-gray-800 group">
          <span>Recently Added</span>
          <span
            className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-green-600 transform 
          scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          ></span>
        </div>
        <div className="relative cursor-pointer text-gray-800 group">
          <span>Completed</span>
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
