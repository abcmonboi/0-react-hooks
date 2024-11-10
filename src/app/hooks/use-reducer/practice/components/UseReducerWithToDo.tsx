"use client";

import { z } from "zod";
import React, { useReducer, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface State {
  tasks: string[];
}

interface Action {
  type: string;
  payload: string | number;
}

const initTasks: State = {
  tasks: [],
};

const ADD_ACTION: string = "add";
const REMOVE_ACTION: string = "remove";

const addTask = (payload: string): Action => {
  return {
    type: ADD_ACTION,
    payload,
  };
};

const removeTask = (payload: number): Action => {
  return {
    type: REMOVE_ACTION,
    payload,
  };
};

const reducer = (state: State, action: Action) => {
  let newResult: State = {
    tasks: [],
  };
  switch (action.type) {
    case "add":
      newResult = {
        ...state,
        tasks: [...state.tasks, action.payload as string],
      };
      break;
    case "remove":
      newResult = {
        ...state,
        tasks: state.tasks.filter(
          (_, idx) => idx !== (action.payload as number)
        ),
      };
      break;
    default:
      throw new Error("Invalid ");
  }
  return newResult;
};

const formSchema = z.object({
  task: z
    .string()
    .min(1, {
      message: "Required",
    })
    .max(50),
});

const UseReducerWithToDo = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: "",
    },
  });
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [state, dispatch] = useReducer(reducer, initTasks);
  const { tasks } = state;
  const taskInput = form.watch("task");
  function onSubmit(values: z.infer<typeof formSchema>) {
    dispatch(addTask(taskInput));
    form.resetField("task");
    inputRef?.current?.focus();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Todo App with useReducer()</CardTitle>
        <CardDescription>Form</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid w-full items-center gap-4">
              <FormField
                control={form.control}
                name="task"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>List Task</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Input task to do"
                        {...field}
                        ref={inputRef}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Add Task</Button>
            </div>
          </form>
        </Form>
        <div className="min-h-[40vh] mt-10">
          {tasks.length > 0 &&
            tasks.map((task: any, index: any) => (
              <div className="flex justify-between mb-4" key={index + task}>
                <li className="marker:text-green-500">{task}</li>
                <Button onClick={() => dispatch(removeTask(index))}>
                  &times;
                </Button>
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UseReducerWithToDo;
