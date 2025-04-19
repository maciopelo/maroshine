"use client";
import { useState } from "react";
import AlertDialog from "./AlertDialog";
import { LoaderCircle } from "lucide-react";

export type FormData = {
  name: string;
  email: string;
  message: string;
  carbonCopy: boolean;
};

const validateEmail = (value: string): boolean => {
  const pattern =
    /^([a-zA-Z0-9_\-\\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  return pattern.test(value);
};

const ContactForm = () => {
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    carbonCopy: false,
  });

  const showDialog = (message: string) => {
    setIsDialogOpen(true);
    setAlertMessage(message);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setIsError("");
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setIsError("Prosze wypełnić wszystkie pola formularza.");
      return;
    }
    if (!validateEmail(email)) {
      setIsError("Proszę podać poprawny adres e-mail.");
      return;
    }
    try {
      setIsLoading(true);
      const res = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        if (localStorage.getItem("debug") === "true") {
          const error = await res.json();
          console.error("Error response:", error);
        }
        throw new Error(res.statusText);
      }

      showDialog("Wiadomość została wysłana.");
    } catch (error) {
      console.error("Error sending email:", error);
      showDialog(
        "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później."
      );
    } finally {
      setFormData({ name: "", email: "", message: "", carbonCopy: false });
      setIsLoading(false);
    }
  };

  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          placeholder="Imię i nazwisko"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 outline-gray-950"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 outline-gray-950"
        />
        <textarea
          placeholder="Wiadomość"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 h-32 outline-gray-950"
        />

        <div className="flex items-center">
          <input
            type="checkbox"
            id="carbonCopy"
            name="carbonCopy"
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                carbonCopy: e.target.checked,
              }))
            }
            checked={formData.carbonCopy}
            className="peer hidden"
          />
          <div className="w-5 h-5 mr-2 rounded border border-gray-300 flex items-center justify-center cursor-pointer peer-checked:bg-yellow-400 peer-checked:border-yellow-400 transition">
            <svg
              className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
              fill="#fff"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <label
            htmlFor="carbonCopy"
            className="text-sm text-gray-700 cursor-pointer select-none"
          >
            Wyślij kopię do mnie
          </label>
        </div>

        {isError && <p className="text-red-500 text-sm">{isError}</p>}
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 cursor-pointer w-[100px] flex items-center justify-center"
        >
          {isLoading ? (
            <LoaderCircle className="animate-spin text-white" />
          ) : (
            "Wyślij"
          )}
        </button>
      </form>
      {isDialogOpen && (
        <AlertDialog
          message={alertMessage}
          onClose={() => setIsDialogOpen(false)}
        />
      )}
    </>
  );
};

export default ContactForm;
