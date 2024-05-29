import { Card, CardContent, Typography } from "@mui/material";

type TodoItemProps = {
  title: string;
  description: string;
};

const TodoItem = ({ title, description }: TodoItemProps) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
