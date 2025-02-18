CREATE TABLE "elysia-pets"."owners" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"owner_code" varchar(50) NOT NULL,
	"name" varchar(100) NOT NULL,
	"email" varchar(100),
	"phone_number" varchar(10) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	CONSTRAINT "owners_owner_code_unique" UNIQUE("owner_code")
);
