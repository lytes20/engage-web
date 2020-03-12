import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import "../assets/styles/createnewcontact.scss";
import { ContactModel } from "../models/ContactModel";
import { closeDeleteContact } from "../actions/appActions";
import api from "../services/api";

export const CreateNewButton = withStyles({
  root: {
    cursor: "pointer",
    backgroundColor: "#FD7556",
    color: "#fff",
    "&.MuiButton-root": {
      backgroundColor: "#FD7556"
    },
    "& .item-label": {
      color: "#fff",
      textTransform: "capitalize"
    }
  }
})(Button);
function EditContact(props) {
  const {
    contact,
    openDeleteContact,
    closeDeleteContact,
    deleteContact
  } = props;

  const handleClose = () => {
    closeDeleteContact();
  };

  return (
    <Dialog
      open={openDeleteContact}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        Delete Subscriber {contact.first_name}
      </DialogTitle>
      <DialogContent>
        <p>Are you sure you want to delete this contact</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={() => deleteContact(contact.id)} color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}
const mapStateToProps = state => ({
  contact: state.appReducer.contact,
  openDeleteContact: state.appReducer.openDeleteContact
});

const mapDispatchToProps = dispatch => ({
  closeDeleteContact: () => dispatch(closeDeleteContact())
});
export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
