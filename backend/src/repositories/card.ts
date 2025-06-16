import { db } from "#db/database.js";

export async function findCardById(id: string) {
  return db
    .selectFrom("cards")
    .where("id", "=", id)
    .selectAll()
    .executeTakeFirst();
}

// TODO: Use string instead of boolean for status
export async function updateCardStatus(id: string, active: boolean) {
  return db
    .updateTable("cards")
    .set({
      is_active: active,
      modified_at: new Date(),
    })
    .where("id", "=", id)
    .execute();
}
