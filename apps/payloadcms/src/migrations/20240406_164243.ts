import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

CREATE TABLE IF NOT EXISTS "user_answers" (
	"id" serial PRIMARY KEY NOT NULL,
	"answer" jsonb NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "user_answers_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"users_id" integer,
	"topic_question_id" integer
);

CREATE INDEX IF NOT EXISTS "user_answers_created_at_idx" ON "user_answers" ("created_at");
CREATE INDEX IF NOT EXISTS "user_answers_rels_order_idx" ON "user_answers_rels" ("order");
CREATE INDEX IF NOT EXISTS "user_answers_rels_parent_idx" ON "user_answers_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "user_answers_rels_path_idx" ON "user_answers_rels" ("path");
DO $$ BEGIN
 ALTER TABLE "user_answers_rels" ADD CONSTRAINT "user_answers_rels_parent_id_user_answers_id_fk" FOREIGN KEY ("parent_id") REFERENCES "user_answers"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "user_answers_rels" ADD CONSTRAINT "user_answers_rels_users_id_users_id_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "user_answers_rels" ADD CONSTRAINT "user_answers_rels_topic_question_id_topic_question_id_fk" FOREIGN KEY ("topic_question_id") REFERENCES "topic_question"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DROP TABLE "user_answers";
DROP TABLE "user_answers_rels";`);

};
