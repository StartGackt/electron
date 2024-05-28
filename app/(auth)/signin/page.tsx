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

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const login = async () => {
    try {
      const data = { username, password };
      loginSchema.parse(data);  

      setLoading(true);
      const result = await signIn('credentials', {
        redirect: false,
        username,
        password
      });
      setLoading(false);
      if (result && result.error) {
        toast.error('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
      } else {
        toast.success('เข้าสู่ระบบสำเร็จ');
        router.push('/');
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((err) => {
          toast.error(err.message);
        });
      } else {
        toast.error('Something went wrong');
      }
      setLoading(false);
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
      <div className="text-center mt-10 text-2xl">
        ระบบบริหารจัดการกลุ่มออมทรัพย์เพื่อการผลิตบ้านท่ารวก 
        <br />
        ตำบลหนองยายโต๊ะ อำเภอชัยบาดาล จังหวัดลพบุรี
      </div>
      <br />
      <Card>
        <CardHeader className="text-center">เข้าสู่ระบบสำหรับพนักงาน</CardHeader>
        <CardContent className="flex flex-col gap-y-10">
          <div className="flex items-center gap-x-4">
            <Label className="whitespace-nowrap w-48">ชื่อผู้ใช้งาน</Label>
            <Input
              className="flex-grow"
              placeholder="ชื่อผู้ใช้งาน"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-x-4">
            <Label className="whitespace-nowrap w-48">รหัสผ่าน</Label>
            <Input
              className="flex-grow"
              placeholder="รหัสผ่าน"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center gap-x-4 mt-4">
            <Button variant="ghost" onClick={login} disabled={loading}>
              {loading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
            </Button>
            <Link href="/signup">
              <Button variant="default">สมัครสมาชิก</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
