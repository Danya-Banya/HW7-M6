import { $api } from "./api";

export const getTodos = async () => {
  const response = await $api.get("/todos?_limit=10");
  return response.data;
};
