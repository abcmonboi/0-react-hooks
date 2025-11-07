"use server";

export async function callApiViaServer() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "no-store",
  });
  const data = await res.json();
  console.log("📡 Server Action nhận:", data);
  return data;
}
