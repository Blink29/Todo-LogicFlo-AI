import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { useTodoContext } from "../context/TodoContext";
import { Box, Button } from "@mui/material";

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
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Button
          variant="contained"
          className={filter === "all" ? "active" : ""}
          color={filter === "all" ? "primary" : "secondary"}
          onClick={() => handleFilterChange("all")}
          sx={{ mx: 1 }} 
        >
          All Todos
        </Button>
        <Button
          variant="contained"
          color={filter === "completed" ? "primary" : "secondary"}
          onClick={() => handleFilterChange("completed")}
          sx={{ mx: 1 }} 
        >
          Completed Todos
        </Button>
        <Button
          variant="contained"
          color={filter === "uncompleted" ? "primary" : "secondary"}
          onClick={() => handleFilterChange("uncompleted")}
          sx={{ mx: 1 }} 
        >
          Uncompleted Todos
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {todos
          .slice()
          .filter((todo) => {
            if (filter === "all") return true;
            if (filter === "completed") return todo.completed;
            if (filter === "uncompleted") return !todo.completed;
            return false;
          })
          .map((todo) => (
            <Box key={todo.key} sx={{ m: 1, p: 2, bgcolor: "background.paper", borderRadius: 4, border: "1px solid #ddd" }}>
              <TodoItem todo={todo} />
            </Box>
          ))}
      </Box>
    </div>
  );
};

export default TodoList;
