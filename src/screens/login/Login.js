import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../config/FirebaseConfig";
import { withRouter } from "../register/WithRouter";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.state = {
      email: "",
      password: "",
      error: false,
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  login = () => {
    const { signIn } = this.props;
    if (!this.state.email && !this.state.password) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }
    try {
      signInWithEmailAndPassword(auth, this.state.email, this.state.password)
        .then((res) => {
          const user = res.user;
          console.log("user -- ", user);
          // window.location.assign("/main")
           signIn();
          this.props.navigation("/main");
        }  
        )
        .catch((err) => {
          console.log("err -- > ", err);
          if (err === "auth/invalid-email") {
            alert("Invalid email");
          }
        });
    } catch (error) {
      alert(error);
    }
  };
  render() {
    const { user } = this.props;
    return (
      <div>
        <div>
          <h2>Login</h2>

          <div className="container">
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
              {user ? (
                console.log("already logged in")
              ) : (
                <input
                  type="submit"
                  value="Submit"
                  onClick={() => this.login()}
                />
              )}
            </div>
            <Link to={"/register"}>New User? Create Account.</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
