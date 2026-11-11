import axios from "axios";

export const $api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
export const getMessageError = (error) => {
  return error.data?.response?.message ?? error.message;
};
