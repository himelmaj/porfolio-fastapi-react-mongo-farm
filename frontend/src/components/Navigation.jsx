import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="flex flex-wrap place-content-between py-3 my-5 mx-3">
      <NavLink to={"/home"} className="text-center mx-auto sm:text-left sm:mx-0">
        <h1 className="text-2xl font-bold title-font">Himel Majumder</h1>
      </NavLink>
      <div className="mx-0 flex flex-wrap justify-center items-center gap-5">
        <NavLink to="/selectwork" className="font-bold">
          Selected Work
        </NavLink>
        <NavLink to="/questionform" className="font-bold">
          Resume
        </NavLink>
        <NavLink to="/questionform" className="font-bold">
          Get in Touch
        </NavLink>
      </div>
    </nav>
  );
}
