// components/MemberTable.tsx
import React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Member } from '@/types';

interface MemberTableProps {
  data: Member[];
}

const MemberTable: React.FC<MemberTableProps> = ({ data }) => {
  return (
    <Table className="min-w-full divide-y divide-gray-200">
      <TableHeader>
        <TableRow>
          <TableHead>เลขที่สมาชิก</TableHead>
          <TableHead>รหัสครอบครัว</TableHead>
          <TableHead>เลขประจำตัวประชาชน</TableHead>
          <TableHead>เบอร์โทรศัพท์</TableHead>
          <TableHead>ชื่อ - นามสกุล</TableHead>
          <TableHead>ที่อยู่</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((member) => (
          <TableRow key={member.memberId}>
            <TableCell>{member.memberId}</TableCell>
            <TableCell>{member.familyCode}</TableCell>
            <TableCell>{member.citizenId}</TableCell>
            <TableCell>{member.phone}</TableCell>
            <TableCell>{member.fullName}</TableCell>
            <TableCell>{member.address}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MemberTable;
