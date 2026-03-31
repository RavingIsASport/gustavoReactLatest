export interface EmailData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

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
