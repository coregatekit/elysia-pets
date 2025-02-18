CREATE TABLE "elysia-pets"."breeds" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NOT NULL,
	"animal_id" uuid NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "elysia-pets"."breeds" ADD CONSTRAINT "breeds_animal_id_animals_id_fk" FOREIGN KEY ("animal_id") REFERENCES "elysia-pets"."animals"("id") ON DELETE set null ON UPDATE no action;