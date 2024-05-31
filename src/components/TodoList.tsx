import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { useTodoContext } from "../context/TodoContext";
import { Button } from "@mui/material";

const TodoList = () => {
  const { todos, fetchTodos } = useTodoContext();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  return (
    <div>
      <Button
        variant="contained"
        className={filter === "all" ? "bg-green-500" : ""}
        color={filter === "all" ? "primary" : "secondary"}
        onClick={() => handleFilterChange("all")}
      >
        All Todos
      </Button>
      <Button
        variant="contained"
        color={filter === "completed" ? "primary" : "secondary"}
        onClick={() => handleFilterChange("completed")}
      >
        Completed Todos
      </Button>
      <Button
        variant="contained"
        color={filter === "uncompleted" ? "primary" : "secondary"}
        onClick={() => handleFilterChange("uncompleted")}
      >
        Uncompleted Todos
      </Button>
      {todos
        .slice()
        .filter((todo) => {
          if (filter === "all") return true;
          if (filter === "completed") return todo.completed;
          if (filter === "uncompleted") return !todo.completed;
          return false;
        })
        .map((todo) => (
          <TodoItem key={todo.key} todo={todo} />
        ))}
    </div>
  );
};

export default TodoList;
