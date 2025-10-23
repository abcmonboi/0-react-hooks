import {
  BlockquoteTypo,
  H2Typo,
  H3Typo,
  H4Typo,
  InlineCodeTypo,
  LargeTypo,
  LeadTypo,
  ListTypo,
  MutedTypo,
  PTypo,
} from "@/components/typography";
import { ReactNode } from "react";

export type LessonType = {
  id: number;
  label: string;
  description?: ReactNode;
  content: ReactNode;
};

export const LESSONS: LessonType[] = [
  {
    id: 1,
    label: "ReactJS là gì ?",
    description: ` Một thư viện được viết bởi Javascript cho việc xây dựng nên giao diện
          người dùng`,
    content: (
      <>
        <H4Typo>Tại sao nên học React ?</H4Typo>
        <ListTypo>
          <li className="marker:text-red-500">Thư viện đông đảo người dùng</li>
          <li>Thân thiện với SEO(Search Engine Optimization)</li>
          <li>
            Dễ mở rộng và tái sử dụng cao với việc kiến trúc chia component
          </li>
          <li>
            Khả năng tương thích ngược (Có thể update lên các version khác mà
            không sợ mất method)
          </li>
        </ListTypo>
      </>
    ),
  },
  {
    id: 2,
    label: "Single Page Application / Multiple Page Application ?",
    description: "Ứng dụng trang đơn và ứng dụng nhiều trang",
    content: (
      <>
        <H4Typo>Các thông tin: </H4Typo>
        <ListTypo>
          <li className="marker:text-red-500">
            React chỉ là 1 trong những framework đang sử dụng phương pháp 1
            trang đơn
          </li>
          <li className="marker:text-red-500">
            Không yêu cầu trang tải lại (đó là Single App Application - Kiến
            trúc, phương pháp)
          </li>
          <li className="marker:text-red-500">
            Cả 2 phương pháp - kiến trúc sẽ thích hợp cho từng hoàn cảnh. Hãy
            theo ý kiến khách hàng. Nếu cần nhanh chóng không cần phát triển
            thêm nhiều về sau này hãy chọn MPA
          </li>
          <li>
            MPA là việc render trang sẽ bên phía sever và sẽ trả về trang HTML
            hoàn chỉnh. Việc phát triển có thể chỉ cần 1 bộ phận không cần tách
            lẻ từ đó suy ra có thể làm việc nhanh chóng. Cũng không cần quá
            chuyên sâu về JS. Chi phí thấp nhân sự cần ít.Tuy nhiên nếu sau này
            mở rộng sẽ khó hơn (ví dụ như cần phát triển thêm mobile app hay
            scale ứng dụng)
          </li>
          <li>
            SPA chia ra 2 bên phát triển riêng biệt BE và FE. Và việc sử dụng JS
            là bắt buộc vì dựa theo client sever side, khi sever trả về thì thực
            chất trả về 1 HTML rỗng kèm với file JS, thiết bị đầu cuối sẽ chờ
            file JS được trả về để thực hiện render ra giao diện (chờ script).
            Từ đó dẫn đến việc nếu không tối ưu tốt file JS thì lần tải đầu sẽ
            bị mất thời gian.
          </li>
        </ListTypo>
      </>
    ),
  },
  {
    id: 3,
    label: "Arrow function",
    description: `Hàm mũi tên ()=>{}`,
    content: (
      <>
        <H4Typo>Sinh ra để viết ngắn gọn hơn:</H4Typo>
        <ListTypo>
          <li className="marker:text-red-500">
            Hàm thông thường:
            <pre>
              <InlineCodeTypo>{`function name(params:type) {}`}</InlineCodeTypo>
            </pre>
          </li>
          <BlockquoteTypo>
            <span>Thay vì</span>
            <pre>
              <InlineCodeTypo>{`function name(a:type, b:type) {
  return a + b
}`}</InlineCodeTypo>
            </pre>

            <span> Ta có thể viết bằng arrow function </span>
            <pre>
              <InlineCodeTypo>
                {`const name = (params:type) => a+b`}
              </InlineCodeTypo>
            </pre>
          </BlockquoteTypo>
          <br />
          <li>{`Nếu muốn return ra 1 object thì bọc bởi dấu ngoặc đơn ()`}</li>
          <li>
            Nếu tham số chỉ có 1 thì có thể bỏ dấu ngoặc đơn{" "}
            <pre>
              <InlineCodeTypo>{`func name (param) {}`}</InlineCodeTypo>
            </pre>
            <pre>
              <InlineCodeTypo>{`const name = param => {}`}</InlineCodeTypo>
            </pre>
          </li>
          <li className="marker:text-red-500">
            Arrow function không có this (hay là context) nói chính xác hơn thì
            không dùng để tạo đối tượng được. Vì không phải 1 constructor (hàm
            tạo cho đối tượng)
          </li>
          <li>
            Hàm tạo (Constructor)
            <pre>
              <InlineCodeTypo>{`function User(name: string, age: number) {
  this.name = name;
  this.age = age;
  this.getName = function () {
    return this.name;
  };
}`}</InlineCodeTypo>
            </pre>
          </li>
        </ListTypo>
      </>
    ),
  },
  {
    id: 4,
    label: "Enhanced object literals - Nâng cao thêm về xử lý object",
    description: "Giúp chúng ta cải thiện việc khai báo và xử lý object",
    content: (
      <ListTypo>
        <li>
          Định nghĩa <InlineCodeTypo>key</InlineCodeTypo>
          <InlineCodeTypo>value</InlineCodeTypo>cho object
          <BlockquoteTypo>
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
            </pre>
          </BlockquoteTypo>
          <PTypo>Có thể viết ngắn gọn như sau</PTypo>
          <BlockquoteTypo>
            <pre>
              var User ={" "}
              {`{ 
  name, 
  age     }`}
            </pre>
          </BlockquoteTypo>
        </li>
        <li>
          Định nghĩa <InlineCodeTypo>method</InlineCodeTypo> cho 1 object
          <BlockquoteTypo>
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
            </pre>
          </BlockquoteTypo>
          <PTypo>Có thể viết ngắn gọn bằng cách</PTypo>
          <BlockquoteTypo>
            <pre>
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
          </BlockquoteTypo>
        </li>
        <li>
          Định nghĩa <InlineCodeTypo>key</InlineCodeTypo> của object dưới dạng
          biến
          <BlockquoteTypo>
            <pre>var objectKey = &quot;nameKey&quot;;</pre>
          </BlockquoteTypo>
          <PTypo>
            =&gt; có thể dynamic được tên key, giúp linh động và ngắn gọn
          </PTypo>
          <BlockquoteTypo>
            <pre>
              var User =
              {` {
          [objectKey] : name,
          age : age
          getName()=> name 
}`}
            </pre>
          </BlockquoteTypo>
        </li>
        <li className="marker:text-red-500">
          <b>Bài tập convert Array sang object sử dụng hàm reducer</b>{" "}
          <p>
            Cho một mảng với với các phần tử là 1 mảng gồm 2 phần tử chứa key và
            value.
            <pre>
              VD arr =
              [[&quot;key1&quot;,&quot;value1&quot;],[&quot;key2&quot;,&quot;value2&quot;]]
            </pre>
            Dùng hàm reduce để chuyển mảng này thành 1 object.
          </p>
          <BlockquoteTypo>
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
          </BlockquoteTypo>
        </li>
      </ListTypo>
    ),
  },
  {
    id: 5,
    label: "Destructuring - bóc tách ",
    description: `
       Destructuring: việc bóc tách, việc phân rã các thành phần trong object
          và array (Chỉ sử dụng đối với object và array). 
          Giúp chúng ta lấy trực tiếp các phần tử bên trong array, object mà
          không cần duyệt qua từng phần tử.
          Với mỗi kiểu dữ liệu sẽ lấy theo dấu của kiểu dữ liệu đó object là 
          {} và array là []`,
    content: (
      <>
        <ListTypo>
          <li className="marker:text-red-600">
            Sử dụng với <b>object</b>.
            <BlockquoteTypo>
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
              </pre>
            </BlockquoteTypo>
            <PTypo>Có thể lấy ra các key trong object bằng cách:</PTypo>
            <BlockquoteTypo>
              <pre>
                {`  const { name, age, getName, getNextAge } = user;
  console.log(getName());
  console.log(getNextAge()); `}
              </pre>
            </BlockquoteTypo>
            <PTypo>
              Nếu key không có trong object thì sẽ có value: undefine
            </PTypo>
          </li>
          <li className="marker:text-red-600">
            Sử dụng với <b>array</b>
            <BlockquoteTypo>
              <pre>
                {`   
const arr = ["Bac", 18, "getName", "getNextAge"];
`}
              </pre>
            </BlockquoteTypo>
            <PTypo>Có thể lấy ra bằng cách:</PTypo>
            <BlockquoteTypo>
              <pre>
                {`
const [name, age, , getNextAge] = arr;

Nếu không lấy phần tử nào thì ta sẽ để khoảng trống ", ," cho nó

console.log(name);
console.log(age);
console.log(getNextAge);
`}
              </pre>
            </BlockquoteTypo>
          </li>
        </ListTypo>
        <br />
        <H4Typo>...Rest - Các phần tử còn lại</H4Typo>
        <LeadTypo className="text-base">
          Là một toán tử giúp lấy những phần tử còn lại trong array,object.
          <b>
            Nó sẽ trả về 1 Object chứa cặp key value còn lại. Tất nhiên sẽ không
            có những phần từ lấy ra trước đó. (Một cách giúp xóa key trong
            object)
          </b>
          Nó giống với 1 toán tử dải spread tuy nhiên cách thức hoạt động hoàn
          toàn khác nhau Chỉ sử dụng kết hợp với <b>Destructuring</b>. Sử dụng
          khi func nhận vào các đối số được truyền (...args) - Đây là toán tử
          rest dải phần còn lại <b>trả về 1 mảng Array</b>.
          <br />
        </LeadTypo>

        <ListTypo>
          <li className="list-none">
            <BlockquoteTypo>
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
            </BlockquoteTypo>
          </li>
          <li className="marker:text-red-500">
            Ví dụ về cách hoạt động
            <BlockquoteTypo>
              <pre>
                {` 
var arr = [a,b,c,d];

var [a,b,...rest] = arr;

=> clg(rest) = c,d

<=> var [a, b, c, ...rest] = arr;

=> clg(rest) = d

}`}
              </pre>
            </BlockquoteTypo>
          </li>
          <li className="marker:text-red-500">
            Ví dụ nâng cao về trường hợp trong object lại chứa 1 object con.
            <BlockquoteTypo>
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
              </pre>
            </BlockquoteTypo>
            <PTypo>
              Ta cần sử dụng &quot;:&quot; hay còn gọi là alias để thay đổi tên.
            </PTypo>
            <PTypo>
              Trong trường hợp key lấy ra từ object không được định nghĩa trong
              object. Ta vẫn có thể gán giá trị mặc định cho nó bằng dấu
              &quot;=&quot;
            </PTypo>
          </li>
        </ListTypo>
      </>
    ),
  },
  {
    id: 6,
    label: "Spread - Dải ra (bổ sung cho toán tử rest) ",
    description: `
        Là 1 toán tử cũng được sử dụng để xử lý object và array.
          Dùng để nối các phần tử trong các object hoặc mảng lại với nhau.
         "...{}" sẽ bỏ đi dấu ngoặc của khai báo object
          hoặc mảng và chỉ còn các phần tử bên trong
          Sử dụng để truyền nhanh các tham số vào hàm.`,
    content: (
      <ListTypo>
        <li className="list-none">
          <BlockquoteTypo>
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
          </BlockquoteTypo>
        </li>

        <li className="list-none">
          <BlockquoteTypo>
            <pre>
              {`
  const arr = ["a", "b", "c", "d"];

  console.log(...arr);

  const arr2 = ["c", "d", "e", "f"];

  console.log(...arr2);

  console.log([...arr, ...arr2]);
  
  Dòng cuối sẽ log ra 1 mảng gồm các phần tử của mảng 1 + mảng 2.

`}
            </pre>
          </BlockquoteTypo>
        </li>
        <li className="list-none italic">
          <b>
            Đối với object tương tự. Tuy nhiên nếu trùng key value thì key value
            khai báo sau sẽ được ghi đè.
          </b>
        </li>
      </ListTypo>
    ),
  },
  {
    id: 7,
    label: "Modules(Mô đu ờ ES6) - Bóc tách file nhỏ ra ",
    description: `
       Bóc tách các func ra 1 file, tách nhỏ ra để phục vụ cho 1 chức năng
          hoặc 1 mục đích sử dụng.
    `,
    content: (
      <ListTypo>
        <li>
          Hiểu đơn giản là tính năng mới được giới thiệu ở ES6 giúp người dùng
          có thể export các hàm, file và có thể import vào file JS khác bằng
          cách sử dụng type modules
        </li>
        <li>
          Một module chỉ có thể export default 1 và chỉ 1. Tuy nhiên thì export
          thường bao nhiêu cũng được. Nếu export nhiều func trong 1 module thì
          khi import nên sử dụng Destructuring để lấy.
          <BlockquoteTypo>
            <pre>
              {` export const disCount15Percent
 export const arrToObj

=> import {(disCount15Percent, arrToObj)} from "../../lesson";`}
            </pre>
          </BlockquoteTypo>
        </li>
        <li>
          Import * as <b>alias</b> là lấy ra tất cả dưới dạng 1 object mang tên{" "}
          <b>alias</b> chứa các hàm được export
        </li>
        <li>
          Nếu không phải dùng Destructuring import thì mặc định đó là import
          default
        </li>
        <li>
          {`
Có thể dùng export{" "} {default} from cùng cấp thay vì dùng import rồi export.

export { default as alias } from index. 

Cách viết tắt ở file trung gian (index cùng cấp)        
        `}
        </li>
      </ListTypo>
    ),
  },
  {
    id: 8,
    label: "Document.createElement() - DOM",
    description: `
Giúp chúng ta tạo ra 1 phần tử trong DOM (trong bộ nhớ). Tuy nhiên vẫn
          chưa được thể hiện ra giao diện người dùng do chưa append vào
          các cây (element node) trong DOM. Nó là 1 method nằm trong đối tượng Document.
          Lý giải cho câu hỏi tại sao React có thể render ra giao diện người
          dùng.`,
    content: (
      <ListTypo>
        <li>Các element được get ra trong DOM sẽ là 1 object.</li>
        <li>
          Bản chất thì các element này (node) sẽ được React thêm vào khi file JS
          tải về
        </li>
        <li className="marker:text-red-500">
          className là 1 props có sẵn trong JS element chứ không phải trong
          ReactJS
        </li>
        <li className="list-none mb-4">
          <BlockquoteTypo>
            <pre>
              {`useEffect(() => {
  const h1 = document.createElement("h1");
  h1.innerHTML = "Tạo thẻ h1 bằng dom.createElement()";
  h1.className = "text-red-500";
  document.getElementById(id-lesson?.id)?.append(h1);
}, []);`}
            </pre>
          </BlockquoteTypo>
        </li>

        <li>
          Nếu chỉ tạo bằng createElement thì phần tử mới chỉ được khởi tạo trên
          bộ nhớ nhưng chưa được hiển thị lên ngoài DOM giao diện. =&gt; thêm
          vào giao diện bằng append
        </li>
      </ListTypo>
    ),
  },
  {
    id: 9,
    label: "Kiến thức mở rộng về React - Thêm một số điều cần biết",
    description: (
      <>
        <p>1. Github, npmjs, unpkg.</p>
        <p>2. Add React to web.</p>
        <p>3. Document official.</p>
      </>
    ),
    content: (
      <ListTypo>
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
      </ListTypo>
    ),
  },
  {
    id: 10,
    label: "React.createElement() - Là React chứ không phải DOM",
    description: (
      <>
        1. React.createElement() =&gt; React element.
        <br />
        2. So sánh với DOM.createElement() =&gt; DOM element (node)
        <br />
        3. Tạo các thẻ html bằng cả 2 =&gt; So sánh.
      </>
    ),
    content: (
      <ListTypo>
        <li>
          React không có props <InlineCodeTypo>innerText</InlineCodeTypo> vì ở
          giữa các thành phần react có thể là bất cứ thứ gì không chỉ là{" "}
          <code>string</code> . Nó có thể là 1 node khác(string,html tag,...)
          được gọi chung là children.
        </li>
        <li>
          Cũng giống như DOM thì React cũng tạo ra 1 element dưới dạng 1 object
        </li>
        <li>
          Practice với việc tạo element, element lồng nhau và thêm vào Giao diện
        </li>
        <li className="list-none">
          <LargeTypo>Create Single HTML tag from DOM.createElement()</LargeTypo>
          <BlockquoteTypo className="mb-6">
            <pre>
              <code>
                {`
const h1 = document.createElement("h1");
h1.innerText = "Its Dom Element";
h1.className = "text-red-500";`}
              </code>
            </pre>
          </BlockquoteTypo>

          <LargeTypo>Display to User interface</LargeTypo>
          <BlockquoteTypo className="mb-6">
            <pre>
              <code>
                {`
document.getElementById("id")?.append(h1);`}
              </code>
            </pre>
          </BlockquoteTypo>

          <LargeTypo>
            Create Single HTML tag from React.createElement()
          </LargeTypo>
          <BlockquoteTypo className="mb-6">
            <pre>
              <code>
                {`
const h3ReactNode = React.createElement(
  "h3",
  { className: "text-blue-500" },
  "Hello React Node"
);`}
              </code>
            </pre>
          </BlockquoteTypo>

          <LargeTypo>Display to User interface :</LargeTypo>
          <LeadTypo>(need ReactDOM knowledge)</LeadTypo>
          <br />

          <LargeTypo>
            Create Multiple HTML tag from DOM.createElement()
          </LargeTypo>
          <BlockquoteTypo className="mb-6">
            <pre>
              <code>
                {`const ulDom = document.createElement("ul");
ulDom.className = "list-disc ml-[2rem]";
const liDom1 = document.createElement("li");
liDom1.innerText = "Dom Li 1 Hello";
liDom1.className = "marker:text-blue-500";
const liDom2 = document.createElement("li");
liDom2.innerText = "Dom Li 2 World";
liDom2.className = "marker:text-green-500";
ulDom.append(liDom1, liDom2);
document.getElementById(\`content-\${lesson?.id}\`)?.appendChild(ulDom);`}
              </code>
            </pre>
          </BlockquoteTypo>

          <LargeTypo>
            Create Multiple HTML tag from React.createElement()
          </LargeTypo>
          <BlockquoteTypo className="mb-6">
            <pre>
              <code>
                {`const ulReactDom = React.createElement(
  "ul",
  { className: "list-disc ml-[2rem]" },
  React.createElement(
    "li",
    { className: "marker:text-blue-500" },
    "ReactDom Li 1 Hello"
  ),
  React.createElement(
    "li",
    { className: "marker:text-green-500" },
    "ReactDom Li 2 World"
  )
);`}
              </code>
            </pre>
          </BlockquoteTypo>
        </li>
      </ListTypo>
    ),
  },
  {
    id: 11,
    label: "ReactDOM - Là ReactDOM chứ không phải DOM",
    description: (
      <>
        1. ReactDOM.createRoot(get Dom Element) =&gt; React Root Container
        <br />
        2. root.render(React element)
        <br /> 3. Tạo các thẻ html bằng React.createElement() và render ra giao
        diện window
      </>
    ),
    content: (
      <ListTypo>
        <li>
          Render React Element đã tạo ở bài trước ra trình duyệt( Cần thêm thư
          viện React Dom, và nhớ React Dom phải được thêm sau thư viện React)
        </li>
        <li>
          React-DOM là 1 thư viện cầu nối giữa React (thư viên) và DOM (trình
          duyệt) để giúp việc tinh gọn và phát triển thêm React-Native
        </li>
        <li className="list-none">
          <b>
            Practice với việc thêm vào Giao diện React-DOM DOM ảo(Không phải DOM
            trình duyệt){" "}
          </b>
        </li>
        <li className="list-none">
          <BlockquoteTypo>
            <pre>
              <code>{`useEffect(() => {
  const divReactDom = React.createElement(
    "div",
    {
      className: "flex flex-col gap-4",
    },
    React.createElement("h2", {}, "Hello this is ReactDom"),
    React.createElement(
      "span",
      {},
      "Some thing about ReactDom hihihi hahaha hehehehe"
    )
  );

  const container = document.getElementById(\`content-\${lesson?.id}\`);

  // Check if the container exists
  if (container) {
    // Create a root using ReactDOM.createRoot
    const root = ReactDOM.createRoot(container);
    // Render your component
    root.render(divReactDom);
  }
}, []);`}</code>
            </pre>
          </BlockquoteTypo>
        </li>
      </ListTypo>
    ),
  },
  {
    id: 12,
    label: "JSX là gì? Tại sao cần JSX (Javascript XML)",
    description: `
    Với cách thông thường (sử dụng Javascript) ta tạo ra React element phải dùng React.createElement() và render ra giao diện với ReactDom.creatRoot() và .render()
    `,
    content: (
      <>
        <H4Typo>Vấn đề gặp phải: </H4Typo>
        <ListTypo>
          <li>
            Nếu dùng cách này để code giao diện thì sẽ khó vì vậy JSX ra đời
            giúp việc code giao diện dễ dàng hơn.
          </li>
          <li>
            JSX giúp ta có thể viết XML HTML trong file Javascript hoặc trong
            thẻ script.
          </li>
          <li className="list-none">
            <b>Tuy nhiên thì JSX sẽ không truyền được vào trong ReactDOM.</b>
          </li>
          <li>
            Vậy nên ta cần sử dụng thư viện để phân tích cú pháp và chuyển đổi
            JSX <b>Babel</b> (Trong phần <b>render</b> của
            <b> ReactDOM. root.render()</b> )
          </li>
          <li>
            Với JSX thì ta cần chuyển đổi về code Javascript thuần vì vậy nên ta
            cần thư viện <b>Babel</b> - là 1 bước trung gian
            <b> chuyên dùng để phân tích cú pháp và chuyển đổi cú pháp</b>
            (Thông dụng khi chuyển đổi các cú pháp của Javascript từ ES6 trở
            thành ES5.) - Nhằm hỗ trợ các trình duyệt chạy Javascript có thể
            chạy dự án.{" "}
            <b> (Vì sẽ có 1 số trình duyệt &quot;không hỗ trợ&quot;)</b>
          </li>
          <li>
            <b>
              Với React.createElement thì prop &quot;style&quot; sẽ nhận value
              là 1 object
            </b>
          </li>
          <li className="list-none">
            <div className="flex flex-col justify-between gap-4">
              <div className="flex-1">
                <BlockquoteTypo>
                  <pre>{`<h5>JSX (HTML) import React and Babel</h5>
<ul>
  <li>Javascript</li>
  <li>React</li>
</ul>`}</pre>
                </BlockquoteTypo>
              </div>

              <div className="px-4 font-bold text-red-600 text-xl">
                &lt;=&gt;
              </div>

              <div className="flex-1">
                <BlockquoteTypo className="mb-4">
                  <pre>{`<h5>Javascript thuần với việc import React</h5>
React.createElement(
  "ul",
  {},
  React.createElement("li", {}, "Javascript"),
  React.createElement("li", {}, "React")
)`}</pre>
                </BlockquoteTypo>
              </div>
            </div>
          </li>
          <li>
            Với JSX ta có thể tạo biến và gán giá trị cho nó là 1 đoạn code JSX
          </li>
          <li className="list-none">
            <div className="flex flex-col gap-4 justify-between">
              <div className="flex-1">
                <BlockquoteTypo>
                  {`<h5>JSX (HTML) import React and Babel</h5>
const ulJsx = 
<ul>
  <li>Javascript</li>
  <li>React</li>
</ul>`}
                </BlockquoteTypo>
              </div>

              <div className="px-4 font-bold text-red-600 text-xl">
                &lt;=&gt;
              </div>
              <div className="flex-1">
                <BlockquoteTypo className="mb-4">
                  {`<h5>Javascript thuần với việc import React</h5>
var ulJsx = 
React.createElement(
  "ul",
  {},
  React.createElement("li", {}, "Javascript"),
  React.createElement("li", {}, "React")
)`}
                </BlockquoteTypo>
              </div>
            </div>
          </li>
        </ListTypo>

        <li>
          Khi viết JSX muốn viết xen lẫn JS vào thì chúng ta sử dụng &quot;
          {`{ javascript statement }`}&quot; - Phần statement để chúng ta thường
          viết giá trị biến, console,map,....
        </li>
        <H4Typo>
          Practice với việc tạo lại các phần tử bằng DOM và ReactDOM(sử dụng cả
          2 cách createElement và JSX)
        </H4Typo>
      </>
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
