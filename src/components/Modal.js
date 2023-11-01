import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./modal.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { connect } from "react-redux";
import { addTodo } from "../Redux/Actions/Action";

const AlertDialogSlide = ({ addTodo }) => {
  const [open, setOpen] = React.useState(false);
  const [firstName, setFirstname] = React.useState("");
  const [lastName, setLastname] = React.useState();
  const [age, setAge] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    handleFields();
  };

  const handleFormData = () => {
    setOpen(false);
    const data = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    addTodo(data);
    handleFields();
  };

  const handleFields = () => {
    setFirstname("");
    setLastname("");
    setAge("");
  };

  return (
    <div className="modalButton">
      <Button
        style={{ color: "white" }}
        className="popup"
        variant="outlined"
        onClick={handleClickOpen}
      >
       <h1>Hello User Save your Data Here</h1> 
      </Button>
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
          {"We Remember your Data"}
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
                      label="First Name"
                      value={firstName}
                      fullWidth
                      onChange={(e) => {
                        setFirstname(e.target.value);
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
                      label="Last Name"
                      value={lastName}
                      fullWidth
                      onChange={(e) => {
                        setLastname(e.target.value);
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
                      type="number"
                      label="Age"
                      value={age}
                      fullWidth
                      onChange={(e) => {
                        setAge(e.target.value);
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
          <Button onClick={handleFormData}>Save</Button>
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

export default connect(mapStateToProps, { addTodo })(AlertDialogSlide);
