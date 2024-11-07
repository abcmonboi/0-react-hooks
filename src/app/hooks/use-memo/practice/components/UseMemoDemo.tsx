"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useMemo, useRef, useState } from "react";

const UseMemoDemo = () => {
  const [products, setProducts] = useState<{ name: string; price: number }[]>(
    []
  );
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const nameRef = useRef<HTMLInputElement | null>(null);

  const handleProduct = () => {
    setProducts((prod) => {
      return [
        ...prod,
        {
          name: name,
          price: +price,
        },
      ];
    });
    setName("");
    setPrice("");
    nameRef.current?.focus();
  };
  const sumWithInitial = useMemo(() => {
    return products.reduce((result, currentValue) => {
      console.log("Ssss");
      return result + currentValue.price;
    }, 0);
  }, [products]);

  // const sumWithInitial = products.reduce((result, currentValue) => {
  //   console.log("Ssss", result);
  //   return result + currentValue.price;
  // }, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Demo Using useMemo() hook</CardTitle>
        <CardDescription>
          Enter product to calc sum price of product
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col justify-start gap-4">
          <h5>List Item:</h5>
          <div className="min-h-[15vh]">
            {products.length > 0 &&
              products.map((prod, index) => (
                <li
                  className="marker:text-blue-400"
                  key={prod?.name + ` ${index}`}
                >
                  {prod.name} - {prod.price} $
                </li>
              ))}
          </div>

          <div className="bg-green-500">Total: {sumWithInitial} </div>
        </div>
        <div className="grid gap-4">
          <div className="grid grid-flow-row gap-4 ">
            <label className="row-span-1" htmlFor="name">
              Product Name:
            </label>
            <input
              ref={nameRef}
              autoComplete="additional-name"
              onChange={(e) => setName(e.target.value)}
              className="h-10 row-span-3 border rounded-lg border-blue-300"
              id="name"
              name="name"
              value={name}
            ></input>
          </div>
          <div className="grid grid-flow-row gap-4 ">
            <label htmlFor="price">Product Price:</label>
            <input
              autoComplete="additional-name webauthn"
              onChange={(e) => setPrice(e.target.value)}
              className="h-10 row-span-3 border rounded-lg border-blue-300"
              id="price"
              name="price"
              value={price}
            />
          </div>
          <Button onClick={handleProduct}>Add Product</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UseMemoDemo;
