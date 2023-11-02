import { Img } from "react-image";
import { Link } from "react-router-dom";
{/* <NavLink
to="/questionform"
className={"px-1 py-2 mx-5 inline-block font-bold text-center"}
>
resume
</NavLink> */}
export function WorkCard({ img, title, description, url , tech1, tech2, tech3}) {
  return (
    <article className="max-w-md mx-auto">
      <Link to={url} className="block p-6 rounded-lg shadow">
        <Img src={img} className="object-cover w-full max-h-80 rounded-t-lg" />

        <div className="border-solid border-2 m-0 min-h-fit">
          <h5 className="mb-2 text-2xl font-bold text-center mt-3">{title}</h5>
          <p className="font-normal text-gray-400 text-justify px-3 py-3">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 py-3 place-items-center  border-x-2 border-b-2 rounded-b-lg">
          <Img src={tech1} className="tech-size"/>
          <Img src={tech2} className="tech-size"/>
          <Img src={tech3} className="tech-size"/>
        </div>
      </Link>
    </article>
  );
}
