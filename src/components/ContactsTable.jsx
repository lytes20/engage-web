import React from "react";

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

import { contacts } from "../data";

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
  const [selected, setSelected] = React.useState([]);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("id");
  const initialState = {
    contact: {}
  };

  const reducer = (state, action) => {
    console.log(state);
  };
  const [state, dispatch] = React.useReducer(reducer, initialState);
  function handleOpenContactDetails(contact) {
    dispatch({ type: "SELECT_CONTACT" });
    props.history.push("/contact-details");
  }
  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = contacts.map(n => n.name);
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

  const isSelected = name => selected.indexOf(name) !== -1;

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
            const isItemSelected = isSelected(contact.name);
            return (
              <CustomTableRow
                hover
                key={contact.name}
                aria-checked={isItemSelected}
                selected={isItemSelected}
              >
                <CustomTableCell padding="checkbox">
                  <Checkbox
                    onClick={event => handleClick(event, contact.name)}
                    checked={isItemSelected}
                  />
                </CustomTableCell>
                <CustomTableCell
                  onClick={() => handleOpenContactDetails(contact)}
                >
                  <div className="table-contact-name-container">
                    <div className="table-avatar-container">
                      <span>GI</span>
                    </div>
                    {contact.name}
                  </div>
                </CustomTableCell>
                <CustomTableCell
                  onClick={() => handleOpenContactDetails(contact)}
                >
                  {contact.date}
                </CustomTableCell>
                <CustomTableCell
                  onClick={() => handleOpenContactDetails(contact)}
                >
                  {contact.location}
                </CustomTableCell>
                <CustomTableCell
                  onClick={() => handleOpenContactDetails(contact)}
                >
                  {contact.status}
                </CustomTableCell>
              </CustomTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default withRouter(ContactsTable);
