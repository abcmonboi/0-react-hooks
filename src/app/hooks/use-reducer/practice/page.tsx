import React from "react";
import UseReducerDemo from "./components/UseReducerDemo";
import UseReducerWithToDo from "./components/UseReducerWithToDo";

const page = () => {
  return (
    <div className="grid gap-4">
      <UseReducerDemo />
      <UseReducerWithToDo />
    </div>
  );
};

export default page;
