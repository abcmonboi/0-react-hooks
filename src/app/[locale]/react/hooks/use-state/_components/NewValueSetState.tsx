import { H2Typo, LeadTypo } from "@/components/typography";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import React, { useState } from "react";

type inforProps = {
  name: string;
  age: string;
  jobs: string;
  hobby?: string;
};
const initialInfor: inforProps = {
  name: "Le Bac",
  age: "25",
  jobs: "front-ends",
};

export default function NewValueSetState() {
  const [infor, setInfor] = useState<inforProps>(initialInfor);

  const handleChangeInfor: () => void = () => {
    if (infor.hobby === "listen music") {
      setInfor(initialInfor);
      return;
    }
    setInfor((prev: inforProps) => {
      prev.name = "Tram ham";
      return {
        ...prev,
        hobby: "listen music",
      };
    });
  };

  return (
    <Card>
      <CardHeader>
        <H2Typo>
          {`Khi setState thì state được thay thế bằng một state mới hoàn toàn`}
        </H2Typo>
        <LeadTypo>
          State không giữ lại giá trị cũ. Nếu muốn chèn thêm giá trị cũ vào
          state mới sử dụng toán tử ...spread
        </LeadTypo>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div className="group mt-20 relative w-[50%] h-96 bg-white rounded-2xl shadow-xl transform hover:rotate-6 hover:-translate-y-6 transition duration-500 ease-in-out">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-md opacity-75 transform group-hover:scale-105 transition duration-500"></div>

          <div className="relative h-full flex flex-col items-center justify-center p-6 ">
            <span className="text-center text-3xl font-bold text-gray-200">
              {JSON.stringify(infor)}
            </span>

            <div className="flex justify-between items-center">
              <button
                onClick={handleChangeInfor}
                className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
              >
                Add Infor
              </button>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full shadow-2xl transform -translate-x-10 -translate-y-10 group-hover:scale-110 transition duration-500 ease-in-out"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tr from-green-400 to-blue-500 rounded-full shadow-2xl transform translate-x-8 translate-y-8 group-hover:scale-110 transition duration-500 ease-in-out"></div>
        </div>
      </CardContent>
    </Card>
  );
}
