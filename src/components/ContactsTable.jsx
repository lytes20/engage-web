import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";

import CustomTableHead from "./CustomTableHead";

import { contacts } from "../data";

export const CustomTableRow = withStyles({
  root: {
    cursor: "pointer"
  }
})(TableRow);
function ContactsTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("id");

  return (
    <TableContainer component={Paper}>
      <Table aria-label="custom pagination table">
        <CustomTableHead
          order={order}
          orderBy={orderBy}
          rowCount={contacts.length}
        />
        <TableBody>
          {contacts.map(contact => (
            <CustomTableRow
              hover
              key={contact.name}
              onClick={() => console.log(contact)}
            >
              <TableCell>{contact.name}</TableCell>
              <TableCell>{contact.date}</TableCell>
              <TableCell>{contact.location}</TableCell>
              <TableCell>{contact.status}</TableCell>
            </CustomTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ContactsTable;
