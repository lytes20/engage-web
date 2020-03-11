import React from "react";

import AcUnitIcon from "@material-ui/icons/AcUnit";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";

import "../assets/styles/navbar.scss";
import ProfilePic from "../assets/images/Gideon_Bamuleseyo.jpg";
import { DropDownButton, MenuButton, DropDownList } from "./general";
import { DropDown, MenuDropDown } from "./DropDown";

const menuItems = [
  "Contacts",
  "Forms",
  "Landing Pages",
  "Templates",
  "Campaigns"
];
function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar-main navbar-item">
        {/* logo container */}
        <div className="navbar-item">
          <IconButton>
            <AcUnitIcon />
          </IconButton>
        </div>
        <div className="navbar-item">
          <DropDown />
        </div>
        <div className="navbar-item">
          <IconButton>
            <SearchIcon />
          </IconButton>
        </div>
        <div className="navbar-item">
          <div className="menu-items">
            {menuItems.map(item => (
              <div className="menu-item" key={item}>
                <MenuDropDown item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Avatar  */}
      <div className="navbar-item">
        <div className="profile-pic-container">
          <img src={ProfilePic} alt="profile-pic" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
