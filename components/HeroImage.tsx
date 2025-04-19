const HeroImage = () => {
  return (
    <section className="hero-image h-screen md:bg-fixed bg-center md:bg-cover flex items-center justify-center text-white bg-blend-overlay bg-black/50">
      <div className="flex flex-col w-full justify-start p-4 md:p-10">
        <h1 className="flex flex-col text-3xl sm:text-4xl md:text-6xl font-extrabold mb-2 sm:mb-4">
          Mobilna kosmetyka
          <span>
            samochodów
            <span className="text-xs sm:text-sm md:text-lg font-extralight">
              i nie tylko
            </span>
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-2xl max-w-xl text-yellow-400 font-bold">
          Ekologiczne sprzątanie pod Twoim domem
        </p>
      </div>
    </section>
  );
};

export default HeroImage;
