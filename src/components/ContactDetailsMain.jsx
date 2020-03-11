import React from "react";

import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import "../assets/styles/contactdetailsmain.scss";
import { CustomTabs, CustomTab } from "./general";
import { ActivitiesComponent, EmailsComponent, DealsComponent } from "./tabs";
import { tabsItems } from "../data";

function ContactDetailsSide() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={3} style={{ height: "100%"}}>
      <div className="custom-tabs-container">
        <CustomTabs value={value} onChange={handleChange}>
          {tabsItems.map(item => (
            <CustomTab key={item.name} label={item.name} />
          ))}
        </CustomTabs>
      </div>
      {value === 0 && <ActivitiesComponent />}
      {value === 1 && <EmailsComponent />}
      {value === 2 && <DealsComponent />}
    </Paper>
  );
}

export default ContactDetailsSide;
