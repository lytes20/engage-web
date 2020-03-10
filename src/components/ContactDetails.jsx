import React from "react";

import "../assets/styles/contactdetails.scss";
import ContactDetailsSide from "./ContactDetailSide";
import ContactDetailsMain from "./ContactDetailsMain";

function ContactDetails() {
  return (
    <div className="contact-details-container">
      <h1>Contact Details</h1>
      {/* contact details side  */}
      <div className="contact-details-content">
        <div className="contact-details-side">
          <ContactDetailsSide />
        </div>

        {/* contact details main  */}
        <div className="contact-details-main">
          <ContactDetailsMain />
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
