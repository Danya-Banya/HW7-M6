import React from "react";
import "./App.css";
import { useGetTodos } from "./api/useGetTasks";
import { usePatchTask } from "./api/usePatchTask";
import { TaskForm } from "./TaskForm";

export const App = () => {
  const { mutate: updateTask } = usePatchTask();
  const { data, isPending, error } = useGetTodos();
  if (isPending) return <h2>Загрузка...</h2>;
  if (error) return <h2>Ошибка! {error}</h2>;
  return (
    <>
      <TaskForm />

      <div className="tasksList">
        {data?.map((task) => (
          <div className="taskCard" key={task.id}>
            <h2>{task.title}</h2>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={(e) =>
                updateTask({
                  id: task.id,
                  data: { completed: e.target.checked },
                })
              }
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
