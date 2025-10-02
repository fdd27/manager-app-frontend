import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#272727',
    border: '1px solid #727272',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
};

const TodoForm = () => {
    const [task, setTask] = useState<string>("");

    const addTask = (e: React.SyntheticEvent) => {
        e.preventDefault();
    };

    return (
        <Box sx={style} tabIndex={-1}>
            <form onSubmit={addTask} className="flex flex-col gap-4">
                <Typography id="modal-todo-form-title" variant="h6" component="h2" className="text-center">
                    Add a new task
                </Typography>
                <TextField 
                    required
                    id="txt-task"
                    label="Task"
                    value={task}
                    variant="outlined"
                    size="small"
                    onChange={({ target }) => setTask(target.value)}
                />
                <Button variant="contained" type="submit" sx={{ color: "black" }}>
                    Submit
                </Button>
            </form>
        </Box>
    );
};

export default TodoForm;
