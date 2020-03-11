import React from "react";
import styled from "styled-components";
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
    borderRadius: props => (props.isDropDown ? "4px" : "0"),
    zIndex: "10",
    position: "absolute",
    width: "100%",
    marginTop: "9px"
  }
}))(List);

export const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: indianred;
  color: white;
  display: grid;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const ShowGadgetsButton = withStyles({
  root: {
    cursor: "pointer",
    padding: "10px",
    "&.MuiButton-root": {
      color: "#FD7556",
      border: "1px dashed #eee",
      borderRadius: "20%",
      padding: "10px",
    },
    "& .item-label": {
      color: "#D35401",
      textTransform: "capitalize"
    }
  }
})(Button);
