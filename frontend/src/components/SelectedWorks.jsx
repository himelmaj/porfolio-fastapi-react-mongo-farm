import { WorkCard } from "./WorkCard";

export function SelectedWorks() {
  return (
    <section className=" mt-60 mx-auto mb-15">
      <h2 className="text-6xl title-font text-center my-10">Select Works</h2>
      <div className="grid xl:grid-cols-3 sm:grid-cols-1 gap-3 mx-3">
        {/* WorkCard({ img, title, decription, url }) */}
        <WorkCard
          url={
            "https://github.com/himelmaj/questionsapp-fastapi-react-mongo-farm/tree/main"
          }
          img={"https://i.pinimg.com/564x/6c/68/51/6c6851b3d8e27b1ef6d687d482d8680b.jpg"}
          title={"Question App"}
          decription={
            "Questions App is a project where I have used FastAPI for the backend, React Vite for the frontend, and MongoDB as the database. The project involves creating questions and answering them in pairs."
          }
        />
        <WorkCard
          url={"https://github.com/himelmaj/porfolio-fastapi-react-mongo-farm"}
          img={"https://i.pinimg.com/564x/93/18/ea/9318ea49e912589c58df2de264390bdb.jpg"}
          title={"Porfolio Project"}
          decription={"Creative web developer passionate about Python, React, Django, and FastAPI. Explore my portfolio showcasing innovative web projects blending functionality and aesthetics. Excited to share my journey in the web development world."}
        />
        <WorkCard
          url={""}
          img={"https://i.pinimg.com/564x/30/39/12/303912e150926d6749cdca58e8f8ba08.jpg"}
          title={"My Spotify App"}
          decription={"My Spotify App is a music lover's paradise, offering millions of tracks, personalized playlists, and seamless streaming. Discover, create, and enjoy your favorite tunes anytime, anywhere."}
        />
      </div>
    </section>
  );
}
