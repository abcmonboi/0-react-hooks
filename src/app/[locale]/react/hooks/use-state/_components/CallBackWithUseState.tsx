import {
  BlockquoteTypo,
  H2Typo,
  H4Typo,
  InlineCodeTypo,
  LeadTypo,
  ListTypo,
} from "@/components/typography";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import React, { useState } from "react";

const CallBackWithUseState = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrese = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <Card>
      <CardHeader>
        <H2Typo>{`callBack với useState () => {}`}</H2Typo>
        <LeadTypo>
          Mục đích sử dùng là để trả ngay lại giá trị state cho các dòng code
          phía sau
        </LeadTypo>
      </CardHeader>
      <CardContent>
        <H4Typo>
          <b>Vấn đề:</b> Khi setState thì giá trị sẽ không được tăng lên ngay.
        </H4Typo>
        <ListTypo>
          <li>
            Ví dụ: <InlineCodeTypo>setCount(count+1);</InlineCodeTypo>
          </li>
          <li>setCount(count+1);</li>
          <li>setCount(count+1);</li>
          <BlockquoteTypo>
            {`=> Code phía trên sẽ set lại state 3 lần (render 1 times) và count sẽ được +1`}
          </BlockquoteTypo>
        </ListTypo>
        <H4Typo>
          <b>Giải pháp:</b> Sử dụng hàm callBack với setState
        </H4Typo>
        <ListTypo>
          <li>
            Ví dụ:{" "}
            <InlineCodeTypo>{`setCount((prev) => prev + 1)`};</InlineCodeTypo>
          </li>
          <li>{`setCount((prev) => prev + 1);`}</li>
          <li>{`setCount((prev) => prev + 1);`}</li>
        </ListTypo>
        <BlockquoteTypo>
          {`=> Code phía trên sẽ set lại state 3 lần (render 1 time) và count sẽ được +3`}
        </BlockquoteTypo>
        <H4Typo>Current number = {count} UI Change</H4Typo>
        <Button onClick={handleIncrese}>Increse Number</Button>
      </CardContent>
    </Card>
  );
};

export default CallBackWithUseState;
