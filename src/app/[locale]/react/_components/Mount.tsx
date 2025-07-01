import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BlockquoteTypo, H2Typo, ListTypo } from "@/components/typography";
import MouteEx from "@/app/[locale]/react/_components/MountEx";

const NOTIFICATIONS = [
  {
    title: "Gán và Gỡ Component Vào DOM",
    required: false,
  },
  {
    title:
      "Mounted là khi component được đưa vào React.Element trước khi vào DOM",
  },
  {
    title:
      "UnMounted là khi component được gỡ khỏi DOM và trước khi rời React.Element",
  },
  {
    title: "Viết Biểu thức điều kiện để 1 component unmount sử dụng useEffect",
  },
];

const Mount = () => {
  return (
    <Card>
      <CardHeader>
        <H2Typo>Mounted / UnMounted:</H2Typo>
      </CardHeader>
      <CardContent>
        <ListTypo>
          {NOTIFICATIONS.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ListTypo>
        <ListTypo>Demo về việc Component Mount Unmount khỏi DOM</ListTypo>
        <MouteEx />
      </CardContent>
    </Card>
  );
};

export default Mount;
