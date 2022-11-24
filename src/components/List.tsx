import { useMutation, UseQueryResult } from "react-query";

import { Button } from "./Button";

import { ReactComponent as CircleIcon } from "../assets/circle-icon.svg";
import { ReactComponent as CheckCircleIcon } from "../assets/check-circle-icon.svg";
import { KeyboardEvent, useState } from "react";
import { Input } from "./Form/Input";
import { Pencil, Plus, X } from "phosphor-react";
import { Task } from "../pages/MyToDoList";
import { api } from "../services/api";

type Props = {
  data: {
    id: string;
    name: string;
    ownerId: string;
    tasks: Task[];
  };
  color: string;
  hasStaticContent?: boolean;
  fetchUserLists?: () => Promise<UseQueryResult>;
};

export type ListData = {
  name: string;
  tasks: Task[];
};

export function List({
  data,
  color,
  hasStaticContent = false,
  fetchUserLists,
}: Props) {
  const [showTaskInput, setShowTaskInput] = useState(false);
  const [selectedTaskToEdit, setSelectedTaskToEdit] = useState<string | null>(
    null
  );
  const [editTaskInputValue, setEditTaskInputValue] = useState("");

  const isToDoList = data?.name === "To-do";

  function NewTask() {
    const [taskInputValue, setTaskInputValue] = useState("");

    const { mutate: createNewTask } = useMutation(
      () =>
        api.post(`/lists/${data.id}/tasks`, {
          title: taskInputValue,
        }),
      {
        onSuccess: () => {
          if (fetchUserLists) {
            fetchUserLists();
          }
        },
      }
    );

    return (
      <div className="flex items-center pr-6 mb-5">
        {showTaskInput ? (
          <X
            className="text-orange-500 hover:text-orange-600 mr-4"
            size={28}
            onClick={() => setShowTaskInput(false)}
          />
        ) : (
          <Plus
            className="text-orange-500 hover:text-orange-600 mr-4"
            size={24}
            onClick={() => setShowTaskInput(true)}
          />
        )}
        {showTaskInput ? (
          <Input
            borderColor="slate-200"
            value={taskInputValue}
            onChange={(event) => setTaskInputValue(event.target.value)}
            onKeyUp={(event: KeyboardEvent<HTMLInputElement>) => {
              if (event.key === "Enter") {
                createNewTask();
                setTaskInputValue("");
                setShowTaskInput(false);
              }
            }}
            placeholder="Type and hit enter to save"
          />
        ) : (
          "Click the plus icon to add a task"
        )}
      </div>
    );
  }

  const { mutate: markTaskAsDone } = useMutation(
    (payload: string) =>
      api.patch(`/lists/${data.id}/tasks/${payload}`, {
        isDone: true,
      }),
    {
      onSuccess: () => {
        if (fetchUserLists) {
          fetchUserLists();
        }
      },
    }
  );

  const { mutate: unmarkTaskAsDone } = useMutation(
    (payload: string) =>
      api.patch(`/lists/${data?.id}/tasks/${payload}`, {
        isDone: false,
      }),
    {
      onSuccess: () => {
        if (fetchUserLists) {
          fetchUserLists();
        }
      },
    }
  );

  const { mutate: deleteAllTasksFromToDo } = useMutation(
    (payload: string) => api.delete(`/lists/${payload}/tasks?done=${false}`),
    {
      onSuccess: () => {
        if (fetchUserLists) {
          fetchUserLists();
        }
      },
    }
  );

  const { mutate: deleteAllTasksFromDone } = useMutation(
    (payload: string) => api.delete(`/lists/${payload}/tasks?done=${true}`),
    {
      onSuccess: () => {
        if (fetchUserLists) {
          fetchUserLists();
        }
      },
    }
  );

  const { mutate: deleteTask } = useMutation(
    (payload: string) =>
      api.delete(`/lists/${payload}/tasks?taskId=${payload}`),
    {
      onSuccess: () => {
        if (fetchUserLists) {
          fetchUserLists();
        }
      },
    }
  );

  const { mutate: editTask } = useMutation(
    (payload: string) =>
      api.patch(`/lists/${data.id}/tasks/${payload}`, {
        title: editTaskInputValue,
      }),
    {
      onSuccess: () => {
        if (fetchUserLists) {
          fetchUserLists();
        }
      },
    }
  );

  return (
    <div
      className={`max-w-sm min-w-[380px] shadow-to-do-list md:ml-10 mb-10 lg:mb-0`}
      style={{ borderTopWidth: 20, borderTopColor: color }}
    >
      <hgroup className="text-center mt-10">
        <h3 className="text-black text-[40px] font-semibold">{data?.name}</h3>
        <p className="text-black text-2xl">
          {isToDoList ? "Take a breath." : "Congratulations!"}
        </p>
        <p className={`text-black text-2xl font-bold`}>
          {isToDoList
            ? "Start doing."
            : `You have done ${data.tasks?.length ?? 0} ${
                data.tasks?.length === 1 ? "task" : "tasks"
              }`}
        </p>
      </hgroup>
      <ul className="p-6">
        {isToDoList && !hasStaticContent && <NewTask />}

        {data?.tasks?.map((item) => (
          <li className="flex items-center mb-5" key={item.id}>
            <>
              {item.isDone ? (
                <CheckCircleIcon
                  className="mr-4"
                  onClick={() => !hasStaticContent && unmarkTaskAsDone(item.id)}
                />
              ) : selectedTaskToEdit === item.id ? (
                <X
                  className="text-orange-500 mr-4"
                  size={28}
                  onClick={() => setSelectedTaskToEdit(null)}
                />
              ) : (
                <CircleIcon
                  className="mr-4"
                  onClick={() => !hasStaticContent && markTaskAsDone(item.id)}
                />
              )}
              <div className="flex items-center justify-between w-full">
                {selectedTaskToEdit === item.id ? (
                  <Input
                    borderColor="transparent"
                    value={editTaskInputValue}
                    onChange={(event) =>
                      setEditTaskInputValue(event.target.value)
                    }
                    onKeyUp={(event: KeyboardEvent<HTMLInputElement>) => {
                      if (event.key === "Enter") {
                        editTask(item.id);
                        setSelectedTaskToEdit(null);
                        setEditTaskInputValue("");
                      }
                    }}
                    placeholder="Type and hit enter to save"
                  />
                ) : (
                  <span className="max-w-[68%] break-words">{item.title}</span>
                )}

                <div
                  className={`flex ${
                    selectedTaskToEdit === item.id && "hidden"
                  }`}
                >
                  {isToDoList && !hasStaticContent && (
                    <Pencil
                      className="text-orange-500 lg:text-gray-500 lg:hover:text-gray-700"
                      onClick={() => {
                        setEditTaskInputValue(item.title);
                        setSelectedTaskToEdit(item.id);
                      }}
                    />
                  )}
                  <button
                    className="text-gray-600 lg:hover:text-gray-700 font-bold text-[12px] ml-2"
                    disabled={hasStaticContent}
                    onClick={() => deleteTask(item.id)}
                  >
                    delete
                  </button>
                </div>
              </div>
            </>
          </li>
        ))}
      </ul>

      <footer className="flex justify-center m-10 pb-10 md:pb-0">
        <Button
          className="w-full h-16 bg-black hover:bg-slate-900 text-white text-2xl font-semibold rounded-[10px]"
          title="erase all"
          disabled={hasStaticContent}
          onClick={() =>
            isToDoList
              ? deleteAllTasksFromToDo(data.id)
              : deleteAllTasksFromDone(data.id)
          }
        />
      </footer>
    </div>
  );
}
