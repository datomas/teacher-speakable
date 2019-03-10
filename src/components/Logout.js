import React from "react";
import { useStore, useActions, useAction } from "easy-peasy";
import { Redirect, Route } from "react-router-dom";

const Logout = () => {
  const logout = useActions(action => action.user.logout);
  const setAuthenticated = useActions(action => action.user.setAuthenticated);

  // bring states back to initial states
  setAuthenticated(false);
  logout();
  return <Redirect to="/login" />
}

export default Logout;