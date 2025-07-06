"use client";
import { H2Typo, H4Typo, ListTypo } from "@/components/typography";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useReducer } from "react";

const initState = 0;

const UP_ACTION = "up";
const DOWN_ACTION = "down";

function reducer(state: number, action: string) {
  switch (action) {
    case "up":
      return state + 1;
    case "down":
      return state - 1;
    default:
      throw new Error("Invalid action");
  }
}
const UseReducerDemo = () => {
  const [count, dispatch] = useReducer(reducer, initState);
  console.log("current State", count);

  return (
    <Card>
      <CardHeader>
        <H2Typo>
          useReducer() - Không áp dụng cho các trường hợp state cơ bản.
        </H2Typo>

        <CardContent>
          <ListTypo>
            <li className="marker:text-red-500">
              init State (Có thể là hằng hoặc biến). Nếu không update lại state
              thì nên tạo bằng hằng. <b>const initState = </b>
            </li>
            <li className="marker:text-red-500">
              Tạo Action: là hằng và viết hoa tất cả. Cách nhau bằng _.VD:{" "}
              <b>const UP_ACTION = `up`</b>
            </li>
            <li className="marker:text-red-500">
              Tạo Reducer(đơn giản thì nó chỉ là 1 hàm). Có tên hàm là reducer.
              Với việc nhận input đầu vào là state(trạng thái hiện tại) và
              action type để ra trả output là 1 state mới theo action được
              truyền vào.{" "}
              <span className="text-red-500 block">
                *Switch case nên có default là throw new Error để catch các
                trường hợp value inValid
              </span>
              <span className="text-red-500 block">
                Output của hàm bắt buộc bải luôn cùng type với initState(bảo lưu
                dữ liệu)
              </span>
              <span className="text-red-500 block">
                Do đó reducer là 1 hàm. Vậy nên khi nào ta dùng thì mới cần gọi
                ? Vậy gọi như thế nào ?
              </span>
            </li>
            <li className="marker:text-red-500">
              Dispatch. gọi reducer bằng cách sử dụng hàm trả về trong hook
              useReducer. useReducer nhận vào 3 đối số (hàm reducer, init state,
              initializer: là optional nếu truyền vào nhận giá trị truyền vào
              không thì là undefined) và sẽ trả về tương tự <b>useState</b> là 1
              mảng gồm
              <b>[state, dispatch]</b>. Với dispatch dùng để kích hoạt action.
              Xem action được truyền vào là gì thì sẽ thực hiện hàm reducer để
              trả về state.
              <span className="text-red-500 block">
                Dù chúng ta gọi hook useReducer và gọi hàm reducer() trong hook.
                Tuy nhiên với lần khởi tạo đầu tiên hàm reducer() sẽ không chạy.
              </span>
              <span className="text-red-500 block">
                Cách gọi: dispatch(ACTION).
              </span>
              <span className="text-red-500 block">
                Một điều chắc chắn là đây vẫn là state, nên component sẽ vẫn
                re-render.
              </span>
            </li>
          </ListTypo>
          <H4Typo>Practice Small Demo with useReducer</H4Typo>
          <H4Typo>Current Value: {count}</H4Typo>
          <div className="flex gap-4">
            <Button onClick={() => dispatch(UP_ACTION)}>Up</Button>
            <Button onClick={() => dispatch(DOWN_ACTION)}>Down</Button>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default UseReducerDemo;
