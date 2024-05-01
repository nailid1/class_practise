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
import LoginNew from "./screens/login/LoginNew";
import { ForgotPassword } from "./screens/forgot_password/ForgotPassword";
import PasswordReset, { ParentLocation } from "./screens/forgot_password/PasswordReset";
import CreateProfile from "./screens/create_Profile/CreateProfile";
import TermsConditions from "./screens/t&c/TermsConditions";
import MainDrawer from "./screens/aliphDrawer/MainDrawer";
import NeedHelp from "./screens/aliphDrawer/drawerLink/NeedHelp";
import FAQ from "./screens/aliphDrawer/drawerLink/Faq";
import ContactUs from "./screens/aliphDrawer/drawerLink/Contact";

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

  logOut = () => {
    this.setState((prevState) => ({ isAuthenticated: false }));
  };

  render() {
    const { isAuthenticated } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginNew signIn={this.signIn} />} />
            {/* <Route path="/register" element={<Register />} /> */}

            <Route element={<Protected authenticated={isAuthenticated} />}>
              {/* <Route path="/main" element={<Crud logout={this.logout} />} /> */}
              <Route path="/side" element={<MainDrawer />} />
            </Route>

            <Route path="/create-profile" element={<CreateProfile />} />
            <Route path="/tandc" element={<TermsConditions />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/reset/:oobCode" element={<LoginNew />} />
            <Route path="/reset" element={<ParentLocation />} />
            <Route path="/mui" element={<MuiTypography />} />
            <Route path="/mui2" element={<Mui2 />} />
            <Route path="/abc" element={<Crud />} />
            <Route path="/text" element={<TextField />} />
            <Route path="/side" element={<MainDrawer />} />
            <Route path="/help" element={<NeedHelp />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
