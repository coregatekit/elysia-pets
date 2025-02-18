CREATE TYPE "public"."animal_type" AS ENUM('Mammals', 'Birds', 'Reptiles', 'Amphibians', 'Invertebrates', 'Fish');--> statement-breakpoint
CREATE TABLE "elysia-pets"."animals" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(100) NOT NULL,
	"type" "animal_type" NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
