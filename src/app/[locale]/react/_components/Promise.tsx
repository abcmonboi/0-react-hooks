"use client";

import React, { useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  BlockquoteTypo,
  H2Typo,
  InlineCodeTypo,
  LargeTypo,
  ListTypo,
  SmallTypo,
} from "@/components/typography";

const NOTIFICATIONS = [
  {
    title: `Async: Là các hàm, các tác vụ bất đồng bộ: có nghĩa là
    dù tác vụ này có được khai báo trước hay không 
    thì chưa chắc nó sẽ được xử lý xong trước tác vụ câu lệnh phía sau.`,
    required: false,
  },
  {
    title: `Sync(synchorus): Là các hàm, các tác vụ đồng bộ: có nghĩa là
    tác vụ này được khai báo trước thì chắc chắn nó sẽ được xử lý xong trước tác vụ câu lệnh phía sau.
    Hay ta còn gọi là tuần tự.`,
    required: false,
  },
  {
    title: `Chúng ta sử dụng hàm callback để gọi lại và xử lý các tác vụ khi dùng 
    các tác vụ bất đồng bộ,async . Ví dụ setTimeOut sau 1 giây thì ta callback gọi console ra 1
    `,
  },
  {
    title: `Vấn đề khi sử dụng callback là ở trường hợp
      có nhiều tác vụ bất đồng bộ lồng nhau
      hay nói cách khác là tác vụ bất đồng bộ này phải
      chờ tác vụ bất đồng bộ kia, phụ thuộc vào tác vụ bất đồng bộ kia
      thì mới được thực thi tiếp theo.
      Dẫn tới việc nếu nhiều tác vụ bất đồng bộ lồng nhau
      thì code sẽ rất khó đọc, khó bảo trì và khó debug.
      Và nó sinh ra khói niệm đó là Callback Hell.
      `,
  },
  {
    title: `Vậy nên để giải quyết các vấn đề bất đồng bộ 
    mà lại phụ thuộc vào nhau, lồng nhau nhiều tầng 
    thì mới sinh ra Promise - một khái niệm để giải quyết các vấn đề này.
    Đây là nỗi đau mà chúng ta cần giải quyết.
    `,
  },
  {
    title: `Cách tạo ra 1 Promise:
    const myPromise = new Promise((resolve, reject) => {
      // Thực hiện tác vụ bất đồng bộ ở đây
      // Gọi resolve(value) khi tác vụ thành công
      // Gọi reject(error) khi tác vụ thất bại
    });
    mà lại phụ thuộc vào nhau, lồng nhau nhiều tầng 
    thì mới sinh ra Promise - một khái niệm để giải quyết các vấn đề này.
    Đây là nỗi đau mà chúng ta cần giải quyết.
    `,
  },
];

