import bcrypt from 'bcrypt';
import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password, citizenId, phone, fullName, address, position } = body;

    if (!username || !password || !citizenId || !phone || !fullName || !address || !position) {
      return new Response("Missing required fields", { status: 400 });
    }

    const userAlreadyExists = await prisma.user.findFirst({
      where: { username: username },
    });

    if (userAlreadyExists) {
      return new Response("User already exists", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await prisma.user.create({
      data: {
        username,
        hashedPassword,
        citizenId,
        phone,
        fullName,
        address,
        position,
      },
    });

    return NextResponse.json(newUser);
  } catch (error) {
    console.log("Register Error", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
