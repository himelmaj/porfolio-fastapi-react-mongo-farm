import { Img } from "react-image";

export function WhoAmI() {
  return (
    <section className="grid lg:grid-cols-2 md:grid-cols-1 place-content-around gap-4 mt-60 mx-10">
      <Img
        src="https://media2.giphy.com/media/3ov9jWKJPnNrEe9iN2/giphy.gif?cid=ecf05e47hu0ay6e366v66o59wh0a4njqw6mmzx80utw1h299&ep=v1_gifs_related&rid=giphy.gif&ct=g"
        className="w-80 mx-auto rounded-lg my-10"
      />
      <div>
        <h2 className="text-6xl title-font">Who is Himel?</h2>
        <h3 className="text-2xl my-5">
          Passionate web developer with a focus on backend, proficient in
          Python, React, Django, and FastAPI. Dedicated to continuous learning
          and constantly improving my skills.
        </h3>
        <button type="button" className=" bg-blue-200 px-3 w-40 py-2 rounded-md inline-block hover:bg-blue-400 hover:cursor-pointer text-zinc-950 font-bold text-center">get in touch</button>
      </div>
    </section>
  );
}
