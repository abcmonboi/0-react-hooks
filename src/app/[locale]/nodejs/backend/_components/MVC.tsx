import { H2Typo } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const MVC = () => {
  return (
    <Card>
      <CardHeader>
        <H2Typo className="flex">
          {`Định Nghĩa Mô Hình MVC (Model View Controller)`}
          <Link href={"/mvc"}>
            <Button>More</Button>
          </Link>
        </H2Typo>
      </CardHeader>
    </Card>
  );
};

export default MVC;
