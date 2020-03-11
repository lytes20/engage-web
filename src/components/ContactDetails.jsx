import React from "react";

import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import "../assets/styles/contactdetails.scss";
import ContactDetailsSide from "./ContactDetailSide";
import ContactDetailsMain from "./ContactDetailsMain";

function ContactDetails(props) {
  const { contact } = props;
  function handleBack() {
    props.history.goBack();
  }
  return (
    <div className="contact-details-container">
      <div style={{ display: "flex", alignItems: "center" }}>
        <IconButton aria-label="Back" onClick={handleBack}>
          <ArrowBackIcon />
        </IconButton>
        <h1>Contact Details</h1>
      </div>

      {/* contact details side  */}
      <div className="contact-details-content">
        <div className="contact-details-side">
          <ContactDetailsSide contact={contact} />
        </div>

        {/* contact details main  */}
        <div className="contact-details-main">
          <ContactDetailsMain />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  contact: state.appReducer.contact
});

const withConnect = connect(mapStateToProps);
export default compose(withRouter, withConnect)(ContactDetails);
