import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "../assets/styles/contacts.scss";

import ContactsTable from "./ContactsTable";
import CreateNewContact from "./CreateNewContact";
import EditContact from "./EditContact";
import DeleteContact from "./DeleteContact";

import { closeEditContact, closeDeleteContact } from "../actions/appActions";
import api from "../services/api";

function Contacts(props) {
  const { closeEditContact, closeDeleteContact } = props;
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    api
      .getContacts()
      .then(res => {
        setContacts(res);
      })
      .catch(error => console.log(error));
    return () => {
      //   cleanup
    };
  }, []);

  const updateContact = (contactID, data) => {
    api
      .updateContact(contactID, data)
      .then(res => {
        let updatedContacts = [...contacts];
        for (var i in contacts) {
          if (contacts[i].id === contactID) {
            updatedContacts[i] = { id: contactID, ...data };
            setContacts(updatedContacts);
          }
        }
        console.log(res);
      })
      .catch(error => console.log(error));
    closeEditContact();
  };

  const deleteContact = (contactID) => {
    api
      .deleteContact(contactID)
      .then(res => {
        let updatedContacts = [...contacts];
        for (var i in contacts) {
          if (contacts[i].id === contactID) {
            const index = updatedContacts.indexOf(updatedContacts[i]);
            updatedContacts.splice(index, 1);
            setContacts(updatedContacts);
          }
        }
        console.log(res);
      })
      .catch(error => console.log(error));

      closeDeleteContact();
  };

  return (
    <div className="contacts-container">
      <EditContact updateContact={updateContact} />
      <DeleteContact deleteContact={deleteContact}/>
      {/* Contacts main container  */}
      <div className="contacts-main">
        <div className="contacts-heading contacts-head-item">
          <h1>Contacts</h1>
          <span>({contacts.length})</span>
          <div className="sort-by-container">
            <p>Sort By</p>
            Created Date
            {/* <MenuDropDown item="Created Date" /> */}
          </div>
        </div>

        {/* Contacts table  */}
        <div>
          <ContactsTable contacts={contacts} />
        </div>
      </div>

      {/* Contacts Side bar  */}
      <div className="contacts-side">
        <div className="contacts-head-item">
          <Link to="" className="contacts-side-item">
            Import
          </Link>
          <Button className="contacts-side-item">Actions</Button>
          <CreateNewContact />
          {/* <CreateNewButton className="contacts-side-item" onClick={ () => console.log("I get clicked bitches")}>
            <span className="item-label">Create New</span>
          </CreateNewButton> */}
        </div>
        <div className="contacts-side-actions-container">
          <Button
            style={{
              backgroundColor: "#ECEDF1",
              width: "100%",
              textAlign: "right",
              textTransform: "capitalize"
            }}
          >
            All Contacts
          </Button>
          <Button>All Saved</Button>
          Meet all of the following conditions Add Filter
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  closeEditContact: () => dispatch(closeEditContact()),
  closeDeleteContact: () => dispatch(closeDeleteContact())
});
export default connect(null, mapDispatchToProps)(Contacts);
