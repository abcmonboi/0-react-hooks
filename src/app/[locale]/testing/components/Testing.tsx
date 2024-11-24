"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState } from "react";

const arr = [
  { name: "hahah", age: 18 },
  {
    des: "lung tung",
  },
  { field3: "jhihi" },
];

const Testing = () => {
  const [isOpen, setIsOpen] = useState(false);
  //solve
  const dataToSend = arr.slice(0, isOpen ? 3 : 2);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Testing side</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={() => setIsOpen((prev) => !prev)}>
          Click to open
        </Button>
        {arr.slice(0, isOpen ? 3 : 2).map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </CardContent>
    </Card>
  );
};

export default Testing;
