import { useState } from "react";
import AddTaskModel from "./AddTaskModel";
import NoTaskFound from "./NoTaskFound";
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
  const handleAddEditeTask = (newTask, isAdd) => {
    if (isAdd) {
      setTask([...tasks, newTask]);
    } else {
      setTask(
        tasks.map((task) => {
          if (task.id == newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setOpenTaskModal(false);
  };

  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setOpenTaskModal(true);
  };

  const handleCloseClick = () => {
    setOpenTaskModal(false);
    setTaskToUpdate(null);
  };

  // delete one task
  const handleDeleteTask = (taskId) => {
    const remainTask = tasks.filter((task) => task.id !== taskId);
    setTask(remainTask);
  };

  // delete all task
  const handleAllDelete = () => {
    tasks.length = 0;
    setTask([...tasks]);
  };

  // togle fav icon
  const handleFavorite = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const newTask = [...tasks];
    newTask[taskIndex].isFavorite = !newTask[taskIndex].isFavorite;
    setTask(newTask);
  };

  // handle search
  const handleSearch = (searchValue) => {
    const findItem = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setTask(findItem);
  };

  return (
    <section className="mb-20" id="tasks">
      {openTaskModal && (
        <AddTaskModel
          onSave={handleAddEditeTask}
          taskToUpdate={taskToUpdate}
          onCloseClick={handleCloseClick}
        />
      )}
      <div className="container">
        {/* Search Box  */}
        <SearchTask onSearch={handleSearch} />
        {/* Search Box Ends  */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          {/* Task Action  */}
          <TaskAction
            onHandleClick={() => setOpenTaskModal(true)}
            onDeleteAllClick={handleAllDelete}
          />

          {/* Task List  */}
          {tasks.length > 0 ? (
            <TaskList
              tasks={tasks}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
              onFav={handleFavorite}
            />
          ) : (
            <NoTaskFound />
          )}
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
