import { LessonType } from "@/app/[locale]/lessons/lesson";
import * as Typo from "@/components/typography";

export const LESSONS_JS: LessonType[] = [
  {
    id: 1,
    label: "Sync / Async?",
    description: `2 khái niệm về thứ tự xử lý các statement.`,
    content: (
      <>
        <Typo.H4Typo>Sync ?</Typo.H4Typo>
        <Typo.ListTypo>
          <li className="marker:text-red-500">
            Đồng bộ hay là tuần tự (là đứa nào viết trước thì sẽ chạy trước, sau
            chạy sau )
          </li>
        </Typo.ListTypo>
        <Typo.H4Typo>ASync ?</Typo.H4Typo>
        <Typo.ListTypo>
          <li className="marker:text-red-500">
            Bất đồng bộ (là cho dù statement này được viết trước nhưng nó vẫn xử
            lý sau, in sau các tác vụ đồng bộ. Vì ta không biết là tác vụ đồng
            bộ này khi nào mới xử lý xong. )
          </li>
        </Typo.ListTypo>
        <Typo.PTypo>Một số statment async (bất đồng bộ) như:</Typo.PTypo>
        <Typo.ListTypo>
          <li>fetch</li>
          <li>setTimeout</li>
          <li>setInterval</li>
          <li>Read File</li>
          <li>Set Cookies</li>
          <li>Request animation</li>
          <li>XML http request</li>
        </Typo.ListTypo>
      </>
    ),
  },
  {
    id: 2,
    label: "Callback với các thao tác async - bất đồng bộ ?",
    description:
      "Gọi lại phần xử lý sau khi các thao tác bất đồng bộ chạy xong.(đảm bảo chạy sau khi tác vụ async hoàn tất).Nếu không có phần callback này thì ta không viết được phần code sau khi bất đồng bộ chạy xong.",
    content: (
      <>
        <Typo.H4Typo>Mục đích sinh ra: </Typo.H4Typo>
        <Typo.ListTypo>
          <li className="marker:text-red-500">
            Ta cần xử lý một thao tác, một statement - biểu thức nào đó sau khi
            mà thao tác bất đồng bộ chạy xong hay hoàn thành
          </li>
          <li className="marker:text-red-500">
            Ví dụ như sau 1s ta sẽ in ra 2.
            <Typo.BlockquoteTypo>
              <pre>
                {`  setTimeout(() => {
    console.log("2");
  }, 1000);
    console.log("1");
`}
              </pre>
            </Typo.BlockquoteTypo>
            <Typo.PTypo>
              {`  Nếu như block trên thì ta sẽ in ra 1 và sau 1s sẽ in tiếp ra 2. Vì
              việc in ra "1" không phải thao tác bất đồng bộ nên nó sẽ chạy
              trước. Sau đó hàm setTimeout là hàm bất đồng bộ nên sẽ mất thời
              gian xử lý và chạy sau để in ra "2"`}
            </Typo.PTypo>
          </li>
          <li className="marker:text-red-500">
            Ví dụ để biết rõ tại sao cần callback
            <Typo.BlockquoteTypo>
              <pre>
                {`  console.log("1");
  setTimeout(() => {
  }, 1000);
  console.log("2");
`}
              </pre>
            </Typo.BlockquoteTypo>
            <Typo.PTypo>
              {` Như block trên sẽ không đạt được yêu cầu ta mong muốn. Vì ta mong
              muốn in ra "1" và sau đó 1s in ra 2. Tuy nhiên không hoạt động như
              vậy, thao tác nào đồng bộ nào vẫn đc chạy trước, thao tác không
              đồng bộ sẽ chạy sau, và phần xử lý sau khi hàm bất đồng bộ chạy
              xong thì đang không có gì. Thao tác in ra 1 và 2 trong block này
              là thao tác đồng bộ.`}
            </Typo.PTypo>
          </li>
        </Typo.ListTypo>
      </>
    ),
  },
  {
    id: 3,
    label: "Promise ?",
    description: `Mục đích sinh ra, liên quan đến phần xử lý thao tác bất đồng bộ bằng callBack. Nỗi đau khi sử dụng callBack( callback hell hoặc "pyramid of doom").`,
    content: (
      <>
        <Typo.H4Typo>Vấn đề gặp phải, nguyên nhân sinh ra: </Typo.H4Typo>
        <Typo.ListTypo>
          <li className="marker:text-red-500">
            Khi JavaScript chỉ có callback để xử lý bất đồng bộ, nếu cần chuỗi
            nhiều thao tác async liên tiếp, ta phải lồng callback trong
            callback, tạo ra “địa ngục callback”.
          </li>
          <li className="list-none">
            <Typo.PTypo>
              Ví dụ như việc api tiếp theo cần đc lấy từ data thứ nhất
            </Typo.PTypo>
            <Typo.BlockquoteTypo>
              <pre>
                {`getUser((user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      console.log(comments);
    });
  });
});`}
              </pre>
            </Typo.BlockquoteTypo>
            <Typo.PTypo>Một điều dễ nhận thấy từ ví dụ trên là:</Typo.PTypo>
            <Typo.ListTypo>
              <li>Code rất sau và rối</li>
              <li>Khó đọc, khó bảo trì</li>
              <li>
                Khó xử lý lỗi, vì ta cần try/catch để bắt lỗi nên lại từng tầng
                sẽ gọi thủ công
              </li>
            </Typo.ListTypo>
            <br />
            <b>{`=> Đây gọi là callback hell hoặc “pyramid of doom”`}.</b>
          </li>
          <li className="list-none">
            <Typo.PTypo>Demo chi tiết</Typo.PTypo>
            <Typo.BlockquoteTypo>
              <pre>
                {`function getUser(callback) {
  setTimeout(() => {
    console.log("✅ Lấy user xong");
    callback({ id: 1, name: "Bắc" });
  }, 1000);
}

function getPosts(userId, callback) {
  setTimeout(() => {
    console.log("✅ Lấy bài viết của user", userId);
    callback([{ id: 101, title: "Post 1" }]);
  }, 1000);
}

function getComments(postId, callback) {
  setTimeout(() => {
    console.log("✅ Lấy bình luận của bài viết", postId);
    callback(["Comment A", "Comment B"]);
  }, 1000);
}

// ❌ Callback hell
getUser((user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      console.log("📄 Bình luận:", comments);
    });
  });
});
`}
              </pre>
            </Typo.BlockquoteTypo>
          </li>
          <br />
        </Typo.ListTypo>

        <Typo.H4Typo>{`"Promise" ra đời để giải quyết:`} </Typo.H4Typo>
        <Typo.PTypo>
          Promise cho phép xâu chuỗi tác vụ bất đồng bộ một cách tuyến tính và
          dễ đọc hơn. Nó là giải pháp cho vấn đề Callback hell giúp viết code
          async - bất đồng bộ rõ ràng, xử lý lỗi dễ hơn.
        </Typo.PTypo>
        <Typo.ListTypo>
          <li className="list-none">
            <Typo.PTypo>
              Ví dụ như việc api tiếp theo cần đc lấy từ data trước
            </Typo.PTypo>
            <Typo.BlockquoteTypo>
              <pre>
                {`getUser()
  .then((user) => getPosts(user.id))
  .then((posts) => getComments(posts[0].id))
  .then((comments) => console.log(comments))
  .catch((err) => console.error(err));
`}
              </pre>
            </Typo.BlockquoteTypo>
            <Typo.PTypo>Một điều dễ nhận thấy từ ví dụ trên là:</Typo.PTypo>
            <Typo.ListTypo>
              <li>Code phẳng, không bị lồng nhau</li>
              <li>Dễ đọc, dễ bảo trì,debug</li>
              <li>Xử lý lỗi tập trung qua .catch()</li>
            </Typo.ListTypo>
            <br />
            <b>
              {" "}
              Về sau, async/await được xây trên Promise, giúp code bất đồng bộ
              nhìn gần như đồng bộ.
            </b>
          </li>
          <li className="list-none">
            <Typo.PTypo>Demo chi tiết</Typo.PTypo>
            <Typo.BlockquoteTypo>
              <pre>
                {`function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ Lấy user xong");
      resolve({ id: 1, name: "Bắc" });
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ Lấy bài viết của user", userId);
      resolve([{ id: 101, title: "Post 1" }]);
    }, 1000);
  });
}

function getComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ Lấy bình luận của bài viết", postId);
      resolve(["Comment A", "Comment B"]);
    }, 1000);
  });
}

// ✅ Promise giúp code phẳng hơn
getUser()
  .then((user) => getPosts(user.id))
  .then((posts) => getComments(posts[0].id))
  .then((comments) => console.log("📄 Bình luận:", comments))
  .catch((err) => console.error("❌ Lỗi:", err));
`}
              </pre>
            </Typo.BlockquoteTypo>
          </li>
        </Typo.ListTypo>
      </>
    ),
  },
  {
    id: 4,
    label: "Các loại hàm ( function )",
    description: `JS Basic`,
    content: (
      <>
        <Typo.H4Typo>Các loại hàm có sẵn trong JS</Typo.H4Typo>
        <Typo.ListTypo className="list-decimal">
          <li>
            Declaration function :
            <Typo.BlockquoteTypo>
              <pre>
                {`function getUser() {
  console.log("user")
};`}
              </pre>
            </Typo.BlockquoteTypo>
            <Typo.PTypo className="font-bold italic text-red-500">
              Đi kèm từ khóa function đầu tiên, bắt buộc đặt tên cho function.
              Hoisting ( có thể gọi hàm này trước khi nó định nghĩa ).
            </Typo.PTypo>
          </li>
          <li>
            Expression function
            <Typo.BlockquoteTypo>
              <pre>
                {`var getUser = function(user) {
  return user;
};`}
              </pre>
            </Typo.BlockquoteTypo>
            <Typo.BlockquoteTypo>
              <pre>
                {`setTimeout(function(){
});`}
              </pre>
            </Typo.BlockquoteTypo>
            <Typo.BlockquoteTypo>
              <pre>
                {`var myObject = {
  myFunction: function() {
    }
};`}
              </pre>
            </Typo.BlockquoteTypo>
            <Typo.PTypo className="font-bold italic text-red-500">
              Được gán cho 1 biến. Có thể đặt tên hoặc không. Chỉ có mục đích
              giải thích dễ hiểu cho một số trường hợp. Không có hoisting (
              không thể gọi hàm này trước khi nó định nghĩa).
            </Typo.PTypo>
          </li>
          <li>Arrow function</li>
        </Typo.ListTypo>
      </>
    ),
  },
  {
    id: 5,
    label: "Object constructor",
    description: `JS Basic - Xây dựng đối tượng`,
    content: (
      <>
        <Typo.H4Typo>
          Tạo bản thiết kế schema cho 1 đối tượng - Hàm tạo - Object
          Constructor. Đây chỉ là bản mô tả về đối tượng, thiết kế về đối tượng
          chứ không phải là 1 đối tượng. Có thể sử dụng declaration function
          hoặc expression function
        </Typo.H4Typo>
        <Typo.BlockquoteTypo>
          <pre>
            {`function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
};

var User = function(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
};
`}
          </pre>
        </Typo.BlockquoteTypo>

        <Typo.H4Typo>
          Tạo đối tượng từ bản thiết kế schema. Dùng từ khóa new với hàm tạo -
          object constructor thì mới là tạo đối tượng từ hàm tạo, bản thiết kế,
          schema.
        </Typo.H4Typo>
        <Typo.BlockquoteTypo>
          <pre>{`var author = new User('Bac','Le','Avatar');
var user = new User('Le','ke','Avatar');`}</pre>
        </Typo.BlockquoteTypo>
        <Typo.ListTypo className="marker:text-red-500">
          <li>
            Khi 1 đối tượng được tạo ra từ object constructor thì đối tượng được
            tạo ra sẽ có 1 phương thức là constructor.
          </li>
          <li>
            Để xem đối tượng được tạo ra từ đâu thì bạn có thể gọi tới thuộc
            tính object.constructor. So sánh với constructor của nó sẽ === true.
            Các đối tượng được tạo sẽ là 1 đối tượng riêng nên sẽ có thể tùy
            chỉnh cho từng đối tượng như thêm thuộc tính cho đối tượng, phương
            thức mà không ảnh hưởng gì tới nhau. this sẽ là từ từng đối tượng
            được gọi.
          </li>
        </Typo.ListTypo>
      </>
    ),
  },
  {
    id: 6,
    label: "Object prototype",
    description: `JS Basic - Prototype - nguyên mẫu là gì ? Khi nào sử dụng ?`,
    content: (
      <>
        <Typo.H4Typo>
          Prototype ở đây là khuôn, nguyên mẫu, bản gốc để tạo ra 1 đối tượng.
          Đây là các nguyên liệu để tạo, cấu thành lên bản thiết kế.
        </Typo.H4Typo>
        <Typo.BlockquoteTypo>
          <pre>
            {`function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
};

var User = function(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
};
`}
          </pre>
        </Typo.BlockquoteTypo>

        <Typo.H4Typo>
          Khi sử dụng prototype thì có thể thêm 1 thuộc tính vào constructor hàm
          tạo object mà ko cần phải define bên trong hàm tạo. Khác một chút là
          khi bạn thêm bằng prototype thì nó sẽ nằm ở _proto_. Thêm thuộc tính
          bằng phương thức mới lấy được this, còn thuộc tính không phải phương
          thức thì không có this.
        </Typo.H4Typo>
        <Typo.BlockquoteTypo>
          <pre>{`User.prototype.getName = function(){
    return this.firstName
};`}</pre>
        </Typo.BlockquoteTypo>
      </>
    ),
  },
];
