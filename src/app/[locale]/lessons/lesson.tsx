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
    label: "React.createElement() - Là React chứ không phải DOM",
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
        <code>
          <b> Create Single HTML tag from DOM.createElement() </b> <br />
          const h1 = document.createElement(&quot;h1&quot;); <br />
          h1.innerText = &quot;Its Dom Element&quot;; <br /> h1.className =
          &quot;text-red-500&quot;; <br /> <br />
          <b> Display to User interface: </b> <br />
          document.getElementById(&quot;id&quot;)?.append(h1); <br />
          <br />
          <b> Create Single HTML tag from React.createElement(): </b> <br />
          const h3ReactNode = React.createElement( <br /> &quot;h3&quot;, <br />{" "}
          &quot;className&quot;: &quot;text-blue-500&quot;, <br /> &quot;Hello
          React Node&quot; );
          <br /> <br />
          <b> Display to User interface(need ReactDOM knowledge): </b> <br />
          <br />
          <br />
          <b> Create Multiple HTML tag from DOM.createElement(): </b> <br />
          const ulDom = document.createElement(&quot;ul&quot;);
          <br />
          ulDom.className = &quot;list-disc ml-[2rem]&quot;;
          <br />
          const liDom1 = document.createElement(&quot;li&quot;);
          <br />
          liDom1.innerText = &quot;Dom Li 1 Hello&quot;;
          <br />
          liDom1.className = &quot;marker:text-blue-500&quot;;
          <br />
          const liDom2 = document.createElement(&quot;li&quot;);
          <br />
          liDom2.innerText = &quot;Dom Li 2 World&quot;;
          <br />
          liDom2.className = &quot;marker:text-green-500&quot;;
          <br />
          ulDom.append(liDom1, liDom2);
          <br />
          document.getElementById(`content-$lesson?.id`)?.appendChild(ulDom);
          <br />
          <br />
          <b> Create Multiple HTML tag fromR React.createElement(): </b> <br />
          const ulReactDom = React.createElement( &quot;ul&quot;,
          <br />
          className: &quot;list-disc ml-[2rem]&quot;,
          <br />
          <br />
          React.createElement(
          <br />
          &quot;li&quot;,
          <br />
          <br />
          className: &quot;marker:text-blue-500&quot;,
          <br />
          <br />
          &quot;ReactDom Li 1 Hello&quot;
          <br />
          ),
          <br />
          React.createElement(
          <br />
          &quot;li&quot;,
          <br />
          <br />
          className: &quot;marker:text-green-500&quot;,
          <br />
          <br />
          &quot;ReactDom Li 1 World&quot;
          <br />
          )<br />
          );
          <br />
        </code>
      </div>
    ),
  },
  {
    id: 11,
    label: "ReactDOM - Là ReactDOM chứ không phải DOM",
    content: (
      <div className="grid gap-4">
        <CardDescription>
          1. ReactDOM.createRoot(get Dom Element) =&gt; React Root Container
          <br />
          2. root.render(React element)
          <br />
          3. Tạo các thẻ html bằng React.createElement() và render ra giao diện
          window
        </CardDescription>
        <li>
          Render React Element đã tạo ở bài trước ra trình duyệt( Cần thêm thư
          viện React Dom, và nhớ React Dom phải được thêm sau thư viện React)
        </li>
        <li>
          React-DOM là 1 thư viện cầu nối giữa React (thư viên) và DOM (trình
          duyệt) để giúp việc tinh gọn và phát triển thêm React-Native
        </li>
        <li>
          <b>
            Practice với việc thêm vào Giao diện React-DOM DOM ảo(Không phải DOM
            trình duyệt){" "}
          </b>
        </li>
        <code className="nohighlight">
          useEffect(() =&gt; &#123;
          <br />
          const divReactDom = React.createElement(
          <br />
          &quot;div&quot;,
          <br />
          &#123;
          <br />
          className: &quot;flex flex-col gap-4&quot;,
          <br />
          &#125;,
          <br />
          React.createElement(&quot;h2&quot;, &#123;&#125;, &quot;Hello this is
          ReactDom&quot;),
          <br />
          React.createElement(
          <br />
          &quot;span&quot;,
          <br />
          &#123;&#125;,
          <br />
          &quot;Some thing about ReactDom hihihi hahaha hehehehe&quot;
          <br />
          )<br />
          );
          <br />
          const container = document.getElementById(`content-$lesson?.id`);
          <br />
          <br />
          <b>Check if the container exists</b>
          <br />
          if (container) &#123;
          <br />
          <b>Create a root using ReactDOM.createRoot</b>
          <br />
          const root = ReactDOM.createRoot(container);
          <br />
          <b>Render your component</b>
          <br />
          root.render(divReactDom);
          <br />
          &#125;
          <br />
          &#125;, []);
          <br />
        </code>
      </div>
    ),
  },
  {
    id: 12,
    label: "JSX là gì? Tại sao cần JSX (Javasript XML)",
    content: (
      <div className="grid gap-4">
        <CardDescription>
          1. Với cách thông thường (sử dụng Javascript) ta tạo ra React element
          phải dùng React.createElement() và render ra giao diện với
          ReactDom.creatRoot() và .render()
          <br />
          - Nếu dùng cách này để code giao diện thì sẽ khó vì vậy JSX ra đời
          giúp việc code giao diện dễ dàng hơn.
          <br />
          - JSX giúp ta có thể viết XML HTML trong file Javascript hoặc trong
          thẻ script.
          <br />
          - Tuy nhiên thì JSX sẽ không truyền được vào trong ReactDOM.
          <br />
          <br />- Vậy nên ta cần sử dụng thư viện để phân tích cú pháp và chuyển
          đổi JSX <b>Babel</b> (Trong phần <b>render</b> của
          <b> ReactDOM. root.render()</b> )
          <br />
          2. Với JSX thì ta cần chuyển đổi về code Javascript thuần vì vậy nên
          ta cần thư viện <b>Babel</b> - là 1 bước trung gian
          <b> chuyên dùng để phân tích cú pháp và chuyển đổi cú pháp</b>
          <br />
          (Thông dụng khi chuyển đổi các cú pháp của Javascript từ ES6 trở thành
          ES5.) - Nhằm hỗ trợ các trình duyệt chạy Javascript có thể chạy dự án.{" "}
          <b> (Vì sẽ có 1 số trình duyệt &quot;không hỗ trợ&quot;)</b>
          <br />
          <br />
          3. Với React.createElement thì prop &quot;style&quot; sẽ nhận value là
          1 object
        </CardDescription>
        <div className="grid grid-cols-5">
          <pre className="col-span-2 overflow-hidden">
            <h5>JSX (HTML) import React and Babel</h5>
            {`
<ul>
  <li>Javascript</li>
  <li>React</li>
</ul>`}
          </pre>

          <span className="col-span-1 font-bold text-red-600">&lt;=&gt;</span>
          <pre className="col-span-2">
            <h5>Javascript thuần với việc import React</h5>
            {`
React.createElement(
"ul",
{},
  React.createElement("li", {}, "Javascript")
  React.createElement("li", {}, "React")
)
            `}
          </pre>
        </div>
        <li>
          Với JSX ta có thể tạo biến và gán giá trị cho nó là 1 đoạn code JSX
        </li>
        <div className="grid grid-cols-5">
          <pre className="col-span-2 overflow-hidden">
            <h5>JSX (HTML) import React and Babel</h5>
            {`
const ulJsx = 
<ul>
  <li>Javascript</li>
  <li>React</li>
</ul>`}
          </pre>

          <span className="col-span-1 font-bold text-red-600">&lt;=&gt;</span>
          <pre className="col-span-2">
            <h5>Javascript thuần với việc import React</h5>
            {`
var ulJsx = 
React.createElement(
"ul",
{},
  React.createElement("li", {}, "Javascript")
  React.createElement("li", {}, "React")
)
            `}
          </pre>
        </div>
        <li>
          Khi viết JSX muốn viết xen lẫn JS vào thì chúng ta sử dụng &quot;
          {`{ javascript statement }`}&quot; - Phần statement để chúng ta thường
          viết giá trị biến, console,map,....
        </li>
        <h5>
          Practice với việc tạo lại các phần tử bằng DOM và ReactDOM(sử dụng cả
          2 cách createElement và JSX)
        </h5>
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
