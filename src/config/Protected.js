import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export class Protected extends React.Component {
  render() {
    const { authenticated } = this.props;
    if (authenticated) {
      console.log("outlet running");
      return <Outlet />;
    } else {
      console.log("authenticated", authenticated);
      return <Navigate to={"/"} />;
    }
  }
}
