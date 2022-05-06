import React, { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";

import { Link } from "react-router-dom";
import "./style.css";
import {
  Container,
  Box,
  Grid,
  Stack,
  Divider,
  Card,
  CardMedia,
  Typography,
  CardContent,
  Button,
  CardActions,
} from "@mui/material";


import { useDispatch } from "react-redux";
import { addData } from "../store/CartSlice";

const cardData = [
  {
    id: 4,
    img: "https://images8.alphacoders.com/903/thumbbig-903178.webp",
    alt: "Cookie",
    title: "Cookies",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
  },
  {
    id: 5,
    img: "https://images8.alphacoders.com/571/thumbbig-571670.webp",
    alt: "Cream",
    title: "Cake Cream",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your gueThis   ",
  },
  {
    id: 6,
    img: "https://images4.alphacoders.com/988/thumbbig-988128.webp",
    alt: "Pizza",
    title: "Pizza",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
  },
  {
    id: 7,
    img: "https://images3.alphacoders.com/905/thumbbig-905573.webp",
    alt: "Bread",
    title: "Bread",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    id: 8,
    img: "https://images6.alphacoders.com/869/thumbbig-869347.webp",
    alt: "coffee-Macarons",
    title: "coffee With Macarons",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    id: 9,
    img: "https://images3.alphacoders.com/886/thumbbig-886620.webp",
    alt: "img",
    title: "Hot-Dog",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    id: 10,
    img: "https://images5.alphacoders.com/394/thumbbig-394155.webp",
    alt: "special",
    title: "Marimasla",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    id: 11,
    img: "https://images.alphacoders.com/653/thumbbig-653057.webp",
    alt: "Jusices",
    title: "strawberry jusice",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    id: 12,
    img: "https://images5.alphacoders.com/396/thumbbig-396169.webp",
    alt: "chicken",
    title: "chicken masala",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    id: 13,
    img: "https://images5.alphacoders.com/407/thumbbig-407194.webp",
    alt: "WHISKY",
    title: "Royal Challenge - WHISKY",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Egg",
    title: "Chinese steamed eggs",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/2067437/pexels-photo-2067437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Toast",
    title: "French toast",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    id: 16,
    img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "meggie",
    title: "Meggie",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    id: 17,
    img: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Vegetables",
    title: "Chopped Raw Vegetables",
    description:
      "A typical salad starts with raw greens, such as lettuce, spinach, kale, mixed greens or arugula other raw vegetables.",
  },
  {
    id: 18,
    img: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Dosa",
    title: "Cheese Moong Dosa",
    description:
      "Dosa is one versatile South Indian food which comes with the goodness of one of more pulses and fits in almost any time of the day. ",
  },
  {
    id: 19,
    img: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Burger",
    title: "Burger king",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    id: 20,
    img: "https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Tassies",
    title: "Sweet-Cookies",
    description:
      "Perhaps no cookie has more holiday street cred than the gingerbread cookie. Use them to make gingerbread men or gingerbread houses.",
  },
  {
    id: 21,
    img: "https://images.pexels.com/photos/1030870/pexels-photo-1030870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "salad",
    title: "Frogeye salad ",
    description:
      "A Waldorf salad is a fruit and nut salad generally made of fresh apples, celery, served on a bed of lettuce as an appetizer or a light meal. ",
  },
  {
    id: 22,
    img: "https://image.shutterstock.com/image-photo/full-gujarati-dish-mouth-watering-600w-1059779252.jpg",
    alt: "Gujarati Dish",
    title: "Full Gujarati dish",
    description:
      "A Waldorf salad is a fruit and nut salad generally made of fresh Gujrati Dish of lettuce as an appetizer or a light meal. ",
  },
  {
    id: 23,
    img: "https://image.shutterstock.com/image-photo/crispy-fafda-sweet-jalebi-indian-600w-1133300210.jpg",
    alt: "Fafda",
    title: "Crispy Fafda",
    description:
      "A Crispy Fafda with sweet jalebi is an Indian snack most popular in Gujarat lettuce as an appetizer or a light meal. ",
  },
];
const Blog: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddBlog = (item: any) => {
    dispatch(addData(item));
  };
  const handleData = ()=>{

    alert("Oops, No More Data❗");
  }

  const { theme } = useContext(ThemeContext);

  return (
    <Box className="cartPage" >
        <Box className="mainDiv">
          <Grid item container>
            <Grid xs={12}>
              <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-end"
                spacing={2}
                className="nav-link"
              >
                <span style={{ color: "#fff", fontSize: "20px" }}>Blog</span>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ color: "#000", borderLeft: "2px solid #000" }}
                />
                <Link to="/" className="nav">
                  Home
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      <Container>
        <Box sx={{marginBottom:'20px'}}>
          <Grid item container>
            {cardData.map((item) => {
              return (
                <Grid
                  spacing={5}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  className="blog_card"
                >
                  <Card key={item.id} className={theme === "light" ? "dark cards" : "light cards1"} >
                    <CardMedia
                      component="img"
                      width="100"
                      height="250"
                      image={item.img}
                      alt={item.alt}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" className="blog_cardTitle">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" className={theme === "light" ? "dark blog_cardDes cards" : "light blog_cardDes cards1"}>
                        {item.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" className="blog_card_btn" onClick={()=>handleAddBlog(item)}>Add Cart</Button>
                      <Button size="small" className="blog_card_btn" sx={{ color: "#6EC1E4" }}>
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
      <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-evenly',margin:'30px auto'}}>
        <Button variant="contained" onClick={handleData}>More</Button>
      </Box>
    </Box>
  );
};

export default Blog;
