import React from "react";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import "../assets/styles/contactdetailsside.scss";
import IconStripe from "./IconStripe";
import { UserAvatar, ShowGadgetsButton } from "./general";

function ContactDetailsSide(props) {
  const { contact } = props;
  return (
    <Paper elevation={3} style={{ height: "100%" }}>
      <div style={{ display: "flex" }}>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>

        <div>
          <IconButton>
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton>
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
      </div>
      <div className="contact-details-side-item contact-brief">
        <UserAvatar />
        <div>
          {contact.name}
          <p>Software Developer</p>
        </div>
      </div>
      <div className="contact-details-side-icon-strip">
        <IconStripe />
      </div>
      <div className="contact-details-side-item">
        <span className="owner">Owner</span>
        <div style={{ display: "flex", alignItems:"center" }}>
          <UserAvatar />
          <div>
            <p>Gideon Bamuleseyo</p>
          </div>
        </div>
      </div>
      <div className="contact-details-side-a-section">
        <div>
          <ShowGadgetsButton>
            <span className="item-label">Show Gadgets</span>
          </ShowGadgetsButton>
        </div>
        <div className="contact-details-side-contact-info">
          <h2 style={{ marginBottom: "20px" }}>Contact Information</h2>
          <div className="tags-container">
            <div className="contact-info-content">
              <h2>Tags</h2>
              <Button>
                <AddCircleOutlineIcon />
                Add
              </Button>
            </div>
          </div>
          <div className="other-info-container">
            <div className="contact-info-content">
              <h2>Other information</h2>
              <p>role</p>
              <p>Software Developer</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="date">Created on 03/10/2020, 11:02</p>
      </div>
    </Paper>
  );
}

export default ContactDetailsSide;
