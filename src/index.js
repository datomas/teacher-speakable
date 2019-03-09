import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { createStore, StoreProvider } from "easy-peasy";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";


import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss";
import "assets/demo/demo.css";
import "./assets/scss/style.scss";

import indexRoutes from "routes/index.js";
import model from './model';


// create a persisting store
const store = createStore(model,{
  reducerEnhancer: reducer =>
  persistReducer(
    {
      key: "speakablekey",
      storage
    },
    reducer
  )
});

const persistor = persistStore(store);

const hist = createBrowserHistory();


ReactDOM.render(
  <PersistGate loading={<div>Loading</div>} persistor={persistor}>
    <StoreProvider store={store}>
      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return (
              <Route path={prop.path} key={key} component={prop.component} />
            );
          })}
        </Switch>
      </Router>
    </StoreProvider>
  </PersistGate>,
  document.getElementById("root")
);
