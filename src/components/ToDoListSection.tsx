import { List } from "./List";
import { doneList, toDoList } from "../utils/staticLists";

export function ToDoListSection() {
  return (
    <section className="-mt-60 md:mt-0">
      <div className="w-full min-h-[420px] bg-black-rectangle bg-no-repeat bg-cover flex flex-col items-center -mt-8">
        <h2 className="text-white font-size font-semibold text-6xl underline underline-offset-8 decoration-green-500 mt-32">
          To-do List
        </h2>
        <p className="text-white text-2xl text-center font-medium mt-10">
          Drag and drop to set your main priorities, check <br /> when done and
          create what's new.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-center items-center lg:items-start mt-11 lg:bg-graphism lg:bg-no-repeat lg:bg-left-middle">
        <List data={toDoList} color="#E88D39" hasStaticContent />
        <List data={doneList} color="#4AC959" hasStaticContent />
      </div>
    </section>
  );
}
