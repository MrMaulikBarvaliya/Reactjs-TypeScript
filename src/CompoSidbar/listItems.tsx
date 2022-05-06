import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <Link to="/" style={{ textDecoration: "none", color: "#0a0e0e" }}>
          <DashboardIcon />
        </Link>
      </ListItemIcon>
      <Link to="/" style={{ textDecoration: "none", color: "#0a0a0a" }}>
        <ListItemText primary="Dashboard" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Link to="/cart" style={{ textDecoration: "none", color: "#0a0a0a" }}>
          <ShoppingCartIcon />
        </Link>
      </ListItemIcon>
      <Link to="/cart" style={{ textDecoration: "none", color: "#0a0a0a" }}>
        <ListItemText primary="Orders" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Link to="/blog" style={{ textDecoration: "none", color: "#0a0a0a" }}>
          <PeopleIcon />
        </Link>
      </ListItemIcon>
      <Link to="/blog" style={{ textDecoration: "none", color: "#0a0a0a" }}>
        <ListItemText primary="Customers" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
