import React, { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";

import { Typography, Box, Button, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { remove, removeData } from "../store/CartSlice";
import DeleteIcon from "@mui/icons-material/Delete";

const Carts: React.FC = () => {
  const Products = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (ProductId: number) => {
    dispatch(remove(ProductId));
    dispatch(removeData(ProductId));
  };

  const { theme } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <Box className="cartPage">
        <Typography variant="h4" align="center" sx={{margin:'15px auto'}}>
          Cart
        </Typography>
        <Box className="cartWrapper">
          <Grid item container>
            {Products.map((DataAdd: any) => {
              return (
                <Grid xs={12} sm={12}>
                  <Box className={theme === "light" ? "dark CartData" : "light CartDataS"} sx={{margin:'10px auto'}}>
                    <img src={DataAdd.img} alt="img" />
                    <Typography
                      variant="h6"
                      sx={{
                        width: "15%",
                        textAlign: "justify",
                        margin: "10px auto",
                      }}
                      className="title"
                    >
                      {DataAdd.title}
                    </Typography>
                    <Typography variant="h6" className="descri">
                      {DataAdd.description}
                    </Typography>
                    <Button
                      className="Button"
                      sx={{ textAlign: "center", color: "red" }}
                      onClick={() => handleRemove(DataAdd.id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Carts;
