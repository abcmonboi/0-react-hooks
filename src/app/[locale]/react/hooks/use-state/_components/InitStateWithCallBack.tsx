import { H2Typo, H4Typo, LeadTypo, PTypo } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React, { useState } from "react";

const orders = [100, 200, 300];
/**
 * Component to demonstrate the use of a callback function for initializing state in React.
 * It calculates the total of an array and sets it as the initial state value.
 */
export default function InitStateWithCallBack() {
  const [count, setCount] = useState<number>(() => {
    const total = orders.reduce((total, cur) => total + cur);
    return total;
  });
  const handleIncrese = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <Card>
      <CardHeader>
        <H2Typo>
          {`Sử dụng hàm callBack làm giá trị khởi tạo cho state (initState)`}
        </H2Typo>

        <LeadTypo>
          Truyền hàm vào initState thì giá trị được gán vào là{" "}
          <b>giá trị return</b> của hàm.
        </LeadTypo>
      </CardHeader>
      <CardContent>
        <PTypo>
          Khi hàm được sinh ra để tính giá trị ban đầu cho state thì nên cho vào
          <b> CallBack</b> để tránh mỗi lần render lại tạo 1 hàm không cần thiết{" "}
        </PTypo>
        <PTypo>
          {`const orders = [100, 200, 300]; Cần tính tổng của mảng orders`}
        </PTypo>
        <PTypo>
          {` Vấn đề: Khi sử dụng useState(orders.reduce((total, cur) =>
          total + cur)) thì mỗi lần render lại sẽ tính lại giá trị của hàm
          orders.reduce((total, cur) => total + cur) và sẽ render lại giao diện`}
        </PTypo>
        <PTypo>
          {`=> Giải pháp: Sử dụng hàm callBack để tính giá trị ban đầu`}
        </PTypo>
        <PTypo>
          Cách xử lý:
          {`    const [count, setCount] = useState(() => {
      const total = orders.reduce((total, cur) => total + cur);
    });`}
        </PTypo>

        <H4Typo>Current number = {count} UI Change</H4Typo>
        <br />
        <Button onClick={handleIncrese}>Increse Number</Button>
      </CardContent>
    </Card>
  );
}
