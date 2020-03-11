import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";

import "../assets/styles/contacts.scss";

import ContactsTable from "./ContactsTable";
import { contacts } from "../data";

export const CreateNewButton = withStyles({
  root: {
    cursor: "pointer",
    backgroundColor: "#FD7556",
    color: "#fff",
    "&.MuiButton-root": {
      backgroundColor: "#FD7556"
    },
    "& .item-label": {
      color: "#fff",
      textTransform: "capitalize"
    }
  }
})(Button);

function Contacts() {
  return (
    <div className="contacts-container">
      {/* Contacts main container  */}
      <div className="contacts-main">
        <div className="contacts-heading contacts-head-item">
          <h1>Contacts</h1><span>({contacts.length})</span>
          <div className="sort-by-container">
            <p>Sort By</p>
            Created Date
            {/* <MenuDropDown item="Created Date" /> */}
          </div>
        </div>

        {/* Contacts table  */}
        <div>
          <ContactsTable />
        </div>
      </div>

      {/* Contacts Side bar  */}
      <div className="contacts-side">
        <div className="contacts-head-item">
          <Link to="" className="contacts-side-item">Import</Link>
          <Button className="contacts-side-item">Actions</Button>
          <CreateNewButton className="contacts-side-item">
            <span className="item-label">Create New</span>
          </CreateNewButton>
        </div>
        <div className="contacts-side-actions-container">
          <Button style={{ backgroundColor: "#ECEDF1", width:"100%", textAlign: "right", textTransform:"capitalize"}}>All Contacts</Button>
          <Button>All Saved</Button>
          Meet all of the following conditions Add Filter
        </div>
      </div>
    </div>
  );
}

export default Contacts;
