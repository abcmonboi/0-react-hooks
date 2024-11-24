"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
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
        Toggle Timer Countdown 5.
      </Button>
      {isOpen && <UseEffectWithTimerFunctions />}
      <UEWithCleanFuncPreviewAvatar />
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
    const id = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

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
          --Khi dùng useEffect với các functions hàm đóng(closure -
          setInterval). Hàm chỉ tạo 1 lần khi component mount(và các biến xử lý
          chỉ trong phạm vi hàm) thì không nên sử dụng các biến ngoài phạm vi.
          ví dụ: setState(state +1) ===vvv setState(prev prev+1) - sử dụng
          callback của hàm
        </CardDescription>
        <CardContent>
          <li>
            SetTimeOut: chạy logic callback 1 lần sau khi đếm.Vì vậy khi
            setState dù component re-render nhưng code trong callback Timeout
            cũng sẽ không chạy lại nữa.
          </li>
          <li>
            SetInterval: chạy logic callback mỗi lần sau khi đếm. Vì vậy state
            sẽ được set lại mỗi khi callback gọi và component re-render mỗi lần
            như vậy. Tuy nhiên logic trong useEffect sẽ không bị chạy lại vì
            deps là [] nên chỉ gọi 1 lần khi component mount.
          </li>
          <li className="text-red-500">
            Trường hợp đếm ngược sử dụng setInterval sẽ hợp lý hơn
          </li>
          <li className="text-red-500">
            Xoá timer function khi unmount. Tại vì logic trong interval sẽ vẫn
            chạy nếu không được xóa
          </li>
          <li className="text-red-500">
            Tóm gọn: Component có thể bị unmount bất kỳ trường hợp nào mà
            component có sử dụng: setinterval, settimeout, async bất đồng bộ,
            listener event, subcribe event . Thì khi unmount hãy return và xóa
          </li>
        </CardContent>
        <div className="flex gap-5  justify-center items-center ">
          <Button className="size-20 text-center text-3xl mt-20">
            {countdown}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

interface Avatar {
  preview?: string;
}

interface FileWithPreview extends File {
  preview: string;
}

function UEWithCleanFuncPreviewAvatar() {
  const [count, setCount] = useState(0);
  const [avatar, setAvatar] = useState<Avatar>({});

  useEffect(() => {
    if (count === 0) console.log("Component-Mounted");
    if (count !== 0) console.log("Component-Rerender- mount lần ", count);
    // Khi re-render component thì phần clean up function này sẽ được chạy trước rồi mới đến ở trên
    // Nó sẽ dọn dẹp lần mount trước
    return () => console.log("Component-unmounted - clean lần ", count);
  }, [count]);

  const handlePreviewAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0] as FileWithPreview;
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };

  useEffect(() => {
    return () => {
      avatar?.preview && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);

  return (
    <>
      <Card className="translate-y-4 slide-in-from-top-2/3  ease-in-out transform-gpu transition-all">
        <CardHeader>
          <CardTitle>6. Cleanup function</CardTitle>
          <CardDescription>
            Đó là khi bạn sử dụng useEffect và trong callback return về một hàm.
            Thì hàm này được gọi là cleanup function hay còn gọi là hàm dọn dẹp
          </CardDescription>
          <CardDescription className="text-red-500">
            Hàm dọn dẹp luôn được gọi trước khi component unmount
          </CardDescription>
          <CardDescription className="text-red-500">
            **Hàm dọn dẹp (clean up function) luôn được gọi trước callback (trừ
            lần mounted đầu tiên) mỗi khi component re-render - Demo with
            counting Exercise
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button
            onClick={() => setCount((prev) => prev + 1)}
            className="text-xl h-40 px-4"
          >
            {" "}
            Counting + {count}
          </Button>
        </CardContent>
      </Card>
      <Card className="translate-y-4 slide-in-from-top-2/3  ease-in-out transform-gpu transition-all">
        <CardHeader>
          <CardTitle>6. Cleanup function with preview Avatar</CardTitle>
          <CardDescription>
            Demo cho việc cần dọn dẹp component cũ trước khi re-render. Xoá bộ
            nhớ lưu tạm ảnh cũ sau khi đã xét ảnh mới
          </CardDescription>
          <CardDescription className="text-red-500">
            Xử lý việc Tạo các object URL nhưng khi không sử dụng ở component
            mới không clear đi
          </CardDescription>
          <CardDescription className="text-red-500">
            **(clean up function) luôn được gọi trước callback (trừ lần mounted
            đầu tiên) mỗi khi component re-render - Practice with preview Image
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <div className="">
            <h3>URL BLOB IMAGE: {avatar.preview}</h3>
            <label htmlFor="fileSelect">Select File</label>
            <input
              onChange={(e) => handlePreviewAvatar(e)}
              type="file"
              id="fileSelect"
            ></input>
            <Avatar>
              <AvatarImage src={avatar?.preview} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default PracticeUseEffect;
