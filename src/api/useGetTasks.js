import { useQuery } from "@tanstack/react-query";
import { getTodos } from "./getTasks";

export const useGetTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
    staleTime: Infinity,
  });
};
