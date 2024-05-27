'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from 'next/link';
import { useState } from 'react';
import toast from "react-hot-toast";
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [citizenId, setCitizenId] = useState('');
  const [phone, setPhone] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [position, setPosition] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleRegister = async () => {
    if (!username || !password || !citizenId || !phone || !fullName || !address || !position) {
      toast.error('กรุณากรอกข้อมูลให้ครบทุกฟิลด์');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('/api/auth/register', {
        username,
        password,
        citizenId,
        phone,
        fullName,
        address,
        position,
      });

      if (response.status === 201) {
        const result = await signIn('credentials', {
          username,
          password,
          redirect: false
        });

        if (result?.error) {
          toast.error(result.error);
        } else {
          toast.success('สมัครสมาชิกสำเร็จ');
          router.push('/');
        }
      } else {
        toast.error('มีบางอย่างผิดพลาด');
      }
    } catch (err) {
      console.log(err);
      toast.error('มีบางอย่างผิดพลาด');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
      <div className="text-center mt-10 text-2xl">
        ระบบบริหารจัดการกลุ่มออมทรัพย์เพื่อการผลิตบ้านท่ารวก 
        <br />
        ตำบลหนองยายโต๊ะ อำเภอชัยบาดาล จังหวัดลพบุรี
      </div>
      <br />
      <Card>
        <CardHeader className="text-center">สมัครสมาชิกสำหรับพนักงาน</CardHeader>
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
          <div className="flex items-center gap-x-4">
            <Label className="whitespace-nowrap w-48">เลขบัตรประชาชน</Label>
            <Input
              className="flex-grow"
              placeholder="เลขบัตรประชาชน"
              value={citizenId}
              onChange={(e) => setCitizenId(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-x-4">
            <Label className="whitespace-nowrap w-48">เบอร์โทรศัพท์</Label>
            <Input
              className="flex-grow"
              placeholder="เบอร์โทรศัพท์"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-x-4">
            <Label className="whitespace-nowrap w-48">ชื่อ - นามสกุล</Label>
            <Input
              className="flex-grow"
              placeholder="ชื่อ - นามสกุล"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-x-4">
            <Label className="whitespace-nowrap w-48">ที่อยู่</Label>
            <Input
              className="flex-grow"
              placeholder="ที่อยู่"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-x-4">
            <Label className="whitespace-nowrap w-48">ตำแหน่ง</Label>
            <Input
              className="flex-grow"
              placeholder="ตำแหน่ง"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div className="flex justify-center gap-x-4 mt-4">
            <Button variant="ghost" onClick={handleRegister} disabled={loading}>
              {loading ? 'กำลังสมัครสมาชิก...' : 'สมัครสมาชิก'}
            </Button>
            <Link href="/">
              <Button variant="default">กลับหน้าหลัก</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
