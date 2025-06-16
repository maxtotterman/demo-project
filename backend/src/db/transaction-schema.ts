import { type ColumnType, type Generated, type Selectable } from "kysely";

export type Transactions = Selectable<TransactionTable>;

export interface TransactionTable {
  amount: ColumnType<number, string | undefined, never>;
  card_id: ColumnType<string>;
  description: ColumnType<null | string>;
  id: Generated<string>;
  reference_number: ColumnType<null | string>;
  transaction_date: Date;
  user_id: ColumnType<string>;
}
