import React from "react";
import styled from "styled-components";
import { withStyles, Button, List, Tabs, Tab } from "@material-ui/core";

export const DropDownButton = withStyles({
  root: {
    cursor: "pointer",
    color: "#fff",
    "&.MuiButton-root": {
      border: "1px solid white",
      padding: "10px",
      borderRadius: "4px"
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
    borderRadius: props => (props.hasborderradius ? "4px" : "0"),
    zIndex: "10",
    position: "absolute",
    width: "100%"
    // marginTop: "9px"
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
      padding: "10px"
    },
    "& .item-label": {
      color: "#D35401",
      textTransform: "capitalize"
    }
  }
})(Button);

export const CustomTabs = withStyles({
  root: {
    backgroundColor: "#E6E1EF",
    overflow: "visible",
    minHeight: "auto"
  },
  scroller: {
    overflow: "visible !important"
  },
  indicator: {
    height: "4px",
    backgroundColor: "#9D8EB5"
  }
})(Tabs);

export const CustomTab = withStyles(theme => ({
  root: {
    fontSize: 14,
    fontWeight: 500,
    fontWeight: theme.typography.fontWeightRegular,
    minHeight: 40,
    textTransform: "capitalize",
    "&.Mui-selected": {
    }
  }
}))(props => <Tab disableRipple {...props} />);
