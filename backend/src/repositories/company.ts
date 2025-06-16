import { db } from "#db/database.js";

export async function findCompanyById(id: string) {
  return await db
    .selectFrom("companies")
    .where("id", "=", id)
    .selectAll()
    .executeTakeFirst();
}
