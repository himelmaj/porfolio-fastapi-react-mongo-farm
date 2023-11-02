import { WhoAmI } from "../components/WhoAmI";
import { SelectedWorks } from "../components/SelectedWorks";

export function Home() {
  return (
    <main>
      <section className="max-w-3xl mx-auto mt-10 sm:mt-60 md:mt-60 lg:mt-60 my-4">
        <h1 className="text-5xl sm:text-8xl md:text-9xl title-font font-bold leading-tight mb-4 text-center">
          Himel Majumder
        </h1>
        <h3 className="text-2xl sm:text-4xl md:text-4xl subtitle-font mb-8 text-center">
          Web Developer
        </h3>
      </section>

      <WhoAmI />
      <SelectedWorks />
    </main>
  );
}
