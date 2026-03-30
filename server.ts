import { Elysia, t } from "elysia";

const app = new Elysia();

app.post("/api/email", async (ctx: { body: any }) => {
  const data = await ctx.body;
  console.log("Received email data:", data);
  // Here you can add logic to send the email using a service like nodemailer or an email API
  return { message: "Email data received successfully at backend", data };
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
