import { Card, CardContent, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

type TodoItemProps = {
  title: string;
  description: string;
};

const TodoItem = ({ title, description }: TodoItemProps) => {
    const [edit, setEdit] = useState(false);

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
        <IconButton aria-label="edit" onClick={() => setEdit(true)}>
            <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" >
            <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
