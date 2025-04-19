import { sections } from "@/constants";
import React from "react";

const Contact = () => {
  return (
    <section
      className="px-4 py-10 sm:py-16 sm:px-6 bg-white"
      id={sections.contact}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Skontaktuj się ze mną!
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            Masz pytania? Chcesz umówić się na wizytę? Wypełnij formularz
            kontaktowy, a ja skontaktuję się z Tobą jak najszybciej lub zadzwoń
            pod numer{" "}
            <a
              href="tel:+48123456789"
              className="text-black font-semibold underline hover:text-gray-800"
            >
              +48 123 456 789
            </a>
            .
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Imię i nazwisko"
              className="w-full border border-gray-300 rounded px-4 py-2 outline-gray-950"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded px-4 py-2 outline-gray-950"
            />
            <textarea
              placeholder="Wiadomość"
              className="w-full border border-gray-300 rounded px-4 py-2 h-32 outline-gray-950"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              Wyślij wiadomość
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380.542284682584!2d18.618013441986182!3d49.8526956942441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716aa8c1f1cab43%3A0xc873ea9b34b499f7!2sZagrodowa%2025C%2C%2043-410%20Ko%C5%84czyce%20Ma%C5%82e!5e1!3m2!1spl!2spl!4v1745009153805!5m2!1spl!2spl"
            width="100%"
            height="300"
            allowFullScreen
            loading="lazy"
            className="w-full rounded shadow"
          ></iframe>

          <div>
            <h3 className="text-xl font-semibold mb-2">Godziny pracy:</h3>
            <ul className="text-gray-700">
              <li>Pon–Pt: 9:00 – 18:00</li>
              <li>Sobota: 10:00 – 16:00</li>
              <li>Niedziela: 👫 🍔 🍺</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
