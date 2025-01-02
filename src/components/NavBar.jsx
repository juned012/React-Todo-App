import { GoTasklist } from "react-icons/go";
import { MdTaskAlt } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const NavBar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const linkStyles = (path) => {
    return `relative cursor-pointer text-gray-800 group ${
      activeLink === path ? "font-semibold" : ""
    }`;
  };

  const underlineStyles = (path) => {
    return `absolute bottom-[-4px] left-0 w-full h-0.5 bg-green-600 ${
      location.pathname === path ? "scale-x-100" : "scale-x-0 "
    } transform 
          group-hover:scale-x-100 transition-transform duration-300`;
  };

  return (
    <div className="pt-2 pb-8">
      <div className="flex md:gap-5 gap-3">
        <Link to={"/"} onClick={() => setActiveLink("/")}>
          <div className={linkStyles("/")}>
            <p className="flex items-center gap-1">
              <GoTasklist />
              <span>All Tasks</span>
            </p>
            <span className={underlineStyles("/")}></span>
          </div>
        </Link>

        <Link to={"/recent"} onClick={() => setActiveLink("/recent")}>
          <div className={linkStyles("/recent")}>
            <p className="flex items-center gap-1">
              <IoIosTimer />
              <span>Recently Added</span>
            </p>
            <span className={underlineStyles("/recent")}></span>
          </div>
        </Link>
        <Link to={"/completed"}>
          <div className="relative cursor-pointer text-gray-800 group">
            <p className="flex items-center gap-1">
              <MdTaskAlt />
              <span>Completed</span>
            </p>

            <span className={underlineStyles("/completed")}></span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
