'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from 'next/link';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const registerSchema = z.object({
  memberId: z.string().min(1, "Required"),
  familyCode: z.string().min(1, "Required"),
  citizenId: z.string().min(1, "Required"),
  phone: z.string().min(1, "Required"),
  fullName: z.string().min(1, "Required"),
  address: z.string().min(1, "Required"),
});

export default function RegisterPage() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema)
  });

  const [loading, setLoading] = useState(false);

  const handleRegister = async (data : any) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/member', data);
      if (response.status === 201) {
        toast.success('สมัครสมาชิกสำเร็จ');
        router.push('/');
      } else {
        toast.error('มีบางอย่างผิดพลาด');
      }
    } catch (error) {
      console.log(error);
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
          <form onSubmit={handleSubmit(handleRegister)}>
            {[
              { name: 'memberId', type: 'text', placeholder: 'เลขที่สมาชิก' },
              { name: 'familyCode', type: 'text', placeholder: 'รหัสครอบครัว' },
              { name: 'citizenId', type: 'text', placeholder: 'เลขประจำตัวประชาชน' },
              { name: 'phone', type: 'text', placeholder: 'เบอร์โทรศัพท์' },
              { name: 'fullName', type: 'text', placeholder: 'ชื่อ - นามสกุล' },
              { name: 'address', type: 'text', placeholder: 'ที่อยู่' }
            ].map(({ name, type, placeholder }) => (
              <div key={name} className="flex flex-col gap-y-2">
                <div className="flex items-center gap-x-4">
                  <Label className="whitespace-nowrap w-48 capitalize">{placeholder}</Label>
                  <Input
                    className={`flex-grow ${errors[name] ? 'border-red-500' : ''}`}
                    type={type}
                    placeholder={placeholder}
                    {...register(name)}
                  />
                </div>
                {errors[name] && <span className="text-red-500 text-sm">{errors[name]?.message}</span>}
              </div>
            ))}
            <div className="flex justify-center gap-x-4 mt-4">
              <Button variant="ghost" type="submit" disabled={loading}>
                {loading ? 'กำลังสมัครสมาชิก...' : 'สมัครสมาชิก'}
              </Button>
              <Link href="/">
                <Button variant="default">กลับหน้าหลัก</Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
