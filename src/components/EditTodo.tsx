import { useState } from "react";
import { Button, Modal, TextField } from "@mui/material";
import { useTodoContext } from "../context/TodoContext";

const EditTodo = ({ open, onClose, todo }) => {
  const { updateTodo } = useTodoContext();
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const handleSave = () => {
    const updatedTodo = { ...todo, title, description };
    updateTodo(todo.key, updatedTodo);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </div>
    </Modal>
  );
};

export default EditTodo;
