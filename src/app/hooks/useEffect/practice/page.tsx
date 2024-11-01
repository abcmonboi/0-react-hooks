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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid gap-7 min-h-[120vh]">
      <UseEffectWithDomEvents />
      <UseEffectWithDomEventsResize />
      <Button
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-center text-3xl py-10"
        size={"lg"}
      >
        Toggle Timer Countdown
      </Button>
      {isOpen && <UseEffectWithTimerFunctions />}
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
        <CardTitle>4.Listen Dom Event - Scroll Practice</CardTitle>
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
        <CardTitle>4.Listen Dom Event - Resize Practice</CardTitle>
      </CardHeader>
      <CardContent>
        <Button className="w-full px-9 py-8 text-2xl">{currentWidth}</Button>
      </CardContent>
    </Card>
  );
}

function UseEffectWithTimerFunctions() {
  const [countdown, setCountDown] = useState(180);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountDown((prev) => {
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  // setTimeout(() => {
  //   setCountDown((prev) => {
  //     return prev - 1;
  //   });
  // }, 1000);

  return (
    <Card className="translate-y-4 slide-in-from-top-2/3  ease-in-out transform-gpu transition-all">
      <CardHeader>
        <CardTitle>5. Use Effect with timers functions</CardTitle>
        <CardDescription className="text-red-500">
          ***Kiến thức cơ bản: setInterval, setTimeout, clearInterval,
          clearTimeout
        </CardDescription>
        <CardDescription>
          Hiểu được ý nghĩa và khi dùng (Closure)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CardDescription>BT. Đếm ngược (vẫn dùng state)</CardDescription>
        <CardDescription className="text-red-500">
          ***Nếu không đặt setInterval vào trong useEffect thì cũng sẽ bị như
          trường hợp gọi API đó là logic chạy trước khi component render UI
          (state đã set lại) --- Khi render UI xong thì state đã bị set lại ----
          Re-render --- chạy lại logic set state liên tục
          <br />
          --Khi dùng useEffect với các functions hàm đóng(closure). Hàm chỉ tạo
          1 lần thì không nên sử dụng các biến ngoài phạm vi. ví dụ:
          setState(state +1) ===vvv setState(prev prev+1)
        </CardDescription>

        <div className="flex gap-5  justify-center items-center ">
          <Button className="size-20 text-center text-3xl mt-20">
            {countdown}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default PracticeUseEffect;
