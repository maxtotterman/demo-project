import app from "#app.js";
import assert from "node:assert";
import test from "node:test";

test("app", async () => {
  const res = await app.request("/api/documentation");

  assert.strictEqual(res.status, 200);
});
