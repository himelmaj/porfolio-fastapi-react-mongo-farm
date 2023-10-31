import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="flex justify-between py-3 my-5 mx-3">
      <NavLink to={"/home"}>
        <h1 className="text-2xl font-bold title-font">Himel Majumder</h1>
      </NavLink>
      <div className="mx-0">
        <NavLink
          to="/select work"
          className={
            "px-1 py-2 mx-5 inline-block font-bold text-center"
          }
        >
          {" "}
          select work{" "}
        </NavLink>

        <NavLink
          to="/questionform"
          className={
            "px-1 py-2 mx-5 inline-block font-bold text-center"
          }
        >
          resume
        </NavLink>
        <NavLink
          to="/questionform"
          className={
            "px-1 py-2 mx-5  inline-block font-bold text-center"
          }
        >
          get in touch
        </NavLink>
      </div>
    </nav>
  );
}
