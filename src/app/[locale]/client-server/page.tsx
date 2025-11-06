"use client";

import { useState } from "react";
import { callApiViaServer } from "./actions";

export default function Page() {
  const [clientData, setClientData] = useState<any>(null);
  const [serverData, setServerData] = useState<any>(null);

  // ✅ Gọi trực tiếp từ client → API public
  const handleClientFetch = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    setClientData(data);
  };

  // ✅ Gọi thông qua server action
  const handleServerFetch = async () => {
    const data = await callApiViaServer();
    setServerData(data);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-bold">Demo: Client vs Server Action</h1>

      <div className="space-x-4">
        <button
          onClick={handleClientFetch}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Client Fetch
        </button>

        <button
          onClick={handleServerFetch}
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          Server Action Fetch
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div>
          <h2 className="font-semibold">Client fetch result:</h2>
          <pre className="bg-gray-900 text-white p-3 rounded-md text-sm">
            {clientData ? JSON.stringify(clientData, null, 2) : "No data yet"}
          </pre>
        </div>

        <div>
          <h2 className="font-semibold">Server Action fetch result:</h2>
          <pre className="bg-gray-900 text-white p-3 rounded-md text-sm">
            {serverData ? JSON.stringify(serverData, null, 2) : "No data yet"}
          </pre>
        </div>
      </div>
    </div>
  );
}
