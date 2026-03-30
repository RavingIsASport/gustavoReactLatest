export interface EmailData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

// const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export const sendEmail = async (data: EmailData) => {
  let response = await fetch("/api/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
