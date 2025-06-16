import { findCardById, updateCardStatus } from "#repositories/card.js";
import { findTransactionsByCardId } from "#repositories/transactions.js";
import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { validator } from "hono-openapi/valibot";
import { jwt } from "hono/jwt";
import * as v from "valibot";

const app = new Hono();

app.get(
  "/:id",
  describeRoute({
    description: "Get details of a card by its ID",
    responses: {
      200: {
        description: "Successful response",
      },
      400: {
        description: "Bad request, invalid input",
      },
    },
    security: [{ bearerAuth: [] }],
  }),
  jwt({
    secret: process.env.JWT_SECRET!,
  }),
  validator("param", v.object({ id: v.pipe(v.string(), v.uuid()) })),
  async (c) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    const card = await findCardById(c.req.param("id"));

    if (!card) {
      return c.notFound();
    }

    return c.json(card);
  },
);

// TODO: Return total count of transactions
app.get(
  "/:id/transactions",
  describeRoute({
    description: "Get transactions for a card",
    responses: {
      200: {
        description: "Successful response",
      },
      400: {
        description: "Bad request, invalid input",
      },
    },
    security: [{ bearerAuth: [] }],
  }),
  jwt({
    secret: process.env.JWT_SECRET!,
  }),
  validator("param", v.object({ id: v.pipe(v.string(), v.uuid()) })),
  validator(
    "query",
    v.object({
      limit: v.optional(
        v.pipe(
          v.string(),
          v.transform((s) => Number(s)),
          v.number("limit must be a number"),
        ),
      ),
    }),
  ),
  async (c) => {
    await new Promise((resolve) => setTimeout(resolve, 1300));
    const { id } = c.req.valid("param");
    const { limit } = c.req.valid("query");

    const card = await findCardById(id);
    if (!card) {
      return c.notFound();
    }

    const transactions = await findTransactionsByCardId(id, limit);
    if (!transactions.length) {
      return c.notFound();
    }

    return c.json(transactions);
  },
);

app.patch(
  "/:id",
  describeRoute({
    description: "Update the status of a card",
    responses: {
      200: {
        description: "Successful response",
      },
      400: {
        description: "Bad request, invalid input",
      },
    },
    security: [{ bearerAuth: [] }],
  }),
  jwt({
    secret: process.env.JWT_SECRET!,
  }),
  validator("param", v.object({ id: v.pipe(v.string(), v.uuid()) })),
  validator(
    "json",
    v.object({
      status: v.boolean(),
    }),
  ),
  async (c) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    const { id } = c.req.valid("param");
    const { status } = c.req.valid("json");

    const card = await findCardById(id);
    if (!card) {
      return c.notFound();
    }

    await updateCardStatus(id, status);

    return c.json(card);
  },
);

export default app;
