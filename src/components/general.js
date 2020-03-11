import React from "react";
import { withStyles, Button, List } from "@material-ui/core";

export const DropDownButton = withStyles({
  root: {
    cursor: "pointer",
    color: "#fff",
    "&.MuiButton-root": {
      border: "1px solid white"
    },
    "& .item-label": {
      color: "#fff",
      textTransform: "capitalize"
    }
  }
})(Button);

export const MenuButton = withStyles({
  root: {
    cursor: "pointer",
    color: "#fff",
    "&.MuiButton-root": {},
    "& .item-label": {
      color: "#fff",
      textTransform: "capitalize"
    }
  }
})(Button);

export const DropDownList = withStyles(theme => ({
  root: {
    backgroundColor: "#522b77",
    borderRadius: props => props.isDropDown ? "4px": "0",
    zIndex: "10",
    position: "absolute",
    width: "100%",
    marginTop: "9px"
  }
}))(List);
