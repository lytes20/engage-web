import React from "react";
import Button from "@material-ui/core/Button";

import "../assets/styles/contacts.scss";

import ContactsTable from "./ContactsTable";

function Contacts() {
  return (
    <div className="contacts-container">
      {/* Contacts main container  */}
      <div className="contacts-main">
        <div>
          <h1>Contacts</h1>
        </div>

        {/* Contacts table  */}
        <div>
          <ContactsTable />
        </div>
      </div>

      {/* Contacts Side bar  */}
      <div className="contacts-side">
        <div>
          import
          <Button variant="contained" color="secondary">
            Actions
          </Button>
          <Button variant="contained" color="secondary">
            Create New
          </Button>
        </div>
        <div>
          All Contacts All Saved Filters Meet all of the following conditions
          Add Filter
        </div>
      </div>
    </div>
  );
}

export default Contacts;
