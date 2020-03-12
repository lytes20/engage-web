import React, { useState } from "react";
import { connect } from "react-redux";

import {
  DropDownButton,
  MenuButton,
  DropDownList,
  EllipsisButton,
  ContactActionsDropDownList
} from "./general";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import { ListItem } from "@material-ui/core";
import { openEditContact, openDeleteContact } from "../actions/appActions";

const contactActions = [
  { id: 1, name: "Edit" },
  { id: 2, name: "Email" },
  { id: 3, name: "Mark as confirmed" },
  { id: 4, name: "Duplicate" },
  { id: 5, name: "Delete" }
];

const ContactActionsDropDown = props => {
  const { contact, openEditContact, openDeleteContact } = props;
  const [displayList, setDisplayList] = useState(false);
  const handleEditContact = contact => {
    openEditContact(contact);
  };
  const handleChange = item => {
    setDisplayList(false);
    switch (item.id) {
      case 1:
        console.log("Edit was clicked");
        handleEditContact(contact);
        return;
      case 5:
        openDeleteContact(contact);
      default:
        return;
    }
  };
  return (
    <>
      <div style={{ position: "relative", width: "100%" }}>
        <EllipsisButton
          onMouseEnter={() => setDisplayList(true)}
          onMouseLeave={() => setDisplayList(false)}
        >
          <span className="item-label"> ... </span>
        </EllipsisButton>
        {displayList && (
          <ContactActionsDropDownList
            onMouseEnter={() => setDisplayList(true)}
            onMouseLeave={() => setDisplayList(false)}
          >
            {contactActions.map(item => (
              <ListItem key={item.id} button onClick={() => handleChange(item)}>
                {item.name}
              </ListItem>
            ))}
          </ContactActionsDropDownList>
        )}
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  openEditContact: contact => dispatch(openEditContact(contact)),
  openDeleteContact: contact => dispatch(openDeleteContact(contact))
});
export default connect(null, mapDispatchToProps)(ContactActionsDropDown);
