import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" })
});


export const registerSchema = z.object({
    username: z.string().min(1, { message: "Username is required" }),
    password: z.string().min(1, { message: "Password is required" }),
    citizenId: z.string().min(1, { message: "Citizen ID is required" }),
    phone: z.string().min(1, { message: "Phone number is required" }),
    fullName: z.string().min(1, { message: "Full name is required" }),
    address: z.string().min(1, { message: "Address is required" }),
    position: z.string().min(1, { message: "Position is required" }),
  });