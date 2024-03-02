import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn react",
    description: "hello i am sujon sheikh. I am from bangladesh.",
    tags: ["web", "js", "react"],
    priority: "High",
    idFavorite: true,
  };
  const [tasks, setTask] = useState(defaultTask);

  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        {/* Search Box  */}
        <SearchTask />
        {/* Search Box Ends  */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          {/* Task Action  */}
          <TaskAction />

          {/* Task List  */}
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
