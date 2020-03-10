import React from "react";

import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import "../assets/styles/contacts.scss";
import { tabsItems } from "../data";
function ContactDetailsSide() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={3}>
      <div>
        <Tabs value={value} onChange={handleChange}>
          {tabsItems.map((item) => <Tab key={item.name} label={item.name}/>)}
        </Tabs>
      </div>
    </Paper>
  );
}

export default ContactDetailsSide;
