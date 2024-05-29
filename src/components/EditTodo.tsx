import { useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useTodoContext } from "../context/TodoContext";

interface Todo {
  key: string;
  title: string;
  description: string;
  completed: boolean;
}

interface EditTodoProps {
  open: boolean;
  onClose: () => void;
  todo: Todo;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const EditTodo: React.FC<EditTodoProps> = ({ open, onClose, todo }) => {
  const { updateTodo } = useTodoContext();
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const handleSave = () => {
    const updatedTodo = { ...todo, title, description };
    updateTodo(todo.key, updatedTodo);
    onClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Todo
          </Typography>
          <Box
            id="model-modal-description"
            sx={{ mt: 2 }}
            className="flex flex-col gap-4"
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
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default EditTodo;
