import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DROP TABLE "topics_questions";`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

CREATE TABLE IF NOT EXISTS "topics_questions" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL
);

CREATE INDEX IF NOT EXISTS "topics_questions_order_idx" ON "topics_questions" ("_order");
CREATE INDEX IF NOT EXISTS "topics_questions_parent_id_idx" ON "topics_questions" ("_parent_id");
DO $$ BEGIN
 ALTER TABLE "topics_questions" ADD CONSTRAINT "topics_questions__parent_id_topics_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "topics"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};
