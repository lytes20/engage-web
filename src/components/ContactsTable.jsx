import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import CustomTableHead from "./CustomTableHead";

import { contacts } from '../data'

function ContactsTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("id");

  return (
    <Table aria-label="custom pagination table">
      <CustomTableHead
        order={order}
        orderBy={orderBy}
        rowCount={contacts.length}
      />
      <TableBody>
        {contacts.map(contact => (
          <TableRow key={contact.name} onClick={() => console.log(contact)}>
            <TableCell>{contact.name}</TableCell>
            <TableCell>{contact.date}</TableCell>
            <TableCell>{contact.location}</TableCell>
            <TableCell>{contact.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ContactsTable;
