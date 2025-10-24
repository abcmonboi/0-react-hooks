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
      "Gọi lại phần xử lý sau khi các thao tác bất đồng bộ chạy xong.(đảm bảo chạy sau khi tác vụ async hoàn tất).",
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
    description:
      "Mục đích sinh ra, liên quan gì đến phần xử lý thao tác bất đồng bộ bằng callBack.",
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
            <Typo.PTypo>
              Một điều dễ nhận thấy từ ví dụ trên là:
              <Typo.ListTypo>
                <li>Code rất sau và rối</li>
                <li>Khó đọc, khó bảo trì</li>
                <li>
                  Khó xử lý lỗi, vì ta cần try/catch để bắt lỗi nên lại từng
                  tầng sẽ gọi thủ công
                </li>
              </Typo.ListTypo>
              <br />
              <b>{`=> Đây gọi là callback hell hoặc “pyramid of doom”`}.</b>
            </Typo.PTypo>
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
            <Typo.PTypo>
              Một điều dễ nhận thấy từ ví dụ trên là:
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
            </Typo.PTypo>
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
];
