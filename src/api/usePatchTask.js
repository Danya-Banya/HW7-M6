import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchTask } from "./patchTask";

export const usePatchTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: patchTask,
    onSuccess: (patched, variables) => {
      queryClient.setQueryData(["todos"], (oldTasks) => {
        return oldTasks.map((task) =>
          task.id === variables.id ? { ...task, ...variables.data } : task,
        );
      });
    },
  });
};
