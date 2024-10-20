"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useEffect, useState } from "react";

const PracticeUseEffect = () => {
  return (
    <div className="grid gap-7 min-h-[120vh]">
      <UseEffectWithDomEvents />
      <UseEffectWithDomEventsResize />
    </div>
  );
};

function UseEffectWithDomEvents() {
  const [isShow, SetIsShow] = useState(false);

  useEffect(() => {
    const handleScrollWindow = () => {
      SetIsShow(window.scrollY >= 200);
    };
    window.addEventListener("scroll", handleScrollWindow);
    return () => {
      window.removeEventListener("scroll", handleScrollWindow);
    };
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>3.Listen Dom Event - Scroll Practice</CardTitle>
      </CardHeader>
      <CardContent>
        {" "}
        <li className="text-red-500">
          Tránh viết logic vào khác nhau vào 1 useEffect
        </li>
        <li className="text-red-500">
          Logic code của React vẫn là JS thuần nên khi sử dụng event muốn giao
          diện thay đổi theo dữ liệu thì vẫn sẽ dùng state
        </li>
        <li className="text-red-500">
          Nếu giá trị state mới = giá trị state cũ thì component vẫn sẽ không
          render lại.
        </li>
        <li className="text-red-500">
          Khi thêm sự kiện vào component sau khi component mounted thì khi
          component unmounted phải xóa event khỏi DOM. Tránh memory leak.
        </li>
        <li className="text-red-500">
          Xóa sự kiện thêm bằng clean up function(callback của useEffect trong
          đó có return).Dùng để dọn dẹp bộ nhớ khi unmounted component. Hàm sẽ
          được gọi trước khi component unmounted.
        </li>
      </CardContent>
      {isShow && (
        <Button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="fixed bottom-10 right-10 px-9 text-2xl py-8 rounded-full bg-customColors-lightBlue"
        >
          Back to top
        </Button>
      )}
    </Card>
  );
}

function UseEffectWithDomEventsResize() {
  const [currentWidth, SetCurrentWidth] = useState(0);

  useEffect(() => {
    SetCurrentWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWidth);
    function handleResizeWidth() {
      SetCurrentWidth(window.innerWidth);
    }
    return () => {
      window.removeEventListener("resize", handleResizeWidth);
    };
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>3.Listen Dom Event - Resize Practice</CardTitle>
      </CardHeader>
      <CardContent>
        <Button className="w-full px-9 py-8 text-2xl">{currentWidth}</Button>
      </CardContent>
    </Card>
  );
}
export default PracticeUseEffect;
