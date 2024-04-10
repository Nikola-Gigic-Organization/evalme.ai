import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "user_answers" ALTER COLUMN "answer" SET DATA TYPE varchar;`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "user_answers" ALTER COLUMN "answer" SET DATA TYPE jsonb;`);

};
