import {
  type Generated,
  type Insertable,
  type Selectable,
  type Updateable,
} from "kysely";

export type Card = Selectable<CardTable>;

export interface CardTable {
  activated_at: Date | null;
  card_number: string;
  company_id: string;
  created_at: Date;
  expires_at: Date | null;
  id: Generated<string>;
  image_url: string;
  is_active: boolean;
  modified_at: Date;
  total_spend_limit: number;
  total_spent: number;
  user_id: string;
}
export type NewCard = Insertable<CardTable>;
export type UpdateCard = Updateable<CardTable>;
