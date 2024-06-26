'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from 'next/link';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";
import { z } from 'zod';
import { loginSchema } from '@/schemas/authSchema';
export default function Home() {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="text-center mt-10 text-2xl">
          ระบบบริหารจัดการกลุ่มออมทรัพย์เพื่อการผลิตบ้านท่ารวก 
          <br />
          ตำบลหนองยายโต๊ะ อำเภอชัยบาดาล จังหวัดลพบุรี
        </div>
        <br />
        <Card>
          <CardHeader className="text-center">เมนูหลัก</CardHeader>
          <CardContent className="flex flex-col gap-y-10">
            <div className="flex justify-center gap-x-4 mt-4 w-full">
              <Link href="/mainuser">
                <Button variant="default"> ข้อมูลเกี่ยวกับสมาชิก </Button>
              </Link>
              <Link href="/mainadmin">
                <Button variant="default">ข้อมูลเกี่ยวกับเจ้าหน้าที่กองทุน</Button>
              </Link>
              <Link href="/signupuser">
                <Button variant="default">สมัครสมาชิกสำหรับชุมชน</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    );
}