import { H2Typo, LeadTypo, PTypo } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const MVC = () => {
  return (
    <Card>
      <CardHeader>
        <H2Typo className="flex items-center justify-between gap-2">
          {`Định Nghĩa Mô Hình MVC (Model View Controller)`}
          <Link href="/mvc">
            <Button>More</Button>
          </Link>
        </H2Typo>
        <LeadTypo>
          Mô hình <strong>MVC</strong> là một kiến trúc phần mềm phổ biến giúp
          tách biệt logic xử lý dữ liệu (<b>Model</b>), giao diện hiển thị (
          <b>View</b>) và điều phối luồng xử lý (<b>Controller</b>
          ). Điều này giúp mã nguồn dễ bảo trì, tái sử dụng và mở rộng.
        </LeadTypo>
      </CardHeader>
      <CardContent>
        <PTypo>
          <b>Model: </b> là nơi
        </PTypo>
      </CardContent>
    </Card>
  );
};

export default MVC;
