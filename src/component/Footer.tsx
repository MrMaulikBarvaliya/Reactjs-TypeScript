import React, { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import "./styles.css";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Divider,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CopyrightIcon from "@mui/icons-material/Copyright";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Footer: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <React.Fragment >
      <Box className={theme === "light" ? "dark Footer" : "light FooterL"}  >
        <Container>
          <Grid item container>
            <Grid item container xs={12} sm={6} md={3} className="footer_1">
              <Box>
                <Typography variant="h3" className="footer_Heading logo">
                  TS
                </Typography>
                <Typography variant="body1" className="footer_desc">
                  TypeScript is a strongly typed, object oriented, compiled
                  language. It was designed by Angers Venusberg at Microsoft.
                  TypeScript is both a language and a set of tools. TypeScript
                  is a typed superset of JavaScript compiled to JavaScript. In
                  other words, TypeScript is JavaScript plus some additional
                  features.
                </Typography>
              </Box>
            </Grid>
            <Grid item container xs={12} sm={6} md={2} className="footer_2">
              <Typography variant="h6" className="footer_Heading">
                Overview
              </Typography>
              <ul style={{ listStyle: "none" }}>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Users</li>
              </ul>
            </Grid>
            <Grid item container xs={12} sm={6} md={2} className="footer_3">
              <Typography variant="h6" className="footer_Heading">
                Online Store
              </Typography>
              <ul style={{ listStyle: "none" }}>
                <li>Sell Online</li>
                <li>Features</li>
                <li>Website editor</li>
                <li>Online retail</li>
                <li>E-Commerce Website</li>
              </ul>
            </Grid>
            <Grid item container xs={12} sm={6} md={5} className="footer_4">
              <Typography variant="h6" className="footer_Heading">
                Social Media
              </Typography>
              <Box className="social_Icon">
                <a
                  href="https://www.instagram.com/?hl=en"
                  style={{ color: "#000" }}
                >
                  <InstagramIcon className="icon" />
                </a>
                <a href="https://www.whatsapp.com/" style={{ color: "#000" }}>
                  <WhatsAppIcon className="icon" />
                </a>
                <a href="https://www.facebook.com/" style={{ color: "#000" }}>
                  <FacebookIcon className="icon" />
                </a>
                <a href="https://music.youtube.com/" style={{ color: "#000" }}>
                  <YouTubeIcon className="icon" />
                </a>
                <a
                  href="https://twitter.com/i/flow/login"
                  style={{ color: "#000" }}
                >
                  <TwitterIcon className="icon" />
                </a>
              </Box>
              <Typography variant="h6" className="footer_Heading">
                Sign Up
              </Typography>

              <form className="input">
                <TextField
                  id="standard-basic"
                  label={<EmailOutlinedIcon />}
                  variant="standard"
                  className="inputBox"
                  type="email"
                  placeholder="Enter your email id"
                />
                <button className="inputSubmit" type="submit">
                  <ArrowForwardIcon />
                </button>
              </form>
              <Typography
                variant="body2"
                sx={{ width: "50%", marginTop: "10px" }}
                className="Input_Address"
              >
                Add : A-125 Abc Road,Whitefield, Bangalore Kanaka, Pin:
                600006, India
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Divider sx={{ backgroundColor: "gray", marginTop: "8px" }} />
      <Typography variant="subtitle1" className="footer_Copyright">
        Copyright <CopyrightIcon /> 2022 Ts Developer
      </Typography>
    </React.Fragment>
  );
};

export default Footer;
