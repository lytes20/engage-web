import React from "react";
import "../assets/styles/navbar.scss";
const menuItems = [
  "Contacts",
  "Forms",
  "LandingPages",
  "Templates",
  "Campaigns"
];
function NavBar() {
  return (
    <div className="navbar-container">
      {/* logo container */}
      <div></div>
      <div>Marketing</div>
      <div>
        <ul>
          {menuItems.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      {/* Avatar  */}
      <div></div>
    </div>
  );
}

export default NavBar;
