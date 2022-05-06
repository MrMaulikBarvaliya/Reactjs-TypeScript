import { Box, Typography } from "@mui/material";
import "./style.css";
const About = () => {
  return (
    <>
      <Box className="cartPage">
        <Typography
          variant="h3"
          sx={{display: "flex", alignItems: "center",justifyContent:'center',height:'60vh' }}
        >
          About Pages
        </Typography>
      </Box>
    </>
  );
};

export default About;
