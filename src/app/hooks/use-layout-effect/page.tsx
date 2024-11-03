import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>useLayoutEffect() hook</CardTitle>
        <CardDescription>
          Giống với useEffect tuy nhiên khác các bước thực hiện. Sau đây là nội
          dung thay đổi
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-12">
          <div className="col-span-6  border-r-2">
            <h5 className="text-center text-black mb-4">
              useLayoutEffect() hook
            </h5>
            <ul>
              <li className="first-letter:text-red-500">1. Cập nhật State</li>
              <li className="first-letter:text-red-500">
                2. Cập nhật Dom(mutated)- Chỉ thay đổi thuộc tính đã thay đổi
                trong Dom
              </li>
              <li className="first-letter:text-red-500">
                3. Gọi cleanup func trong useLayoutEffect
              </li>
              <li className="first-letter:text-red-500">
                4. Gọi callback trong useLayoutEffect
              </li>
              <li className="first-letter:text-red-500">5. Return UI</li>
            </ul>
          </div>
          <div className="col-span-6 ml-[2rem]">
            <h5 className="text-center text-black  mb-4">useEffect() hook</h5>
            <ul>
              <li className="first-letter:text-red-500">1. Cập nhật State</li>
              <li className="first-letter:text-red-500">
                2. Cập nhật Dom(mutated)- Chỉ thay đổi thuộc tính đã thay đổi
                trong Dom
              </li>
              <li className="first-letter:text-red-500">3. Return UI</li>
              <li className="first-letter:text-red-500">
                4. Gọi cleanup function trong useEffect
              </li>
              <li className="first-letter:text-red-500">
                5. Gọi callback trong useEffect
              </li>
            </ul>
          </div>
        </div>
        <Link
          href={"use-layout-effect/practice"}
          className="btn bg-slate-500 text-white rounded-3xl mt-4 text-center text-2xl  py-4 px-6"
        >
          See Demo
        </Link>
      </CardContent>
    </Card>
  );
};

export default page;
