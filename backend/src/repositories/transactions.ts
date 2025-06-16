import { db } from "#db/database.js";

export async function findTransactionsByCardId(cardId: string, limit?: number) {
  return await db
    .selectFrom("transactions")
    .where("card_id", "=", cardId)
    .orderBy("transaction_date", "desc")
    .limit(limit ?? 25)
    .selectAll()
    .execute();
}
