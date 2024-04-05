import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

CREATE TABLE IF NOT EXISTS "topic_question_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"topics_id" integer
);

CREATE INDEX IF NOT EXISTS "topic_question_rels_order_idx" ON "topic_question_rels" ("order");
CREATE INDEX IF NOT EXISTS "topic_question_rels_parent_idx" ON "topic_question_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "topic_question_rels_path_idx" ON "topic_question_rels" ("path");
DO $$ BEGIN
 ALTER TABLE "topic_question_rels" ADD CONSTRAINT "topic_question_rels_parent_id_topic_question_id_fk" FOREIGN KEY ("parent_id") REFERENCES "topic_question"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "topic_question_rels" ADD CONSTRAINT "topic_question_rels_topics_id_topics_id_fk" FOREIGN KEY ("topics_id") REFERENCES "topics"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DROP TABLE "topic_question_rels";`);

};
