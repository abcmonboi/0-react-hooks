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
  { id: 4, label: "Enhanced object literals", content: <div>ss</div> },
];
