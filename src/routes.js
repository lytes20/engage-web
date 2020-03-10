import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Contacts from "./components/Contacts";
import ContactDetails from "./components/ContactDetails";

const routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Contacts} />
          <Route path="/contact-details" exact component={ContactDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default routes;
