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

import CustomTableHead from "./CustomTableHead";

import { contacts } from "../data";

export const CustomTableRow = withStyles({
  root: {
    cursor: "pointer"
  }
})(TableRow);
function ContactsTable(props) {
  const [selected, setSelected] = React.useState([]);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("id");

  function handleOpenContactDetails(contact) {
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
                <TableCell padding="checkbox">
                  <Checkbox
                    onClick={event => handleClick(event, contact.name)}
                    checked={isItemSelected}
                  />
                </TableCell>
                <TableCell onClick={() => handleOpenContactDetails(contact)}>
                  {contact.name}
                </TableCell>
                <TableCell onClick={() => handleOpenContactDetails(contact)}>
                  {contact.date}
                </TableCell>
                <TableCell onClick={() => handleOpenContactDetails(contact)}>
                  {contact.location}
                </TableCell>
                <TableCell onClick={() => handleOpenContactDetails(contact)}>
                  {contact.status}
                </TableCell>
              </CustomTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default withRouter(ContactsTable);
