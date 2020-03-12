import React from "react";

import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";

import "../assets/styles/contactstable.scss";
import CustomTableHead from "./CustomTableHead";

import { viewContact } from "../actions/appActions";
import { convertStrToDate } from "../services/utility";
import ContactActionsDropDown from "./ContactActionsDropDown";

export const CustomTableRow = withStyles({
  root: {
    cursor: "pointer",
    padding: "20px 10px"
  }
})(TableRow);

export const CustomTableCell = withStyles({
  root: {
    cursor: "pointer",
    padding: "20px 10px",
    border: "none"
  }
})(TableCell);

function ContactsTable(props) {
  const { viewContact, contacts } = props;
  console.log("Contacts -->", contacts);
  const [selected, setSelected] = React.useState([]);
  const [order] = React.useState("asc");
  const [orderBy] = React.useState("id");

  function handleOpenContactDetails(contact) {
    viewContact(contact);
    props.history.push("/contact-details");
  }
  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = contacts.map(n => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };
  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = contactId => selected.indexOf(contactId) !== -1;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="custom pagination table">
        <CustomTableHead
          order={order}
          orderBy={orderBy}
          rowCount={contacts.length}
          numSelected={selected.length}
          onSelectAllClick={handleSelectAllClick}
        />
        <TableBody>
          {contacts.map(contact => {
            const contactName = `${contact.first_name} ${contact.first_name}`;
            const contactInitials = `${contact.first_name.charAt(
              0
            )}${contact.last_name.charAt(0)}`;
            const isItemSelected = isSelected(contact.id);
            return (
              <CustomTableRow
                hover
                key={contact.id}
                aria-checked={isItemSelected}
                selected={isItemSelected}
              >
                <CustomTableCell padding="checkbox">
                  <Checkbox
                    onClick={event => handleClick(event, contact.id)}
                    checked={isItemSelected}
                  />
                </CustomTableCell>
                <CustomTableCell
                  onClick={() => handleOpenContactDetails(contact)}
                >
                  <div className="table-contact-name-container">
                    <div className="table-avatar-container">
                      <span>{contactInitials}</span>
                    </div>
                    {contactName}
                  </div>
                </CustomTableCell>
                <CustomTableCell
                  onClick={() => handleOpenContactDetails(contact)}
                >
                  {contact.created_at && convertStrToDate(contact.created_at)}
                </CustomTableCell>
                <CustomTableCell
                  onClick={() => handleOpenContactDetails(contact)}
                >
                  {contact.address ? contact.address : "_"}
                </CustomTableCell>
                <CustomTableCell
                  onClick={() => handleOpenContactDetails(contact)}
                >
                  {contact.status}
                </CustomTableCell>
                <CustomTableCell>
                  <ContactActionsDropDown contact={contact} />
                </CustomTableCell>
              </CustomTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const mapDispatchToProps = dispatch => ({
  viewContact: contact => dispatch(viewContact(contact))
});

const withConnect = connect(null, mapDispatchToProps);
export default compose(withRouter, withConnect)(ContactsTable);
