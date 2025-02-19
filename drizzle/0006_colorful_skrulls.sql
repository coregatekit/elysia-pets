ALTER TABLE "elysia-pets"."animals" ALTER COLUMN "type" SET DATA TYPE varchar(20);--> statement-breakpoint
DROP TYPE "public"."animal_type";--> statement-breakpoint
DROP SCHEMA "elysia-integration";
