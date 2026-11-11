import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask } from "./createTask";

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTask,
    onSuccess: (newTask) => {
      queryClient.setQueryData(["todos"], (oldTasks) => {
        return [newTask, ...(oldTasks || [])];
      });
    },
  });
};
