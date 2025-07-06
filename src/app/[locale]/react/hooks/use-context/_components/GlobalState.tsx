import {
  BlockquoteTypo,
  H2Typo,
  LargeTypo,
  LeadTypo,
  PTypo,
} from "@/components/typography";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

const GlobalState = () => {
  return (
    <Card>
      <CardHeader>
        <H2Typo>Global State</H2Typo>
        <LeadTypo>
          Global state là 1 cách để quản lý trạng thái toàn cục của ứng dụng,
          cho phép các component trong ứng dụng truy cập và cập nhật trạng thái
          này. Thường được sử dụng khi có nhiều component cần chia sẻ dữ liệu
          hoặc trạng thái. Ta sẽ sử dụng Context API để tạo ra Global State và
          sử dụng hook useContext() để truy cập và cập nhật trạng thái này kết
          hợp với useReducer() để quản lý trạng thái phức tạp hơn.
        </LeadTypo>
      </CardHeader>
      <CardContent>
        <LargeTypo>
          Tại sao lại phải cần thêm <b>useReducer </b>
          để quản lý trạng thái toàn cục?
        </LargeTypo>
        <PTypo>
          Khi sử dụng <b>useContext</b> để quản lý trạng thái toàn cục, ta có
          thể gặp phải vấn đề về hiệu suất khi có nhiều component lắng nghe và
          cập nhật trạng thái. Điều này có thể dẫn đến việc render lại nhiều
          component không cần thiết, làm giảm hiệu suất của ứng dụng. Sử dụng{" "}
          <b>useReducer</b>
          kết hợp với <b>useContext</b> giúp ta quản lý trạng thái phức tạp hơn,
          đồng thời tối ưu hóa việc render lại các component chỉ khi cần thiết.
          <br />
          <br />
          <b>useReducer</b> cho phép ta định nghĩa các hành động (actions) và
          cách cập nhật trạng thái dựa trên các hành động đó. Khi một component
          cần cập nhật trạng thái, nó sẽ gửi một hành động đến reducer, và
          reducer sẽ xử lý hành động đó để cập nhật trạng thái. Điều này giúp ta
          kiểm soát rõ ràng hơn cách mà trạng thái được cập nhật, đồng thời giảm
          thiểu việc render lại các component không cần thiết.
        </PTypo>
        <BlockquoteTypo>
          <b>VD: </b>
          Giả sử ta có một ứng dụng quản lý giỏ hàng, trong đó có nhiều
          component cần truy cập và cập nhật trạng thái giỏ hàng. Nếu ta sử dụng{" "}
          <b>useContext</b> để quản lý trạng thái giỏ hàng, mỗi khi có một
          component cập nhật giỏ hàng, tất cả các component lắng nghe trạng thái
          giỏ hàng sẽ được render lại, kể cả những component không liên quan đến
          giỏ hàng. Điều này có thể làm giảm hiệu suất của ứng dụng, đặc biệt
          khi có nhiều component lắng nghe trạng thái giỏ hàng.
          <br />
          <br />
          {`
            Sử dụng <b>useReducer</b> kết hợp với <b>useContext</b>, ta có thể
            định nghĩa các hành động như "thêm sản phẩm vào giỏ hàng", "xóa sản
            phẩm khỏi giỏ hàng", "cập nhật số lượng sản phẩm trong giỏ hàng".
            Khi một component cần cập nhật giỏ hàng, nó sẽ gửi một hành động đến
            reducer, và reducer sẽ xử lý hành động đó để cập nhật trạng thái giỏ
            hàng. Chỉ những component nào thực sự cần cập nhật giỏ hàng mới
            được render lại, giúp tối ưu hóa hiệu suất của ứng dụng.
            `}
        </BlockquoteTypo>
      </CardContent>
    </Card>
  );
};

export default GlobalState;
