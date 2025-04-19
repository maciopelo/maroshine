import Image from "next/image";

import { sections } from "@/constants";

const AboutMe = () => {
  return (
    <section
      className="px-4 py-10 sm:py-16 sm:px-6 bg-white"
      id={sections.aboutMe}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nieco o mnie</h2>
          <p className="text-base sm:text-lg text-gray-700 text-justify">
            Nazywam się Marek i prowadzę lokalną, mobilną usługę auto
            detailingu, która stawia na jakość, wygodę oraz ekologiczne
            rozwiązania. Dzięki profesjonalnym narzędziom i pasji do czystości,
            przywrócę blask Twojemu samochodowi — prosto na Twoim podjeździe.
            Zadbam o każdy detal, niezależnie od tego, czy przygotowujesz auto
            na sprzedaż, ważne wydarzenie, czy po prostu chcesz cieszyć się
            codzienną jazdą w perfekcyjnie czystym wnętrzu.
            <span className="font-bold uppercase"> Maroshine</span> to więcej
            niż mycie – to pielęgnacja z troską 🚕✨
          </p>
        </div>

        <div className="md:w-1/2">
          <Image
            src="/images/about.jpg"
            alt="Detailing process"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
