import { $api } from "./api";

export const createTask = async (newTask) => {
  const response = await $api.post("/todos", newTask);
  return response.data;
};
