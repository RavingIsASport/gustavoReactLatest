import { Elysia, t } from "elysia";
import { Resend } from "resend";
import { cors } from "@elysiajs/cors";

const resend = new Resend(Bun.env.VITE_RESEND_API_KEY);

const app = new Elysia()
  .use(
    cors({
      origin: Bun.env.VITE_FRONTEND_URL,
      credentials: true,
    }),
  )
  // Define a route to handle email data sent from the frontend
  .post("/api/email", async (ctx) => {
    // Getting data from the request body
    const data: any = await ctx.body;

    // Console log the received email data for debugging purposes
    console.log("Received email data:", data);

    // await resend.emails.send({
    //   from: "onboarding@resend.dev",
    //   to: Bun.env.VITE_EMAIL!,
    //   subject: data.subject || "New Message from Contact From" + data.name,
    //   html: `
    //         <h2><strong>Name:</strong> ${data.name}</h2>
    //         <p><strong>Reply-to Email:</strong> ${data.email}</p>
    //         <p><strong>Message:</strong></p>
    //         <p>${data.message}</p>
    //         `,
    //   replyTo: data.email,
    // });

    // Here you can add logic to send the email using a service like nodemailer or an email API
    return { message: "Email data received successfully at backend", data };
  })
  .listen(Bun.env.PORT || 3000, () => {
    console.log("Server is running!");
  });
