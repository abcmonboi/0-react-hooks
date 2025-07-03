import { H2Typo, LargeTypo, LeadTypo } from "@/components/typography";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React, { useState } from "react";

const CountNumber = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrese = () => {
    setCount(count + 1);
  };

  return (
    <Card>
      <CardHeader>
        <H2Typo>Giao diện tự thay đổi (re-render) khi state thay đổi</H2Typo>
        <LeadTypo>
          Khi muốn giao diện thay đổi theo dữ liệu mà không cần phải get và set
          lại Dom element thì sử dụng <b>setState</b>
        </LeadTypo>
      </CardHeader>
      <CardContent>
        <Button onClick={handleIncrese}>Increse Number</Button>
        <LargeTypo>Current number = {count} UI Change</LargeTypo>
        <LargeTypo>{count && `Render: ` + (count + 1)} </LargeTypo>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
};

export default CountNumber;
