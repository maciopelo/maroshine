import { sections } from "@/constants";
import React from "react";
import Image from "next/image";

const offers = [
  {
    title: "Czyszczenie wnętrz samochodów 🧽",
    desc: "Profesjonalne mycie, odkurzanie oraz czyszczenie tapicerki i wszystkich powierzchni wewnętrznych. Usuwam kurz, zabrudzenia i nieprzyjemne zapachy, przywracając świeżość Twojego autu.",
    img: "/images/car-cleaning.jpg",
    alt: "Czyszczenie samochodów",
    price: "od 200 zł",
  },
  {
    title: "Polerowanie lakieru ✨",
    desc: "Zadbaj o wygląd karoserii! Usuwam drobne rysy i przywracam głęboki blask lakierowi przy użyciu wysokiej jakości środków i maszyn polerskich. To idealna usługa zarówno przed sprzedażą auta, jak i dla osób, które chcą zadbać o swój samochód na co dzień.",
    img: "/images/polishing.jpg",
    alt: "Polerowanie lakieru",
    price: "od 200 zł",
  },
  {
    title: "Mycie dywanów i kanap 🛋️",
    desc: "Oferuję również mobilne czyszczenie dywanów oraz tapicerki meblowej. Skutecznie pozbywam się plam i zanieczyszczeń, odświeżając Twoje domowe wnętrza.",
    img: "/images/carpet.jpg",
    alt: "Mycie dywanów i kanap",
    price: "od 100 zł",
  },
];

const Offer = () => {
  return (
    <section
      className="px-4 py-10 sm:py-16 sm:px-6 bg-gray-100"
      id={sections.offer}
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Oferta</h2>
        <p className="text-base sm:text-lg text-gray-600">
          Wysoka jakość u Ciebie w domu!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {offers.map(({ title, desc, img, alt, price }) => (
          <div
            key={title}
            className="relative bg-white p-4 sm:p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 flex flex-col justify-between xl:h-[500px]"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-center">
                {title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{desc}</p>
            </div>
            <Image
              src={img}
              alt={alt}
              width={1000}
              height={1000}
              className="w-full h-48 object-cover rounded-md my-4"
            />
            <p className="absolute bottom-[0.5em] right-[1em] text-sm font-medium text-yellow-500">
              {price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offer;
