import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error("Invalid credentials");
        }
        const user = await prisma.user.findFirst({
          where: { username: credentials.username }
        });
        if (!user || !user.hashedPassword) {
          throw new Error("User not registered");
        }
        const isValidPassword = await bcrypt.compare(credentials.password, user.hashedPassword);
        if (!isValidPassword) {
          throw new Error("Invalid credentials");
        }
        return user;
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV !== "production",
};

export default authOptions;
