import { H2Typo } from "@/components/typography";
import { Card, CardHeader } from "@/components/ui/card";
import React from "react";

const page = () => {
  return (
    <Card>
      <CardHeader>
        <H2Typo>{`Định Nghĩa Mô Hình MVC (Model View Controller)`}</H2Typo>
      </CardHeader>
    </Card>
  );
};

export default page;
