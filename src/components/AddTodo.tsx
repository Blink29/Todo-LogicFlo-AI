import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useTodoContext } from "../context/TodoContext";

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

const AddTodo = () => {
  const {addTodo} = useTodoContext();
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddTodo = () => {
    const key = Date.now().toString();
    const newTodo = {
      key,
      title, 
      description,
      completed: false
    };
    addTodo(newTodo);
    setTitle("");
    setDescription("");
    handleClose();
  }

  return (
    <div>
      <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpen}>
        Add Todo
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Todo
          </Typography>
            <Box
             id="model-modal-description"
             sx = {{mt: 2}}
             className = "flex flex-col gap-4"
             >
                <TextField 
                    className="w-full"
                    value={title}
                    placeholder="Enter todo title"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField 
                    className="w-full"
                    value={description}
                    placeholder="Enter todo description"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Button variant="contained" className="w-full" onClick={handleAddTodo}>
                    Add Todo
                </Button>
            </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddTodo;
