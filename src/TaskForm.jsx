import { useState } from "react";
import { useCreateTask } from "./api/useCreateTask";
import { getMessageError } from "./api/api";

const initialState = {
  title: "",
};

export const TaskForm = () => {

  const [form, setForm] = useState(initialState);
  const { mutateAsync, isPending } = useCreateTask();
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await mutateAsync(form);
      setForm(initialState);
      console.log(response);
    } catch (err) {
      getMessageError(err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" onChange={onChange} value={form.title} />
      <button disabled={isPending}>{isPending ? "Создаём" : "Создать"}</button>
    </form>
  );
};
