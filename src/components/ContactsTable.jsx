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

  const isSelected = name => selected.indexOf(name) !== -1;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="custom pagination table">
        <CustomTableHead
          order={order}
          orderBy={orderBy}
          rowCount={contacts.length}
        />
        <TableBody>
          {contacts.map(contact => {
            const isItemSelected = isSelected(contact.name);
            return (
              <CustomTableRow
                hover
                key={contact.name}
                onClick={() => handleOpenContactDetails(contact)}
                selected={isItemSelected}
              >
                <TableCell padding="checkbox">
                  <Checkbox checked={isItemSelected} />
                </TableCell>
                <TableCell>{contact.name}</TableCell>
                <TableCell>{contact.date}</TableCell>
                <TableCell>{contact.location}</TableCell>
                <TableCell>{contact.status}</TableCell>
              </CustomTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default withRouter(ContactsTable);
