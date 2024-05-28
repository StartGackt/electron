'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from 'next/link';
export default function Mainadmin() {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="text-center mt-10 text-2xl">
          ระบบบริหารจัดการกลุ่มออมทรัพย์เพื่อการผลิตบ้านท่ารวก 
          <br />
          ตำบลหนองยายโต๊ะ อำเภอชัยบาดาล จังหวัดลพบุรี
        </div>
        <br />
        <Card>
          <CardHeader className="text-center">เมนูหลักสำหรับพนักงาน</CardHeader>
          <CardContent className="flex flex-col gap-y-10">
            <div className="flex justify-center gap-x-4 mt-4 w-full">
              <Link href="/mainuser">
                <Button variant="default"> 1.การปันผลสมาชิก  </Button>
              </Link>
              <Link href="/signup">
                <Button variant="default">2.พิมพ์รายงาน  </Button>
              </Link> 
            </div>
          </CardContent>
        </Card>
      </section>
    )
}