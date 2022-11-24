import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

import { List } from "../components/List";
import { useAuth } from "../hooks/auth";
import { api } from "../services/api";

export type Task = {
  id: string;
  title: string;
  isDone: boolean;
};

export function MyToDoList() {
  const { user } = useAuth();

  const navigate = useNavigate();

  const { data: lists, refetch: fetchUserLists } = useQuery(
    "getUsersList",
    () => api.get("/lists")
  );

  const toDo = {
    id: lists?.data[0].id,
    name: "To-do",
    ownerId: user.id,
    tasks: lists?.data[0].tasks.filter((task: Task) => !task.isDone),
  };

  const done = {
    id: lists?.data[0].id,
    name: "Done",
    ownerId: user.id,
    tasks: lists?.data[0].tasks.filter((task: Task) => task.isDone),
  };

  return (
    <section>
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center mt-10">
        <List fetchUserLists={fetchUserLists} data={toDo} color="#E88D39" />
        <List fetchUserLists={fetchUserLists} data={done} color="#4AC959" />
      </div>
      <div className="w-full flex items-center justify-center my-5 lg:mt-10 text-green-600 hover:text-green-500 text-xl font-bold">
        <Button title="Go back to home page" onClick={() => navigate("/")} />
      </div>
    </section>
  );
}
