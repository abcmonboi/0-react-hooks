import React from "react";
import UseReducerDemo from "./components/UseReducerDemo";
import UseReducerWithToDo from "./components/UseReducerWithToDo";
import UseReducerDemo3 from "./components/UseReducerDemo3";

const page = () => {
  return (
    <div className="grid gap-4">
      <UseReducerDemo />
      <UseReducerWithToDo />
      <UseReducerDemo3 />
    </div>
  );
};

export default page;
