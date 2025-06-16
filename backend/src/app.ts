import cards from "#routes/cards.js";
import companies from "#routes/companies.js";
import { Hono } from "hono";
import { openAPISpecs } from "hono-openapi";
import { compress } from "hono/compress";
import { cors } from "hono/cors";
import { etag } from "hono/etag";
import { logger } from "hono/logger";
import { secureHeaders } from "hono/secure-headers";

const app = new Hono();

app.use(logger());
app.use(etag());
app.use(compress());
app.use(secureHeaders());
app.use(cors());

app.get(
  "api/documentation",
  openAPISpecs(app, {
    documentation: {
      info: {
        title: "Qred API",
        version: "1.0.0",
      },
      servers: [{ description: "Local Server", url: "http://localhost:1337" }],
    },
  }),
);
app.route("api/cards", cards);
app.route("api/companies", companies);

export default app;
