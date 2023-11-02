import { WorkCard } from "./WorkCard";
import { NavLink } from "react-router-dom";

export function SelectedWorks() {
  return (
    <section className=" mt-60 mx-auto mb-15 items-end">
      <h2 className="text-6xl title-font text-center my-10">Select Works</h2>
      <div className="flex flex-wrap gap-3 mx-3">
        {/* WorkCard({ img, title, decription, url }) */}
        <WorkCard
          url={
            "https://github.com/himelmaj/questionsapp-fastapi-react-mongo-farm/tree/main"
          }
          img={
            "https://i.pinimg.com/564x/6c/68/51/6c6851b3d8e27b1ef6d687d482d8680b.jpg"
          }
          title={"Question App"}
          description={
            "Questions App facilitates creating and answering questions in pairs, employing a robust backend, responsive frontend, and efficient database solution."
          }
          tech1={
            "https://seeklogo.com/images/F/fastapi-logo-541BAA112F-seeklogo.com.png"
          }
          tech2={
            "https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png"
          }
          tech3={
            "https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png"
          }
        />
        <WorkCard
          url={"https://github.com/himelmaj/porfolio-fastapi-react-mongo-farm"}
          img={
            "https://i.pinimg.com/564x/93/18/ea/9318ea49e912589c58df2de264390bdb.jpg"
          }
          title={"Porfolio Project"}
          tech1={
            "https://seeklogo.com/images/F/fastapi-logo-541BAA112F-seeklogo.com.png"
          }
          tech2={
            "https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png"
          }
          tech3={
            "https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png"
          }
          description={
            "Passionate web developer with a creative approach, showcasing innovative and functional web projects in my portfolio."
          }
        />
        <WorkCard
          url={""}
          img={
            "https://i.pinimg.com/564x/30/39/12/303912e150926d6749cdca58e8f8ba08.jpg"
          }
          tech1={
            "https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"
          }
          tech2={
            "https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png"
          }
          tech3={
            "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fmeta-q.cdn.bubble.io%2Ff1511101808452x248499521985650050%2Fhowlericon.png?w=64&h=64&auto=compress&dpr=1&fit=max"
          }
          title={"My Spotify App"}
          description={
            "My Spotify App is a prototype that caters to music enthusiasts, providing access to millions of tracks, personalized playlists, and seamless streaming."
          }
        />
      </div>
      <NavLink
          to="/select work"
          className={"px-3 min-w-md py-2 font-bold border-2 rounded-lg text-center justify-items-end"}>selected work
        </NavLink>
    </section>
  );
}
