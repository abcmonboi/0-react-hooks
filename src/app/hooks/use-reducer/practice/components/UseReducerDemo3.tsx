"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useReducer, useRef, useState } from "react";

type initStateProps = {
  task: string;
  tasks: string[];
};

const initState: initStateProps = {
  task: "",
  tasks: [],
};

const SET_TASK = "set_task";
const ADD_TASK = "add_task";
const EDIT_TASK = "edit_task";
const REMOVE_TASK = "remove_task";

const setTask = (payload: string) => {
  return {
    type: SET_TASK,
    payload,
  };
};
const addTask = (payload: string) => {
  return {
    type: ADD_TASK,
    payload,
  };
};
const deleteTask = (payload: string) => {
  return {
    type: REMOVE_TASK,
    payload,
  };
};
const editTask = (payload: { id: string; value: string }) => {
  return {
    type: EDIT_TASK,
    payload,
  };
};

const reducer = (
  state: initStateProps,
  action: {
    type: string;
    payload: string | { id: string; value: string } | [];
  }
) => {
  let newState: initStateProps = state;
  switch (action?.type) {
    case "set_task":
      newState = {
        ...state,
        task: action.payload as string,
      };
      break;
    case "add_task":
      newState = {
        ...state,
        tasks: [...state.tasks, action.payload as string],
      };
      break;
    case "remove_task":
      newState = {
        ...state,
        tasks: state.tasks.filter(
          (item) => item !== (action.payload as string)
        ),
      };
      break;
    case "edit_task":
      newState = {
        ...state,
        tasks: state.tasks.map((item, index) => {
          let tempArray = [];
          if (item[index] === action.payload.id) {
            item[index] === action.payload.value + "asddassd";
          }
          tempArray.push(item[index]);
          return tempArray;
        }),
      };
      break;

    default:
      break;
  }
  return newState;
};

const UseReducerDemo3 = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { task, tasks } = state;
  const taskRef = useRef<HTMLInputElement>(null);

  const handleAddItem = () => {
    dispatch(addTask(task));
    dispatch(setTask(""));
    taskRef?.current?.focus();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Prague itineary</CardTitle>
        <CardDescription>
          Writing concise update logic with Immer.( If updating arrays and
          objects without mutation feels tedious, you can use a library like
          Immer to reduce repetitive code. Immer lets you write concise code as
          if you were mutating objects, but under the hood it performs immutable
          updates: )
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-start min-w-[40vw] gap-4">
        <div className="flex gap-2 item-center ">
          <Input
            ref={taskRef}
            value={task}
            onChange={(e) => dispatch(setTask(e.target.value))}
            placeholder="Add task"
          />
          <Button onClick={() => handleAddItem()}>Add</Button>
        </div>
        <div className="flex flex-col gap-2 min-h-[20vh]">
          {tasks.length > 0 &&
            tasks.map((item, index) => (
              <div key={item + index} className="flex gap-4 items-center">
                <Input
                  value={"Visit Kafka Museum"}
                  className="w-5"
                  type="checkbox"
                />
                <span>{item}</span>
                <Button
                  onClick={() =>
                    dispatch(editTask({ id: index.toString(), value: item }))
                  }
                >
                  Edit
                </Button>
                <Button onClick={() => dispatch(deleteTask(item))}>
                  Delete
                </Button>
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UseReducerDemo3;
