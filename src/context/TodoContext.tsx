import React, { createContext, useContext, useEffect, useState } from "react";

type Todo = {
  key: string;
  title: string;
  description: string;
  completed: boolean;
};

type TodoContextType = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (key: string) => void;
  updateTodo: (key: string, updatedTodo: Todo) => void;
  fetchTodos: () => void;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos(); 
  }, []);

  const fetchTodos = () => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(storedTodos);
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(storedTodos);
  }, []);

  const addTodo = (todo: Todo) => {
    const updatedTodos = [...todos, todo];
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const deleteTodo = (key: string) => {
    const updatedTodos = todos.filter((todo) => todo.key !== key);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const updateTodo = (key: string, updatedTodo: Todo) => {
    const updatedTodos = todos.map((todo) => (todo.key === key ? updatedTodo : todo));
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo, fetchTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
};

export { TodoProvider, useTodoContext };
