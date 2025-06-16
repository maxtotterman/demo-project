import {
  type ColumnType,
  type Generated,
  type Selectable,
  type Updateable,
} from "kysely";

export type Company = Selectable<CompanyTable>;

export interface CompanyTable {
  created_at: ColumnType<Date, string | undefined, never>;
  id: Generated<string>;
  logo_url: null | string;
  modified_at: ColumnType<Date, string | undefined, never>;
  name: string;
}
export type UpdateCompany = Updateable<CompanyTable>;
