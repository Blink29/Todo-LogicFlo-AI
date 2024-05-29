import React, { useState } from "react";
import { Checkbox, FormControlLabel, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTodoContext } from "../context/TodoContext";
import EditTodo from "./EditTodo";

const TodoItem = ({ todo }) => {
  const { deleteTodo, updateTodo } = useTodoContext();
  const [editOpen, setEditOpen] = useState(false);

  const handleDelete = () => {
    deleteTodo(todo.key);
  };

  const handleEditOpen = () => {
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleCheckboxChange = () => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    updateTodo(todo.key, updatedTodo);
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={todo.completed}
            onChange={handleCheckboxChange}
            color="primary"
          />
        }
        label={todo.completed ? <del>{todo.title}</del> : todo.title}
      />
      <div>{todo.description}</div>
      <IconButton onClick={handleEditOpen}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
      <EditTodo open={editOpen} onClose={handleEditClose} todo={todo} />
    </div>
  );
};

export default TodoItem;
