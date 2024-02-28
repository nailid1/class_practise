import { Link, redirect, useNavigate } from "react-router-dom";
import "../register/Register.css";
import React from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../config/FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { withRouter } from "./WithRouter";
import { Button } from "@mui/material";
class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      fName: "",
      lName: "",
      email: "",
      address: "",
      contact: "",
      password: "",
      error: false,
    };
    // this.onSubmit = this.onSubmit.bind(this);
  }
  empCollectionRef = collection(db, "users");

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = async (e) => {
    console.log("on submit runnig");
    // console.log("this props ; => ", this.props);
    if (
      !this.state.fName &&
      !this.state.lName &&
      !this.state.email &&
      !this.state.contact &&
      !this.state.password
    ) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }
    const { fName, lName, email, address, contact, password, displayName } =
      this.state;
    try {
      const result = await addDoc(this.empCollectionRef, {
        firstName: fName,
        lastName: lName,
        email: email,
        address: address,
        contact: contact,
        password: password,
      });
      console.log("result  --  ", result);
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (res) => {
          const user = res.user;
          console.log("user --- ", user);
          await updateProfile(user, { displayName: this.state.email });
          this.props.navigation("/");
          alert("successfully submitted");
        })
        .catch((err) => {
          alert(err);
          console.log(err);
          if (err === "auth/invalid-email") {
            alert("Invalid email");
          }
        });
    } catch (error) {
      alert(error);
    }
  };
  render() {
    return (
      <div>
        <div>
          <h2>Register</h2>

          <div className="container">
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">First Name</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="fName"
                  placeholder="Enter Your name.."
                  value={this.state.fName}
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
                {this.state.error ? (
                  <small className="error-field">Required Field !</small>
                ) : null}
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="lName">Last Name</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="lName"
                  placeholder="Your last name.."
                  value={this.state.lName}
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
                {this.state.error ? (
                  <small className="error-field">Required Field !</small>
                ) : null}
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="email">Email</label>
              </div>
              <div className="col-75">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email.."
                  value={this.state.email}
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
                {this.state.error ? (
                  <small className="error-field">Required Field !</small>
                ) : null}
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="add">Address</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Your Address.."
                  value={this.state.address}
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="contact">Contact</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="contact"
                  placeholder="Enter Your Contact.."
                  value={this.state.contact}
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
                {this.state.error ? (
                  <small className="error-field">Required Field !</small>
                ) : null}
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="password">Password</label>
              </div>
              <div className="col-75">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password.."
                  value={this.state.password}
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
                {this.state.error ? (
                  <small className="error-field">Required Field !</small>
                ) : null}
              </div>
            </div>

            <div className="row">
              {/* <input
                type="submit"
                value="Submit"
                onClick={() => this.onSubmit()}
              /> */}
              <Button
                variant="contained"
                size="large"
                color="info"
                sx={{ margin: "50px", marginLeft: "200px" }}
                value="Submit"
                onClick={() => this.onSubmit()}
              >
                Register
              </Button>
            </div>
            <Link to={"/"} style={{ marginLeft: "180px" }}>
              Already existed User? Login.
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
