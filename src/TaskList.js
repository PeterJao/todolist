import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onEdit, onDelete, filterOption }) => {
  // Sort tasks based on completion status
  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.completed && !b.completed) return 1; // Move completed tasks to the bottom
    if (!a.completed && b.completed) return -1; // Move active tasks to the top
    return 0;
  });

  const filteredTasks = sortedTasks.filter((task) => {
    if (filterOption === "all") {
      return true; // Show all tasks
    } else if (filterOption === "completed") {
      return task.completed; // Show only completed tasks
    } else if (filterOption === "active") {
      return !task.completed; // Show only active tasks
    }
    return true;
  });

  return (
    <ul>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TaskList;
