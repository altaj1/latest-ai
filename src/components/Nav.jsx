import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg px-4 sm:px-8 fixed z-10">
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl">Latest AI</a>
      </div>
      <div className="flex-none gap-2">
        <ul className="menu hidden sm:flex menu-horizontal px-1 gap-5 text-lg">
            <NavLink 
            className={({isActive}) => 
            isActive ? "text-purple-300 font-bold" : 'font-bold'
        }
            to="/">
                Home
            </NavLink>
            <NavLink 
            className={({isActive}) => 
            isActive ? "text-purple-300 font-bold" : 'font-bold'
        }
            to="/blogs">
                Boges
            </NavLink>
            <NavLink 
            className={({isActive}) => 
            isActive ? "text-purple-300 font-bold" : 'font-bold'
        }
            to="/bookmark">
                BookMarks
            </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
