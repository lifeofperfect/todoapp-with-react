import React from "react";

function TodoList({ tasks, index, completeTask, removeTask }) {
  return (
    <div
      className="Todo"
      style={{ textDecoration: tasks.onCompleted ? "line-through" : "" }}
    >
      <li>{tasks.text}</li>
      <div>
        <button onClick={() => completeTask(index)}>Completed</button>
        <button onClick={() => removeTask(index)}>x</button>
      </div>
    </div>
  );
}

export default TodoList;
