import React, { useState } from "react";

import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import "../assets/styles/createnewcontact.scss";
import { ContactModel } from "../models/ContactModel";
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

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [tags, setTags] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitNewContact = () => {
    const newContact = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      address: address,
      phone_number: phoneNumber,
      company_name: company,
    };
    // const data = new ContactModel(newContact);
    api
      .createContact(newContact)
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));

    handleClose();
  };

  return (
    <>
      <CreateNewButton onClick={handleClickOpen}>
        <span className="item-label">Create New</span>
      </CreateNewButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Contact</DialogTitle>
        <DialogContent>
          <form>
            <div>
              <TextField
                label="First Name"
                variant="outlined"
                onChange={event => setFirstName(event.target.value)}
              />
            </div>
            <div>
              <TextField
                label="Last Name"
                variant="outlined"
                onChange={event => setLastName(event.target.value)}
              />
            </div>
            <div>
              <TextField
                label="Email"
                variant="outlined"
                onChange={event => setEmail(event.target.value)}
              />
            </div>
            <div>
              <TextField
                label="Role"
                variant="outlined"
                onChange={event => setRole(event.target.value)}
              />
            </div>
            <div>
              <TextField
                label="Tags"
                variant="outlined"
                onChange={event => setTags(event.target.value)}
              />
            </div>
            <div>
              <TextField
                label="Company"
                variant="outlined"
                onChange={event => setCompany(event.target.value)}
              />
            </div>
            <div>
              <TextField
                label="Phone Number"
                variant="outlined"
                onChange={event => setPhoneNumber(event.target.value)}
              />
            </div>
            <div>
              <TextField
                label="Website"
                variant="outlined"
                onChange={event => setWebsite(event.target.value)}
              />
            </div>
            <div>
              <TextField
                label="Address"
                variant="outlined"
                onChange={event => setAddress(event.target.value)}
              />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={submitNewContact} color="primary">
            Submit
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
