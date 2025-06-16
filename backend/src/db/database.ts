import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";

import type { CardTable } from "./card-schema.js";
import type { CompanyTable } from "./company-schema.js";
import type { TransactionTable } from "./transaction-schema.js";

export interface Database {
  cards: CardTable;
  companies: CompanyTable;
  transactions: TransactionTable;
}

const dialect = new PostgresDialect({
  pool: new Pool({
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    max: 10,
    password: process.env.DATABASE_PASSWORD,
    port: Number(process.env.DATABASE_PORT) || 5432,
    user: process.env.DATABASE_USER,
  }),
});

export const db = new Kysely<Database>({
  dialect,
});
