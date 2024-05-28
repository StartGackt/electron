import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { memberId, familyCode, citizenId, phone, fullName, address } = body;

    // Validate the input
    if (!memberId || !familyCode || !citizenId || !phone || !fullName || !address) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check if the member already exists
    const existingMember = await prisma.member.findUnique({
      where: { memberId },
    });

    if (existingMember) {
      return NextResponse.json({ error: "Member already exists" }, { status: 400 });
    }

    // Create the new member
    const newMember = await prisma.member.create({
      data: {
        memberId,
        familyCode,
        citizenId,
        phone,
        fullName,
        address,
      },
    });

    return NextResponse.json(newMember, { status: 201 });
  } catch (error) {
    console.error("Error registering member:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
