import { findCompanyById } from "#repositories/company.js";
import { Hono } from "hono";

const app = new Hono();

app.get("/:id", async (c) => {
  const company = await findCompanyById(c.req.param("id"));

  if (!company) {
    return c.notFound();
  }

  return c.json(company);
});

export default app;
