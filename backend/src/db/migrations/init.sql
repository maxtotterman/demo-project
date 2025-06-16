
DROP TABLE IF EXISTS "public"."companies";
-- Table Definition
CREATE TABLE "public"."companies" (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "name" varchar(255) NOT NULL,
    "logo_url" varchar(500),
    "created_at" timestamptz DEFAULT now(),
    "modified_at" timestamptz DEFAULT now(),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."users";
DROP TYPE IF EXISTS "public"."user_status";
CREATE TYPE "public"."user_status" AS ENUM ('pending', 'active', 'suspended', 'inactive', 'deleted');

-- Table Definition
CREATE TABLE "public"."users" (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "company_id" uuid NOT NULL,
    "first_name" varchar(100) NOT NULL,
    "last_name" varchar(100) NOT NULL,
    "status" "public"."user_status" NOT NULL DEFAULT 'pending'::user_status,
    "created_at" timestamptz DEFAULT now(),
    "modified_at" timestamptz DEFAULT now(),
    "deleted_at" timestamptz DEFAULT now(),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."cards";
-- Table Definition
CREATE TABLE "public"."cards" (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "company_id" uuid NOT NULL,
    "user_id" uuid NOT NULL,
    "card_number" varchar(20) NOT NULL,
    "img_url" varchar(500),
    "total_spend_limit" numeric(10,2) NOT NULL DEFAULT 0,
    "total_spent" numeric(10,2) NOT NULL DEFAULT 0,
    "is_active" bool DEFAULT false,
    "activated_at" timestamptz,
    "expires_at" timestamptz,
    "created_at" timestamptz DEFAULT now(),
    "modified_at" timestamptz DEFAULT now(),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."transactions";
-- Table Definition
CREATE TABLE "public"."transactions" (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "card_id" uuid NOT NULL,
    "user_id" uuid NOT NULL,
    "description" text,
    "amount" numeric(10,2) NOT NULL,
    "transaction_date" timestamptz NOT NULL,
    "reference_number" varchar(100),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."invoices";
-- Table Definition
CREATE TABLE "public"."invoices" (
    "id" uuid NOT NULL DEFAULT gen_random_uuid(),
    "company_id" uuid NOT NULL,
    "card_id" uuid NOT NULL,
    "invoice_number" varchar(100) NOT NULL,
    "total_amount" numeric(10,2) NOT NULL,
    "currency" varchar(3) DEFAULT 'SEK'::character varying,
    "due_date" date NOT NULL,
    "issue_date" date NOT NULL DEFAULT CURRENT_DATE,
    "paid_at" timestamptz,
    "created_at" timestamptz DEFAULT now(),
    "updated_at" timestamptz DEFAULT now(),
    PRIMARY KEY ("id")
);

ALTER TABLE "public"."users" ADD FOREIGN KEY ("company_id") REFERENCES "public"."companies"("id") ON DELETE CASCADE;
ALTER TABLE "public"."cards" ADD FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE;
ALTER TABLE "public"."cards" ADD FOREIGN KEY ("company_id") REFERENCES "public"."companies"("id") ON DELETE CASCADE;

-- Indices
CREATE UNIQUE INDEX cards_card_number_key ON public.cards USING btree (card_number);
ALTER TABLE "public"."transactions" ADD FOREIGN KEY ("card_id") REFERENCES "public"."cards"("id") ON DELETE CASCADE;
ALTER TABLE "public"."transactions" ADD FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE;
ALTER TABLE "public"."invoices" ADD FOREIGN KEY ("company_id") REFERENCES "public"."companies"("id") ON DELETE CASCADE;


-- Indices
CREATE UNIQUE INDEX invoices_invoice_number_key ON public.invoices USING btree (invoice_number);
