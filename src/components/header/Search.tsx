import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/form";
import { useQuery, gql } from "@apollo/client";
import { GET_LOCATION, GET_LOCATIONS } from "@/main";

const Search = () => {
  //   const { loading, error, data } = useQuery(GET_LOCATIONS, {
  //     variables: { locale: "en", search: "" },
  //   });

  const { loading, error, data } = useQuery(GET_LOCATION);
  const formShema = z.object({
    search: z.string().min(3, "Search must be at least 3 characters"),
  });
  const form = useForm({
    resolver: zodResolver(formShema),
    defaultValues: {
      search: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: { search: string }) => {};
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              {...form.register("search")}
              value={form.watch("search")}
              name="search"
              type="text"
              placeholder="Search...(not Dev)"
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute left-0 top-0 text-blue-500">
              {/* Palm Tree Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-10 h-10 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 21V9a1 1 0 012 0v12m0 0H9m2 0h2M7.4 11c-.25 1.49.43 2.99 1.69 3.73.98.56 2.4.4 3.34.77.58.22 1.02.63 1.4 1.08.4-.54.9-1 1.5-1.3m-.34 3.29c-.46-.13-1.03-.02-1.47.35-.41.34-.66.86-.56 1.41.1.56.45.95.98 1.23"
                />
              </svg>
            </div>
          </div>
        </div>
        <span className="text-red-500">
          {form.formState.errors.search?.message}
        </span>
      </form>
    </Form>
  );
};

export default Search;