const Promise = () => {
  const [task, setTask] = React.useState("");
  useEffect(() => {
    const id = setTimeout(() => {
      setTask("Task 1");
      setTimeout(() => {
        setTask("Task 2");
        setTimeout(() => {
          setTask("Task 3");
          setTimeout(() => {
            setTask("Task 4");
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
    return () => clearTimeout(id);
  }, []);

  return (
    <Card>
      <CardHeader>
        <H2Typo>Promise:</H2Typo>
      </CardHeader>
      <CardContent>
        <ListTypo>
          {NOTIFICATIONS.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ListTypo>
        <ListTypo>
          Demo về CallBack Hell - Đếm ngược nếu không dùng interval
        </ListTypo>
        <ListTypo>
          <BlockquoteTypo>
            <pre>
              <code>
                {`const id = setTimeout(() => {
  console.log("Task 1");
  setTimeout(() => {
    console.log("Task 2");
    setTimeout(() => {
      console.log("Task 3");             ${task}
      setTimeout(() => {
        console.log("Task 4");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
return () => clearTimeout(id);`}
              </code>
            </pre>
          </BlockquoteTypo>
          <br />
          <SmallTypo>
            {`=>`} Dẫn tới việc nếu nhiều tác vụ bất đồng bộ lồng nhau. Với
            trường hợp xử lý chờ api này xong mới xử lý tiếp api tiếp theo thì
            code sẽ rất khó đọc, dài dòng, lồng nhau quá nhiều.
          </SmallTypo>
          <br />

          <br />

          <LargeTypo>
            Promise. Sinh ra để giải quyết vấn đề Callback Hell này. ES6. Khi
            gặp hell mới cần dùng Promise. Nếu không thì cứ dùng callback bình
            thường. Promise nhận vào 1 hàm (executor) với 2 tham số là resolve
            và reject. Khi gọi tới promise thì ngay lập tức hàm executor sẽ được
            thực thi. Logic xử lý được viết bên trong hàm. Khi thành công ta gọi
            hàm resolve() và khi thất bại ta gọi hàm reject().
          </LargeTypo>
          <BlockquoteTypo>
            Nếu không gọi 1 trong 2 hàm resolve hoặc reject thì promise thì sẽ
            bị memory leak (rò rỉ bộ nhớ) vì promise sẽ không bao giờ kết thúc.
          </BlockquoteTypo>
          <BlockquoteTypo>
            Sau khi tạo xong hàm executor thì ta nhận được về 1 đối tượng
            promise. Đối tượng này trả về 3 phương thức là: then(), catch() và
            finally(). 3 phương thức này đều nhận vào 1 hàm callback. Khi
            promise được giải quyết thành công (gọi hàm resolve) thì phương thức
            then() sẽ được gọi. Khi promise bị từ chối (gọi hàm reject) thì
            phương thức catch() sẽ được gọi. Phương thức finally() sẽ được gọi
            sau khi promise được giải quyết thành công hoặc bị từ chối.Có nghĩa
            là 1 trong 2 hàm resolve hoặc reject được gọi. <br /> 1.Pending:
            trạng thái chờ, chưa được giải quyết hoặc bị từ chối.
            <br /> 2.Fulfilled: trạng thái đã được giải quyết thành công.
            <br /> 3.Rejected: trạng thái đã bị từ chối.
            <br /> Khi resolve có thể trả về 1 dữ liệu bất kỳ, data từ api
            ,....... {`then result `}
            <br />
            Khi reject có thể trả về 1 lỗi bất kỳ, trả về gì thì lấy cái đó.
            catch error
          </BlockquoteTypo>
          <BlockquoteTypo>
            <pre>
              <code>
                {`var promise = new Promise((resolve,reject) => {
  setTimeout(() => {
    console.log("Task 1");
    setTimeout(() => {
      console.log("Task 2");
      setTimeout(() => {
        console.log("Task 3");
        setTimeout(() => {
          console.log("Task 4");
          resolve("Done");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
});

task.then((result) => console.log(result));`}
              </code>
            </pre>
          </BlockquoteTypo>
          <LargeTypo>
            Chain: Tính chất chuỗi.
            <br />
            Promise có tính chất chuỗi. Có nghĩa là sau khi gọi phương thức
            then() ta có thể tiếp tục gọi thêm phương thức then() khác. Mỗi lần
            gọi then() thì sẽ nhận vào 1 hàm callback với tham số là kết quả trả
            về từ lần gọi then() trước đó nó là phần return . Tương tự với
            catch(). Nếu trong chuỗi có lỗi xảy ra thì catch() sẽ được gọi và
            nhận vào tham số là lỗi đó. Nhưng nó sẽ theo dạng chuỗi từng bước
            một. Nếu trong then() có trả về 1 promise khác thì promise đó sẽ
            được giải quyết trước khi gọi phương thức then() tiếp theo trong
            chuỗi. Điều này giúp ta có thể xử lý các tác vụ bất đồng bộ một cách
            tuần tự và dễ dàng hơn. Nó sẽ không bị lồng nhau nữa mà thành dạng
            chuỗi dọc.
          </LargeTypo>
          <SmallTypo>
            Nếu không return gì trong then() thì tham số truyền vào cho then()
            tiếp theo sẽ là undefined.
          </SmallTypo>
          <SmallTypo>
            Trong function của then nếu không phải là return ra 1 Promise thì
            then tiếp theo sẽ chạy ngay lập tức với giá trị return. Còn nếu là 1
            Promise thì phải chờ Promise đó resolve xong mới chạy then tiếp
            theo.
          </SmallTypo>
          <BlockquoteTypo>
            <pre>
              <code>
                {`const task = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Start Task 1");
    resolve("Task 1 done");
  }, 3000);
})
  .then((result) => {
    console.log(result);
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Start Task 2");
        resolve("Task 2 done");
      }, 3000);
    });
  })
  .then((result) => {
    console.log(result);
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Start Task 3");
        resolve("Task 3 done");
      }, 3000);
    });
  })
  .then((result) => {
    console.log(result);
    console.log("All tasks completed!");
  });`}
              </code>
            </pre>
          </BlockquoteTypo>
        </ListTypo>
      </CardContent>
    </Card>
  );
};

export default Promise;
