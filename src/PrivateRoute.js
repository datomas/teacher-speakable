import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useStore } from "easy-peasy";

export const PrivateRoute = ({component: Component, ...rest}) => {

  const auth = useStore(state => state.user.authenticated);
  console.log(auth);
  return <Route 
    {...rest}
    render={props => auth ? (
      <Component {...props} />
      ) : <Redirect
          to={{
            pathname: "/login",
            state: {from:props.location}
          }}
        />
    }
  />

}