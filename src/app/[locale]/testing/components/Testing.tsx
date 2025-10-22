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
  return (
    <Card>
      <CardHeader>
        <CardTitle>Testing side</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={() => setIsOpen((prev) => !prev)}>
          Click to {isOpen ? "close" : "open"}
        </Button>
        {arr.slice(0, isOpen ? undefined : 1).map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </CardContent>
    </Card>
  );
};

export default Testing;
