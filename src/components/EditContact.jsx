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
import { closeEditContact } from "../actions/appActions";
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
  console.log("Edit contact is called", props);
  const { contact, openEditContact, closeEditContact } = props;
  console.log("Edit contact is called", contact.first_name);

  const [open, setOpen] = useState(openEditContact);
  const [firstName, setFirstName] = useState(contact.first_name);
  const [lastName, setLastName] = useState(contact.last_name);
  const [email, setEmail] = useState(contact.email);
  const [role, setRole] = useState("");
  const [tags, setTags] = useState("");
  const [company, setCompany] = useState(contact.company_name);
  const [phoneNumber, setPhoneNumber] = useState(contact.phone_number);
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState(contact.address);

  const handleClose = () => {
    closeEditContact();
    setOpen(false);
  };

  useEffect(() => {
    // effect
    setFirstName(contact.first_name);
    setLastName(contact.last_name);
    setEmail(contact.email);
    setPhoneNumber(contact.phone_number);
    setCompany(contact.company_name);
    setAddress(contact.address);
    return () => {
      // cleanup
    };
  }, [contact]);
  const updateContact = () => {
    const updatedData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      address: address,
      phone_number: phoneNumber,
      company_name: company
    };
    // const data = new ContactModel(newContact);
    api
      .updateContact(contact.id, updatedData)
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));

    handleClose();
  };

  return (
    <Dialog
      open={openEditContact}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Update Contact</DialogTitle>
      <DialogContent>
        <form>
          <div>
            <TextField
              value={firstName}
              label="First Name"
              variant="outlined"
              onChange={event => setFirstName(event.target.value)}
            />
          </div>
          <div>
            <TextField
              value={lastName}
              label="Last Name"
              variant="outlined"
              onChange={event => setLastName(event.target.value)}
            />
          </div>
          <div>
            <TextField
              value={email}
              label="Email"
              variant="outlined"
              onChange={event => setEmail(event.target.value)}
            />
          </div>
          <div>
            <TextField
              value={role}
              label="Role"
              variant="outlined"
              onChange={event => setRole(event.target.value)}
            />
          </div>
          <div>
            <TextField
              value={tags}
              label="Tags"
              variant="outlined"
              onChange={event => setTags(event.target.value)}
            />
          </div>
          <div>
            <TextField
              value={company}
              label="Company"
              variant="outlined"
              onChange={event => setCompany(event.target.value)}
            />
          </div>
          <div>
            <TextField
              value={phoneNumber}
              label="Phone Number"
              variant="outlined"
              onChange={event => setPhoneNumber(event.target.value)}
            />
          </div>
          <div>
            <TextField
              value={website}
              label="Website"
              variant="outlined"
              onChange={event => setWebsite(event.target.value)}
            />
          </div>
          <div>
            <TextField
              value={address}
              label="Address"
              variant="outlined"
              onChange={event => setAddress(event.target.value)}
            />
          </div>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={updateContact} color="primary">
          Submit
        </Button>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
const mapStateToProps = state => ({
  contact: state.appReducer.contact,
  openEditContact: state.appReducer.openEditContact
});

const mapDispatchToProps = dispatch => ({
  closeEditContact: () => dispatch(closeEditContact())
});
export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
