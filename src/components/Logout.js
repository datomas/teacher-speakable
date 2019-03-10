import React from "react";
import { useActions } from "easy-peasy";
import { Redirect } from "react-router-dom";

const Logout = () => {
  const logout = useActions(action => action.user.logout);
  logout({});
  return <Redirect to="/login" />
}

export default Logout;