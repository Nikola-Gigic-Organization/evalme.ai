import { User } from "@prisma/client";

const UsersData: User[] = [
  {
    id: "1",
    email: "test_user1@email.com",
    name: "Test User 1",
    password: "password",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    email: "test_user2@email.com",
    name: "Test User 2",
    password: "password",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default UsersData;
