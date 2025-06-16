import app from "#app.js";
import assert from "node:assert";
import test from "node:test";

test("app", async () => {
  const res = await app.request(
    "/api/cards/123e4567-e89b-12d3-a456-426614174000",
  );
  const text = await res.text();

  assert.strictEqual(res.status, 200);
  assert.strictEqual(text, "Hello Hono!");
});
