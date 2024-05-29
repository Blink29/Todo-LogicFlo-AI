import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState<{ title: string; description: string }[]>([]);

  const fetchTodos = () => {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(todos);
  };

  useEffect(() => {
    fetchTodos();

    const handleStorageChange = () => {
      fetchTodos();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem key={index} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
};

export default TodoList;
