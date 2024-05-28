'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from 'next/link';
export default function depositRoute() {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="text-center mt-10 text-2xl">
          ระบบบริหารจัดการกลุ่มออมทรัพย์เพื่อการผลิตบ้านท่ารวก 
          <br />
          ตำบลหนองยายโต๊ะ อำเภอชัยบาดาล จังหวัดลพบุรี
        </div>
        <br />
        <Card>
          <CardHeader className="text-center">ข้อมูลเกี่ยวกับสมาชิก : การฝากเงินสัจจะออมทรัพย์ </CardHeader>
          <CardContent className="flex flex-col gap-y-10">
            <div className="flex items-center gap-x-4">
              <Label className="whitespace-nowrap w-48">เลขที่สมาชิก</Label>
              <Input
                type="text"
                className="flex-grow"
                placeholder="เลขที่สมาชิก"
              />
            </div>
            <div className="flex items-center gap-x-4">
              <Label className="whitespace-nowrap w-48">รหัสครอบครัว</Label>
              <Input
                type="text"
                className="flex-grow"
                placeholder="รหัสครอบครัว"
              />
            </div>
            <div className="flex items-center gap-x-4">
              <Label className="whitespace-nowrap w-48">ชื่อ - นามสกุล</Label>
              <Input
                type="text"
                className="flex-grow"
                placeholder="ชื่อ - นามสกุล"
              />
            </div>
            <div className="flex items-center gap-x-4">
              <Label className="whitespace-nowrap w-48"> เบอร์โทรศัพท์</Label>
              <Input
                type="text"
                className="flex-grow"
                placeholder=" เบอร์โทรศัพท์"
              />
            </div>
            <div className="flex items-center gap-x-4">
              <Label className="whitespace-nowrap w-48"> จำนวนเงินที่ฝากไว้</Label>
              <Input
                type="text"
                className="flex-grow"
                placeholder="จำนวนเงินที่ฝากไว้"
              />
            </div>
            <div className="flex items-center gap-x-4">
              <Label className="whitespace-nowrap w-48"> วันที่ฝาก</Label>
              <Input
                type="text"
                className="flex-grow"
                placeholder="วันที่ฝากไว้"
              />
            </div>
            <div className="flex items-center gap-x-4">
              <Label className="whitespace-nowrap w-48"> จำนวนเงินฝาก</Label>
              <Input
                type="text"
                className="flex-grow"
                placeholder="จำนวนเงินฝากไว้"
              />
            </div>
            <div className="flex items-center gap-x-4">
              <Label className="whitespace-nowrap w-48"> รวมเป็นเงิน</Label>
              <Input
                type="text"
                className="flex-grow"
                placeholder="รวมเป็นเงิน"
              />
            </div>
            <div className="flex justify-center gap-x-4 mt-4 ">

              <Button variant="default">
                บันทึก
              </Button>
              <Button variant="default">
                ค้นหา
              </Button>
              <Button variant="default">
                แก้ไข
              </Button>
              <Button variant="default">
                ลบ
              </Button>
              <Link href='/'>
              <Button variant="ghost">
               ย้อนกลับ
              </Button>
              
              </Link>

            </div>
          </CardContent>
        </Card>
      </section>
    )
}