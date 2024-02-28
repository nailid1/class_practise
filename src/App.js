import "./App.css";
import React from "react";
import Register from "./screens/register/Register";
import Login from "./screens/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Crud from "./screens/crud_main/Crud";
import { Protected } from "./config/Protected";
import MuiTypography from "./mui/MuiTypography";
import { Myrate } from "./mui/rating";
import Mui2 from "./mui/Mui2";
import TextField from "./mui/TextField";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
  }

  signIn = () => {
    this.setState((prevState) => ({ isAuthenticated: true }));
  };

  logout = () => {
    this.setState((prevState) => ({ isAuthenticated: false }));
  };

  render() {
    const { isAuthenticated } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login signIn={this.signIn} />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Protected authenticated={isAuthenticated} />}>
              <Route path="/main" element={<Crud logout={this.logout} />} />
            </Route>
            <Route path="/mui" element={<MuiTypography />} />
            <Route path="/mui2" element={<Mui2 />} />
            <Route path="/abc" element={<Crud />} />
            <Route path="/text" element={<TextField />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
