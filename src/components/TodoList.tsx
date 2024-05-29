import {useEffect} from "react";
import TodoItem from "./TodoItem";
import { useTodoContext } from "../context/TodoContext";

const TodoList = () => {
  const { todos, fetchTodos } = useTodoContext(); 

  useEffect(() => {
    fetchTodos();
  }, []); 
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.key} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
