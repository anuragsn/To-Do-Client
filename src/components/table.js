import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./modal.css";
import TextField from "@mui/material/TextField";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import InputLabel from "@mui/material/InputLabel";
import CreateIcon from "@mui/icons-material/Create";
import { connect } from "react-redux";
import { fetchTodos } from "../Redux/Actions/Action";
import {deleteTodo} from "../Redux/Actions/Action"
import {editTodo} from "../Redux/Actions/Action"

const Tables = ({ todos, fetchTodos,deleteTodo,editTodo }) => {
  const [open, setOpen] = React.useState(false);
  const [editName, setEditName] = React.useState();
  const [editLastName, setEditLastName] = React.useState();
  const [editAge, setEditAge] = React.useState();
  const [editId, setEditId] = React.useState();

  React.useEffect(() => {
    fetchTodos();
  }, [fetchTodos,open]);

  const handleClickOpen = (todo) => {
    setEditId(todo._id)
    setEditName(todo.firstName)
    setEditLastName(todo.lastName)
    setEditAge(todo.age)
    setOpen(true);
  };

  const handleDelete = (id) => {
    deleteTodo(id);
    fetchTodos()
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleEdit = () => {
    const editedTodo = {
      id: editId,
      firstName: editName,
      lastName: editLastName,
      age: editAge,
    };
    editTodo(editedTodo);
    setOpen(false);
  };
  return (
    <div className="tableContainer">
      {todos.length>0?
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "800" }}>First Name</TableCell>
              <TableCell style={{ fontWeight: "800" }}>Last Name</TableCell>
              <TableCell style={{ fontWeight: "800" }}>Age</TableCell>
              <TableCell style={{ fontWeight: "800",textAlign:"center" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          {todos.map((todo,i) => (
          <TableBody>
            <TableRow
                key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{todo.firstName}</TableCell>
              <TableCell>{todo.lastName}</TableCell>
              <TableCell>{todo.age}</TableCell>
              <TableCell>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <div>
                      <CreateIcon
                        onClick={()=>handleClickOpen(todo)}
                        style={{ cursor: "pointer",color:"green" }}
                      />
                  </div>
                  <div>
                      <DeleteForeverIcon style={{ cursor: "pointer",color:"red" }} 
                       onClick={()=>handleDelete(todo._id)}
                      />
                   
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
          ))}
        </Table>
      </TableContainer>
      :""}
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#282c34",
          }}
        >
          {"Update your Data"}
        </DialogTitle>
        <DialogContent>
          <div>
            <Paper>
              <Box sx={{ padding: 5 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={4}>
                    <InputLabel
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: 700,
                      }}
                    >
                      First Name
                    </InputLabel>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <TextField
                      required
                      id="firstname"
                      name="firstname"
                      value={editName}
                      fullWidth
                      onChange={(e) => {
                        setEditName(e.target.value);
                      }}
                      size="small"
                      autoComplete="off"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <InputLabel
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: 700,
                      }}
                    >
                      Last Name
                    </InputLabel>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <TextField
                      required
                      id="lastname"
                      name="lastname"
                      fullWidth
                      value={editLastName}
                      onChange={(e) => {
                        setEditLastName(e.target.value);
                      }}
                      size="small"
                      autoComplete="off"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <InputLabel
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: 700,
                      }}
                    >
                      Age
                    </InputLabel>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <TextField
                      required
                      id="age"
                      name="age"
                      value={editAge}
                      type="number"
                      fullWidth
                      onChange={(e) => {
                        setEditAge(e.target.value);
                      }}
                      size="small"
                      autoComplete="off"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleEdit}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { fetchTodos,deleteTodo,editTodo })(Tables);
