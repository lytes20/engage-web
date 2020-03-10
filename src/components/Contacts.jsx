import React from "react";
import "../assets/styles/contacts.scss";

import ContactsTable from "./ContactsTable";
function Contacts() {
  return (
    <div className="contacts-container">
      {/* Contacts main container  */}
      <div>
        <div>
          <h1>Contacts</h1>
        </div>

        {/* Contacts table  */}
        <div>
          <ContactsTable />
        </div>
      </div>

      {/* Contacts Side bar  */}
      <div></div>
    </div>
  );
}

export default Contacts;
