export function Contact() {
  return (
    <div className="my-40 grid lg:grid-cols-2 lg:mx-40" id="contact">
      <div className="px-10 py-10">
        <h3 className="title-font text-6xl mb-5">Get in Touch</h3>
        <p className="mb-15">
          Passionate backend Web Developer skilled in Python, React, Django, and
          FastApi, seeking challenging opportunities to contribute to innovative
          web projects.
        </p>
      </div>
      <form action="" className="px-10">
        <input type="text" placeholder="Name" className="input-form mb-3" />
        <input type="text" placeholder="Email" className="input-form mb-3" />
        <textarea
          placeholder="How Can I Help?"
          className="input-form relative h-40 resize-none"
          maxLength={150}
        />
        <button className=" bg-blue-200 px-3 w-40 py-2 rounded-md inline-block hover:bg-blue-400 hover:cursor-pointer text-zinc-950 font-bold text-center">
          {"submit"}
        </button>
      </form>
    </div>
  );
}
