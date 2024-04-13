import {
  SessionSchema,
  UserSchema,
  JWTSchema,
  ProfileSchema,
} from "../src/lib/auth/schemas";
import z from "zod";

declare module "next-auth" {
  interface Session extends z.infer<typeof SessionSchema> {
    user: z.infer<typeof UserSchema>;
  }
  interface User extends z.infer<typeof UserSchema> {}
  interface JWT extends z.infer<typeof JWTSchema> {}
  interface Profile extends z.infer<typeof ProfileSchema> {}
}
