import React from "react";
import { withStyles, Button } from "@material-ui/core";

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
    "&.MuiButton-root": {
    },
    "& .item-label": {
      color: "#fff",
      textTransform: "capitalize"
    }
  }
})(Button);
