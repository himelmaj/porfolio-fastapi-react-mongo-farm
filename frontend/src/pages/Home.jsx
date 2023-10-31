import { WhoAmI } from "../components/WhoAmI";
import { SelectedWorks } from "../components/SelectedWorks";

export function Home() {
  return (
    <main>
      <section className="max-w-3xl mx-auto mt-60">
        <h1 className="title-font text-9xl">Himel Majumder</h1>
        <h3 className="subtitle-font text-4xl">Web Developer</h3>
      </section>
      <WhoAmI/>
      <SelectedWorks/>
    </main>
  );
}
