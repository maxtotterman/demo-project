import {
  type ColumnType,
  type Generated,
  type Selectable,
  type Updateable,
} from "kysely";

export enum UserStatus {
  ACTIVE = "active",
  DELETED = "deleted",
  INACTIVE = "inactive",
  PENDING = "pending",
  SUSPENDED = "suspended",
}

export interface UsersTable {
  created_at: ColumnType<Date, string | undefined, never>;
  deleted_at: ColumnType<Date, string | undefined, never>;
  first_name: string;
  id: Generated<number>;
  last_name: string;
  modified_at: ColumnType<Date, string | undefined, never>;
  status: UserStatus;
}

export type UpdateUser = Updateable<UsersTable>;
export type User = Selectable<UsersTable>;
