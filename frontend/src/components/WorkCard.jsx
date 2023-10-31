import { Img } from "react-image";

export function WorkCard({ img, title, decription, url }) {
  return (
    <article className="max-w-md">
      <a href={url} className="block max-w-md p-6 rounded-lg shadow">
        <Img src={img} className="object-contain" />{" "}
        <div className="border-solid border-2 m-0">
          <h5 className="mb-2 text-2xl font-bold tracking-tigh text-center mt-3">
            {title}
          </h5>
          <p className="font-normal text-gray-400 text-justify px-3 py-3">
            {decription}
          </p>
        </div>
      </a>
    </article>
  );
}
