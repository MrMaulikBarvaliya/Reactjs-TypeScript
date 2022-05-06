import React, { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import "./styles.css";
import {
  //   AppBar,
  Typography,
  IconButton,
  Toolbar,
  Tabs,
  Tab,
  List,
  Divider,
  Drawer,
  ListItemText,
  ListItemIcon,
  ListItem,
  Box,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  Badge,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
// Redux Use
import { styled, useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
// icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Link } from "react-router-dom";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

// icons
interface Props {
  title: string;
}

const settings = ["Profile", "Account", "Logout"];

// ==============================================================================================

const Header: React.FC<Props> = ({ title }) => {
  const selector: any = useSelector((state: any) => state.cart);

  const themes = useTheme();
  const [open, setOpen] = React.useState<boolean>(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  
  const { theme } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar  className={theme === "light" ? "dark NavBar" : "light NavBarDark"} >
          <IconButton
            id="hamburgerIcon"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          {/* Icon Mui left Drawer */}
          <Typography
            id="Title"
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, letterSpacing: "3px" }}
          >
            {title}
          </Typography>

          <Typography
            id="tabesLink"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, letterSpacing: "1px", wordSpacing: "20px" }}
          ></Typography>
          <Tabs
            aria-label="basic tabs example"
            textColor="inherit"
            indicatorColor="secondary"
            className="NavLink"
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Tab label="Home" className="tabsLink" />
            </Link>
            <Link to="/blog" style={{ textDecoration: "none" }}>
              <Tab label="Blog" className="tabsLink" />
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Tab label="Contact" className="tabsLink" />
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Tab label="About" className="tabsLink" />
            </Link>
          </Tabs>
          <Box sx={{ flexGrow: 0 }}>
            <Badge
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              badgeContent={selector.length}
              color="error"
              sx={{ marginRight: "20px", color: "whitesmoke" }}
            >
              <Link to="/cart">
                <LocalMallIcon sx={{ fontSize: "30px", color: "whitesmoke" }} />
              </Link>
            </Badge>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Rely Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appBar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#000",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ backgroundColor: "#000", color: "#72a0d8" }}>
          <Typography variant="h5">TypeScript - MUI</Typography>
          <IconButton onClick={handleDrawerClose}>
            {themes.direction === "ltr" ? (
              <CloseIcon sx={{ color: "#72a0d8" }} />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon>
              <HomeRoundedIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText>
              <Link
                to="/"
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                Home
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BookOutlinedIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText>
              {" "}
              <Link
                to="/blog"
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                Blog
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CallTwoToneIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText>
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                Contact
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <InfoOutlinedIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                About
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default Header;
