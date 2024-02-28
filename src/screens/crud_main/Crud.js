import React from "react";
import "./Crud.css";
import {
  AppBar,
  Button,
  Dialog,
  Stack,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
  Fab,
  Box,
  Card,
  Rating,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../../config/FirebaseConfig";
import { signOut } from "firebase/auth";

//class component
class Crud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "",
      lName: "",
      email: "",
      contact: "",
      age: "",
      inputVisible: false,
      inputUpdate: false,
      data: [],
      custmerId: "",
      custmerData: {
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        age: "",
      },
    };
  }

  empCollectionRef = collection(db, "customers");

  logOut = () => {
    const { logout } = this.props;
    console.log("logout running");
    signOut(auth)
      .then(() => {
        logout();
        console.log("User signed out successfully");
        alert("You have logged Out Successfully .");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  openInput = () => {
    this.setState({ inputVisible: true });
  };
  closeInput = () => {
    this.setState({ inputVisible: false });
  };
  openInputUpdate = (custId, value) => {
    this.setState({ inputUpdate: true, custmerId: custId, custmerData: value });
  };
  closeInputUpdate = () => {
    this.setState({ inputUpdate: false });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleUpdateChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      custmerData: {
        ...prevState.custmerData,
        [name]: value,
      },
    }));
  };
  handleSubmit = async () => {
    this.setState({ inputVisible: false });
    const { fName, lName, email, contact, age } = this.state;
    try {
      const result = await addDoc(this.empCollectionRef, {
        firstName: fName,
        lastName: lName,
        email: email,
        contact: contact,
        age: age,
      });
      console.log("result  --  ", result);
      alert("customer succesfully added .");
      this.getCustomers();
    } catch (error) {
      alert(error);
    }
  };

  getCustomers = async () => {
    const data = await getDocs(this.empCollectionRef);
    const a = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log("get all Customer", a);
    this.setState({ data: a });
  };

  componentDidMount() {
    this.getCustomers();
  }

  handleDelete = async (id) => {
    console.log("handle delete running ");
    try {
      await deleteDoc(doc(db, "customers", id));
      console.log("Document successfully deleted!");
      this.getCustomers();
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  Update = async () => {
    console.log("Update Running");
    const { custmerId, custmerData } = this.state;
    try {
      await updateDoc(doc(db, "customers", custmerId), {
        firstName: custmerData.firstName,
        lastName: custmerData.lastName,
        email: custmerData.email,
        contact: custmerData.contact,
        age: custmerData.age,
      });
      this.setState({ inputUpdate: false });
      console.log("Successfully Updated !");
      alert("Customer Updated Successfully .");
      this.getCustomers();
    } catch (error) {
      console.error("error updating doc : ", error);
    }
  };

  render() {
    const { inputVisible } = this.state;
    const { inputUpdate } = this.state;
    const { custmerData } = this.state;
    return (
      <>
        <div>
          <AppBar position="static">
            <Stack spacing={4} direction={"row-reverse"} className="log">
              <Button
                variant="contained"
                onClick={this.logOut}
                startIcon={<ArrowForwardIcon />}
                color="warning"
                size="medium"
              >
                Log Out{" "}
              </Button>
            </Stack>
          </AppBar>
        </div>
        <Box className="box">
          <Card className="card">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h6">First Name</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Last Name</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Email</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Contact</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Age</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="h6">Actions</Typography>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.data.map((value) => (
                    <TableRow
                      key={value.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component={"th"} scope="row">
                        {value.firstName}
                      </TableCell>
                      <TableCell>{value.lastName}</TableCell>
                      <TableCell>{value.email}</TableCell>
                      <TableCell>{value.contact}</TableCell>
                      <TableCell>{value.age}</TableCell>
                      <TableCell align="right">
                        <Fab
                          color="secondary"
                          aria-label="edit"
                          onClick={() => this.openInputUpdate(value.id, value)}
                        >
                          <EditIcon />
                        </Fab>
                      </TableCell>
                      <TableCell>
                        <Fab
                          color="error"
                          aria-label="delete"
                          onClick={() => this.handleDelete(value.id)}
                        >
                          <DeleteIcon />
                        </Fab>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Box>
        <Box>
          <div className="i-add">
            <Fab
              color="info"
              aria-label="add"
              onClick={this.openInput}
              size="large"
            >
              <AddIcon />
            </Fab>
            {inputVisible && (
              <Dialog open={inputVisible} onClose={this.closeInput}>
                <DialogTitle>Add Customer</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    To add new Customer please add Customer details here ..{" "}
                  </DialogContentText>
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    name="fName"
                    label="Enter Your First Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={this.state.fName}
                    onChange={(e) => this.handleChange(e)}
                  />
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    name="lName"
                    label="Enter Your Last Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={this.state.lName}
                    onChange={(e) => this.handleChange(e)}
                  />
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    name="email"
                    label="Enter Your Email"
                    type="email"
                    fullWidth
                    variant="standard"
                    value={this.state.email}
                    onChange={(e) => this.handleChange(e)}
                  />
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    name="contact"
                    label="Enter Your Contact"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={this.state.contact}
                    onChange={(e) => this.handleChange(e)}
                  />
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    name="age"
                    label="Enter Your Age"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={this.state.age}
                    onChange={(e) => this.handleChange(e)}
                  />
                </DialogContent>
                <DialogActions>
                  <Button variant="contained" onClick={this.handleSubmit}>
                    Confirm Add
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={this.closeInput}
                  >
                    Cancel
                  </Button>
                </DialogActions>
              </Dialog>
            )}

            {inputUpdate && (
              <Dialog open={inputUpdate} onClose={this.closeInputUpdate}>
                <DialogTitle>Update Customer</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    To Update Customer please add updated details here ..{" "}
                  </DialogContentText>
                  <TextField
                    autoFocus
                    required
                    label="Enter Your First Name"
                    margin="dense"
                    name="firstName"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={custmerData.firstName}
                    onChange={(e) => this.handleUpdateChange(e)}
                  />
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    name="lastName"
                    label="Enter Your Last Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={custmerData.lastName}
                    onChange={(e) => this.handleUpdateChange(e, "lastName")}
                  />
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    name="email"
                    label="Enter Your Email"
                    type="email"
                    fullWidth
                    variant="standard"
                    value={custmerData.email}
                    onChange={(e) => this.handleUpdateChange(e, "email")}
                  />
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    name="contact"
                    label="Enter Your Contact"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={custmerData.contact}
                    onChange={(e) => this.handleUpdateChange(e, "contact")}
                  />
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    name="age"
                    label="Enter Your Age"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={custmerData.age}
                    onChange={(e) => this.handleUpdateChange(e, "age")}
                  />
                </DialogContent>
                <DialogActions>
                  <Button variant="contained" onClick={this.Update}>
                    Confirm Update
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={this.closeInputUpdate}
                  >
                    Cancel
                  </Button>
                </DialogActions>
              </Dialog>
            )}
          </div>
        </Box>
      </>
    );
  }
}

export default Crud;
