import { FormData } from "@/components/ContactForm";

export async function sendEmail(formData: FormData) {
  const apiEndpoint = "/api/email";
  await fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(formData),
  });
}
