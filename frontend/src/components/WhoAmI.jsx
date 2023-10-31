import { Img } from "react-image";

export function WhoAmI() {
  // const {me} =  useImage({
  //     srcList: 'https://pbs.twimg.com/media/DwgWEWmXQAEqSNh.png',

  // })
  return (
    <section className="grid grid-cols-2 gap-4 mt-60 mx-auto">
      <Img
        src="https://pbs.twimg.com/media/DwgWEWmXQAEqSNh.png"
        className="w-60 mx-auto"
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
