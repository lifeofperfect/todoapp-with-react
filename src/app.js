import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "react",
      onCompleted: false,
    },
    {
      text: "python",
      onCompleted: true,
    },
  ]);

  //add Todo
  const addTodo = (text) => {
    const newTask = [...todos, { text }];
    setTodos(newTask);
  };

  //update task
  const completeTask = (index) => {
    const newTodos = [...todos];
    newTodos[index].onCompleted = true;
    setTodos(newTodos);
  };

  //remove task
  const removeTask = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <h1>
        {todos.map((todo, index) => (
          <TodoList
            key={index}
            index={index}
            tasks={todo}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        ))}
      </h1>
    </div>
  );
}

export default App;
