import { LessonType } from "@/app/[locale]/lessons/lesson";
import * as Typo from "@/components/typography";

export const LESSONS_JS: LessonType[] = [
  {
    id: 1,
    label: "Sync / Async?",
    description: ` Một thư viện được viết bởi Javascript cho việc xây dựng nên giao diện
          người dùng`,
    content: (
      <>
        <Typo.H4Typo>Tại sao nên học React ?</Typo.H4Typo>
        <Typo.ListTypo>
          <li className="marker:text-red-500">Thư viện đông đảo người dùng</li>
          <li>Thân thiện với SEO(Search Engine Optimization)</li>
          <li>
            Dễ mở rộng và tái sử dụng cao với việc kiến trúc chia component
          </li>
          <li>
            Khả năng tương thích ngược (Có thể update lên các version khác mà
            không sợ mất method)
          </li>
        </Typo.ListTypo>
      </>
    ),
  },
  {
    id: 2,
    label: "Promise ?",
    description: "Ứng dụng trang đơn và ứng dụng nhiều trang",
    content: (
      <>
        <Typo.H4Typo>Các thông tin: </Typo.H4Typo>
        <Typo.ListTypo>
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
        </Typo.ListTypo>
      </>
    ),
  },
];
