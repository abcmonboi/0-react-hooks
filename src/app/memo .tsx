"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";

const UseMemoDemo = () => {
  const [products, setProducts] = useState<{ name: string; price: string }[]>(
    []
  );
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleProduct = () => {
    setProducts((prod) => {
      return [
        ...prod,
        {
          name: name,
          price: price,
        },
      ];
    });
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Demo Using useMemo() hook</CardTitle>
        <CardDescription>
          Enter product to calc sum price of product
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col justify-start">
          <h5>List Item</h5>
          <ul>
            {products.length > 0 &&
              products.map((prod) => (
                <li className="marker:text-blue-400" key={prod?.name}>
                  {prod.name} - {prod.price} `$`
                </li>
              ))}
          </ul>
        </div>
        <form>
          <div className="flex flex-col gap-4">
            <div className="grid grid-flow-row gap-4 grid-rows-12">
              <label className="row-span-1" htmlFor="name">
                Product Name:
              </label>
              <input
                required
                onChange={(e) => setName(e.target.value)}
                className="h-10 row-span-3 border rounded-lg border-blue-300"
                id="name"
                name="name"
                value={name}
              ></input>
            </div>
            <div className="flex gap-4">
              <label htmlFor="price">Product Price:</label>
              <input
                required
                onChange={(e) => setPrice(e.target.value)}
                className="h-10 w-[30vw] border rounded-lg border-blue-300"
                id="price"
                name="price"
                value={price}
              />
            </div>
            <Button onClick={handleProduct} type="submit">
              Add Product
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default UseMemoDemo;
