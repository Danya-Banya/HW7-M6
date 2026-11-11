import { $api } from "./api";

export const patchTask = async ({ id, data }) => {
  const response = await $api.patch(`/todos/${id}`, data);
  return response.data;
};
