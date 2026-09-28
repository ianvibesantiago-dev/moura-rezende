import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Recognitions } from "@/components/sections/Recognitions";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { Method } from "@/components/sections/Method";
import { Partners } from "@/components/sections/Partners";
import { Manifesto } from "@/components/sections/Manifesto";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Recognitions />
        <PracticeAreas />
        <Method />
        <Partners />
        <Manifesto />
        <Contact />
      </main>
    </>
  );
}
