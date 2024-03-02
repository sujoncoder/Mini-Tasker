import { useState } from "react";
import AddTaskModel from "./AddTaskModel";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const defaultTask = {
    // id: crypto.randomUUID(),
    title: "Learn react",
    description: "hello i am sujon sheikh. I am from bangladesh.",
    tags: ["web", "js", "react"],
    priority: "High",
    isFavorite: false,
  };
  const [tasks, setTask] = useState([defaultTask]);
  const [openTaskModal, setOpenTaskModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  // for save add task modal
  const handleChange = (newTask) => {
    setTask([...tasks, newTask]);
    setOpenTaskModal(false);
  };

  const handleEditTask = (task) => {};

  return (
    <section className="mb-20" id="tasks">
      {openTaskModal && <AddTaskModel onSave={handleChange} />}
      <div className="container">
        {/* Search Box  */}
        <SearchTask />
        {/* Search Box Ends  */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          {/* Task Action  */}
          <TaskAction onHandleClick={() => setOpenTaskModal(true)} />

          {/* Task List  */}
          <TaskList tasks={tasks} onEdit={handleEditTask} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
