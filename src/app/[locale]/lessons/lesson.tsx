import { CardDescription } from "@/components/ui/card";
import { ReactNode } from "react";

export type Lesson = {
  id: number;
  label: string;
  description?: string;
  content: ReactNode;
};

export const LESSONS: Lesson[] = [
  {
    id: 1,
    label: "ReactJS là gì ?",
    content: (
      <>
        <li>
          Một thư viện được viết bởi Javascript cho việc xây dựng nên giao diện
          người dùng
        </li>
        <h5>Tại sao nên học React</h5>
        <li className="marker:text-red-500">Thư viện đông đảo người dùng</li>
        <li>Thân thiện với SEO(Search Engine Optimization)</li>
        <li>Dễ mở rộng và tái sử dụng cao với việc kiến trúc chia component</li>
        <li>
          Khả năng tương thích ngược (Có thể update lên các version khác mà
          không sợ mất method)
        </li>
      </>
    ),
  },
  {
    id: 2,
    label: "Single Page Application / Multiple Page Application ?",
    description: "Ứng dụng trang đơn và ứng dụng nhiều trang",
    content: (
      <>
        <li className="marker:text-red-500">
          React chỉ là 1 trong những trang đang sử dụng phương pháp 1 trang đơn
        </li>
        <li className="marker:text-red-500">
          Không yêu cầu trang tải lại (đó là Single App Application - Kiến trúc,
          phương pháp)
        </li>
        <li className="marker:text-red-500">
          Cả 2 phương pháp kiến trúc sẽ thích hợp cho từng hoàn cảnh. Hãy theo ý
          kiến khách hàng. Nếu cần nhanh chóng ko phát triển thêm sau này hãy
          chọn MPA
        </li>
        <li className="marker:text-red-500">
          MPA là việc render trang sẽ bên phía sever và sẽ trả về trang HTML
          hoàn chỉnh. Việc phát triển có thể chỉ cần 1 bộ phận ko cần tách lẻ từ
          đó suy ra có thể làm việc nhanh chóng. Cũng không cần quá chuyên sâu
          về JS. Chi phí thấp nhân sự cần ít.Tuy nhiên nếu sau này mở rộng sẽ
          khó hơn(ví dụ như cần phát triển thêm mobile app hay scale ứng dụng)
        </li>
        <li className="marker:text-red-500">
          SPA chia ra 2 bên phát triển riêng biệt BE và FE.Và việc sử dụng JS là
          bắt buộc vì dựa theo Client sever side, khi sever trả về thì thực chất
          trả về 1 HTML rỗng kèm với file JS, thiết bị đầu cuối sẽ chờ file JS
          được trả về để thực hiện render ra giao diện.(chờ script). Từ đó dẫn
          đến việc nếu không tối ưu tốt file JS thì lần tải đầu sẽ bị mất thời
          gian.
        </li>
      </>
    ),
  },
  {
    id: 3,
    label: "Arrow function",
    description: "Hàm mũi tên",
    content: (
      <>
        <li>Hàm thông thường:</li>
        <code>function name(params:type) {}</code>
        <code>name(args)</code>
        <li className="marker:text-red-500">Sinh ra để viết ngắn gọn hơn</li>
        <li>
          <span>Thay vì</span>
          <code>
            {` function name(params:type) {
            return a+b
          }`}
          </code>
          <span> Ta có thể viết bằng arrow function </span>
          <code>
            {`const name = (params:type) => 
             a+b
          `}
          </code>
        </li>
        <li>Nếu muốn return ra 1 object thì bọc bởi dấu ngoặc đơn ()</li>
        <li>
          Nếu tham số chỉ có 1 thì có thể bỏ dấu ngoặc đơn{" "}
          <code>{`(param){}`}</code>
          <br />
          <code>{`= param =>{}`}</code>
        </li>
        <li className="marker:text-red-500">
          Arrow function không có this(hay là context) nói chính xác hơn thì
          không dùng để tạo đối tượng được. Vì không phải 1 constructor (hàm tạo
          cho đối tượng)
        </li>
        <li className="marker:text-red-500">
          Hàm tạo (Constructor) <br />
          <code>
            {`function User(name:string,age:number) {
                name = this.name;
                age = this.age;
                getName = function () {
                  return this.name
                }
              }`}
          </code>
        </li>
      </>
    ),
  },
  {
    id: 4,
    label: "Enhanced object literals - Nâng cao thêm về xử lý object",
    content: (
      <div className="grid gap-4">
        <CardDescription>
          Giúp chúng ta cải thiện việc khai báo và xử lý object
        </CardDescription>
        <li className="marker:text-red-600">
          Định nghĩa key:value cho object{" "}
          <pre>
            var name = &quot;Bac&quot;,
            <br />
            var age = &quot;18&quot;,
            <br />
            var User =
            {` {
          name : name,
          age : age
          }`}
            <br />
            <b>Có thể viết ngắn gọn bằng cách</b>
            <br />
            var User ={" "}
            {`{ 
  name, 
  age     }`}
          </pre>
        </li>
        <li className="marker:text-red-600">
          Định nghĩa method cho 1 object
          <pre>
            var User =
            {` {
          name : name,
          age : age
          getName : function()
          {
          return name;
          }
}`}
            <br />
            <b>Có thể viết ngắn gọn bằng cách</b>
            <br />
            var User =
            {` {
          name : name,
          age : age
          getName() => name 
          (hoặc getName() => 
          {
          return name
          } )
}`}
          </pre>
        </li>
        <li className="marker:text-red-600">
          Định nghĩa key của object dưới dạng biến
          <pre>
            var objectKey = &quot;nameKey&quot;; =&gt; có thể dynamic được tên
            key, giúp linh động và ngắn gọn
            <br />
            var User =
            {` {
          [objectKey] : name,
          age : age
          getName()=> name 
}`}
            <br />
            <b>Bài tập convert Array sang object sử dụng hàm reducer</b>
            <br />
            Cho một mảng với với các phần tử là 1 mảng gồm 2 phần tử chứa key và
            value. <br />
            VD arr =
            [[&quot;key1&quot;,&quot;value1&quot;],[&quot;key2&quot;,&quot;value2&quot;]]
            <br />
            Dùng hàm reduce để chuyển mảng này thành 1 object.
            <br />
            Xử lý:
            <pre className="font-bold">
              const arrToObj = arr: string|number[][] =&gt;{" "}
              {`{
return arr.reduce(
(preValue:Record<string| number,string>, [arr01,arr02]) => {
                prevValue[arr01] = arr02;
                return prevValue;
},{}
);
};`}
            </pre>
            <br />
          </pre>
        </li>
      </div>
    ),
  },
  {
    id: 5,
    label: "Destructuring - bóc tách ",
    content: (
      <div className="grid gap-4">
        <CardDescription>
          Destructuring: việc bóc tách, việc phân rã các thành phần trong object
          và array (Chỉ sử dụng đối với object và array)
          <br />
          Giúp chúng ta lấy trực tiếp các phần tử bên trong array, object mà
          không cần duyệt qua từng phần tử.
          <br />
          Với mỗi kiểu dữ liệu sẽ lấy theo dấu của kiểu dữ liệu đó object là `
          {`{}`}` và array là `[]`
        </CardDescription>
        <li className="marker:text-red-600">
          Sử dụng với object.
          <pre>
            {`  const user = {
    name: "name1",
    age: 18,
    getName: () => {
      return name;
    },
    getNextAge: () => {
      return age + 1;
    },
  };
 `}
            <br />
            <b>Có thể lấy ra các key trong object bằng cách:</b>
            <br />
            {`  const { name, age, getName, getNextAge } = user;
  console.log(getName());
  console.log(getNextAge()); `}
          </pre>
          <br />
          <b>Nếu key không có trong object thì sẽ có value: undefine</b>
        </li>
        <li className="marker:text-red-600">
          Sử dụng với array
          <pre>
            {`   
const arr = ["Bac", 18, "getName", "getNextAge"];
`}
            <br />
            <b>Có thể lấy ra bằng cách:</b>
            <br />
            {`
const [name, age, , getNextAge] = arr;

Nếu không lấy phần tử nào thì ta sẽ để khoảng trống ", ," cho nó

console.log(name);
console.log(age);
console.log(getNextAge);
`}
            <br />
          </pre>
        </li>
        <h3>...Rest - Các phần tử còn lại</h3>
        <CardDescription>
          Là một toán tử giúp lấy những phần tử còn lại trong array,object.{" "}
          <b>
            Nó sẽ trả về 1 Object chứa cặp key value còn lại. Tất nhiên sẽ không
            có những phần từ lấy ra trước đó. (Một cách giúp xóa key trong
            object)
          </b>
          <br />
          Nó giống với 1 toán tử dải spread tuy nhiên cách thức hoạt động hoàn
          toàn khác nhau
          <br />
          Chỉ sử dụng kết hợp với <b>Destructuring</b>
          <br />
          Sử dụng khi func nhận vào các đối số được truyền (...args) - Đây là
          toán tử rest dải phần còn lại <b>trả về 1 mảng Array</b>
          <br />
        </CardDescription>
        <pre>
          {`
  const disCount15Percent = (...args: unknown[]) => {
    if (!args[0]) return;
    if (args[0]) {
      return args[0] - args[0] * (args[1] / 100) - args[2];
    }
  };
  console.log(disCount15Percent("6910000", 15, "200000"));
  `}
        </pre>
        <li className="marker:text-red-500">
          Ví dụ về cách hoạt động
          <pre>
            {` 
var arr = [a,b,c,d];

var [a,b,...rest] = arr;

=> clg(rest) = c,d

<=> var [a, b, c, ...rest] = arr;

=> clg(rest) = d

}`}
          </pre>
        </li>
        <li className="marker:text-red-500">
          Ví dụ nâng cao về trường hợp trong object lại chứa 1 object con.
          <pre>
            {` 
  const course = {
    name: "Javascript",
    totalChapter: 12,
    children: {
      name: "React",
      totalChapter: 5,
    },
  };

  const {
    name,
    totalChapter,
    children: { name: ReactName, totalChapter: ReactChapter },
    totalPage = 21
  } = course;


  console.log("name", name);
  console.log("totalChapter", totalChapter);
  console.log("ReactName", ReactName);
  console.log("ReactChapter", ReactChapter);
  console.log("totalPage", totalPage);

}`}
            <br />
            <b>
              Ta cần sử dụng &quot;:&quot; hay còn gọi là alias để thay đổi tên.
            </b>
            <br />
            <b>
              Trong trường hợp key lấy ra từ object không được định nghĩa trong
              object. Ta vẫn có thể gán giá trị mặc định cho nó bằng dấu
              &quot;=&quot;
            </b>
          </pre>
        </li>
      </div>
    ),
  },
  {
    id: 6,
    label: "Spread - Dải ra (bổ sung cho toán tử rest) ",
    content: (
      <div className="grid gap-4">
        <CardDescription>
          Là 1 toán tử cũng được sử dụng để xử lý object và array.
          <br />
          Dùng để nối các phần tử trong các object hoặc mảng lại với nhau.
          <br />3 chấm &quot;...&quot; sẽ bỏ đi dấu ngoặc của khai báo object
          hoặc mảng và chỉ còn các phần tử bên trong
          <br />
          Sử dụng để truyền nhanh các tham số vào hàm.
          <br />
        </CardDescription>
        <pre>
          {`
const disCount15Percent = (
    value: number,
    discount: number,
    vouncher: number
  ): number | undefined => {
    if (!value || value <= 0 || discount < 0 || vouncher < 0) return;
    return value - value * (discount / 100) - vouncher;
  };
  const arr = [6900100, 15, 200000] as const;
  console.log(disCount15Percent(...arr));
`}
        </pre>
        <br />
        <pre>
          {`
  const arr = ["a", "b", "c", "d"];

  console.log(...arr);

  const arr2 = ["c", "d", "e", "f"];

  console.log(...arr2);

  console.log([...arr, ...arr2]);
  
  Dòng cuối sẽ log ra 1 mảng gồm các phần tử của mảng 1 + mảng 2.

`}

          <b>
            Đối với object tương tự. Tuy nhiên nếu trùng key value thì key value
            khai báo sau sẽ được ghi đè.
          </b>
          <br />
          <pre></pre>
        </pre>
      </div>
    ),
  },
  {
    id: 7,
    label: "Modules(Mô đu ờ ES6) - Bóc tách file nhỏ ra ",
    content: (
      <div className="grid gap-4">
        <CardDescription>
          Bóc tách các func ra 1 file, tách nhỏ ra để phục vụ cho 1 chức năng
          hoặc 1 mục đích sử dụng.
        </CardDescription>
        <li>
          Hiểu đơn giản là tính năng mới được giới thiệu ở ES6 giúp người dùng
          có thể export các hàm, file và có thể import vào file JS khác bằng
          cách sử dụng type modules
        </li>
        <li>
          Một module chỉ có thể export default 1 và chỉ 1. Tuy nhiên thì export
          thường bao nhiêu cũng được. Nếu export nhiều func trong 1 module thì
          khi import nên sử dụng Destructuring để lấy.
          <br />
          <pre>
            export const disCount15Percent <br />
            export const arrToObj
            <br />
            {`=>
import {(disCount15Percent, arrToObj)} from "../../lesson";`}
          </pre>
        </li>
        <li>
          Import * as <b>alias</b> là lấy ra tất cả dưới dạng 1 object mang tên{" "}
          <b>alias</b> chứa các hàm được export
        </li>
        <li>
          Nếu không phải dùng Destructuring import thì mặc định đó là import
          default
        </li>
        <pre>
          {`
Có thể dùng export{" "} {default} from cùng cấp thay vì dùng import rồi export.

export { default as alias } from index. 

Cách viết tắt ở file trung gian (index cùng cấp)        
        `}
        </pre>
      </div>
    ),
  },
  {
    id: 8,
    label: "Document.createElement() - DOM",
    content: (
      <div className="grid gap-4">
        <CardDescription>
          Giúp chúng ta tạo ra 1 phần tử trong dom(trong bộ nhớ).Tuy nhiên vẫn
          chưa được thể hiện ra giao diện người dùng bằng việc chưa append vào
          các cây(element node) trong DOM
          <br />
          Nó là 1 method nằm trong đối tượng Document.
          <br />
          Lý giải cho câu hỏi tại sao React có thể render ra giao diện người
          dùng.
        </CardDescription>
        <li>Các element được get ra trong DOM sẽ là 1 object.</li>
        <li>
          Bản chất thì các element này (node) sẽ được React thêm vào khi file JS
          tải về
        </li>
        <li className="text-red-500">
          className là 1 props có sẵn trong JS element chứ không phải trong
          ReactJS
        </li>
        <pre>
          {`

useEffect(() => {
    const h1 = document.createElement("h1");
    h1.innerHTML = "Tạo thẻ h1 bằng dom.createElement()";
    h1.className = "text-red-500";
    document.getElementById(id-lesson?.id)?.append(h1);
  }, []);`}
        </pre>
        <li>
          Nếu chỉ tạo bằng createElement thì phần tử mới chỉ được khởi tạo trên
          bộ nhớ nhưng chưa được hiển thị lên ngoài DOM giao diện. =&gt; thêm
          vào giao diện bằng append
        </li>
      </div>
    ),
  },
  {
    id: 9,
    label: "Kiến thức mở rộng về React - Thêm một số điều cần biết",
    content: (
      <div className="grid gap-4">
        <CardDescription>
          1. Github, npmjs, unpkg.
          <br />
          2. Add React to web.
          <br />
          3. Document official.
        </CardDescription>
        <li>
          Npmjs(Node package manager) - Quản lý gói cho node(quản lý thư viện
          js) - Nơi lưu trữ sản phẩm xây dựng từ source code github
        </li>
        <li>Github - Nơi lưu trữ source code</li>
        <li>
          Unpkg - Nơi lấy và sử dụng thư viện js bằng cách import 1 url CDN
          (đồng bộ truy cập với các mấy chủ gần nhất giúp lấy tài nguyên 1 cách
          nhanh nhất)
        </li>
        <li>
          Sẽ có 2 phiên bản import đó là 1 cho dev và 1 cho product với 1 số
          tinh chỉnh giúp rút gọn
        </li>
        <li>
          Các API reference trong các thư viện document thực chất là mô tả về
          method của thư viện đó
        </li>
      </div>
    ),
  },
  {
    id: 10,
    label: "React.createElement() - Là react chứ không phải DOM",
    content: (
      <div className="grid gap-4">
        <CardDescription>
          1. React.createElement() =&gt; React element
          <br />
          2. So sánh với DOM.createElement() =&gt; DOM element (node)
          <br />
          3. Tạo các thẻ html bằng cả 2 =&gt; So sánh
        </CardDescription>
        <li>
          React không có props <code>innerText</code> vì ở giữa các thành phần
          react có thể là bất cứ thứ gì không chỉ là <code>string</code> . Nó có
          thể là 1 node khác(string,html tag,...) được gọi chung là children.
        </li>
        <li>
          Cũng giống như DOM thì React cũng tạo ra 1 element dưới dạng 1 object
        </li>
        <li>
          <b>
            Practice với việc tạo element, element lồng nhau và thêm vào Giao
            diện
          </b>
        </li>
      </div>
    ),
  },
];

export const disCount15Percent = (
  value: number,
  discount: number,
  vouncher: number
): number | undefined => {
  if (!value || value <= 0 || discount < 0 || vouncher < 0) return;
  return value - value * (discount / 100) - vouncher;
};

export const arrToObj = (
  arr: (string | number)[][]
): Record<string | number, string | number> => {
  return arr.reduce(
    (prevValue: Record<string | number, string | number>, [key, value]) => {
      prevValue[key] = value;
      return prevValue;
    },
    {}
  );
};
