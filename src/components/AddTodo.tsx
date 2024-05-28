import { Button } from '@mui/material'
import AddIcon from "@mui/icons-material/Add";

type Props = {}

const AddTodo = (props: Props) => {
  return (
    <div>
        <Button variant='contained' startIcon={<AddIcon />}>Add Todo</Button>

    </div>
  )
}

export default AddTodo