import React, { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import {
  Container,
  Box,
  Grid,
  Button,
  Typography,
  styled,
  Paper,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  TextField,
} from "@mui/material";
// Redux Use
import { useDispatch } from "react-redux";
import { add } from "../store/CartSlice";

// Icons
import CodeOffIcon from "@mui/icons-material/CodeOff";
import "./styles.css";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// Type declaration
interface DataProducts {
  id: number;
  img: string;
  alt: string;
  title: string;
  description: string;
};
const cardData = [
  {
    id: 1,
    img: "https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberries-2023404__340.jpg",
    alt: "Berries",
    title: "Raspberries",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    id: 2,
    img: "https://media.istockphoto.com/photos/best-foods-to-boost-your-brain-and-memory-picture-id1212944928?k=20&m=1212944928&s=612x612&w=0&h=a6KG_opPiQPqruBN_wvsMcmvEIP0uAq2e-4cQCmyZ1U=",
    alt: "Vegetable",
    title: "Vegetable Skewer",
    description:
      "This Group of Indian Food or Indian Thalia, south indian thalia, south indian compleat meal, south indian complete lunch",
  },
  {
    id: 3,
    img: "https://media.istockphoto.com/photos/food-for-indian-festival-diwali-picture-id867909720?s=612x612",
    alt: "img",
    title: "Third",
    description:
      "Festive food for Indian festival Diwali. Naan, samosa, rice, panier, sweets. Holiday Indian table with food, sweets, flowers, burning candles. Diwali celebratory dinner. Assorted Indian dishes, snacks if you like.",
  },
];
const imgIcons = [
  {
    id: 1,
    img: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-1.svg",
    alt: "img1",
  },
  {
    id: 2,
    img: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-2.svg",
    alt: "img2",
  },
  {
    id: 3,
    img: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-3.svg",
    alt: "img3",
  },
  {
    id: 4,
    img: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-5.svg",
    alt: "img4",
  },
];
const cardDataAll = [
  {
    id: 1,
    img: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-1.jpg",
    alt: "Bern's Steak",
    title: "Bern's Steak House",
    description:
      "Potential incident arcus elision amen ac carabiner icacls in ut aliquot.",
  },
  {
    id: 2,
    img: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-2.jpg",
    alt: "Vegetarian",
    title: "eave's Korean Restaurant",
    description:
      "Tristich in orange lecture familist diam libero, eros sit scelerisque pulvinus dui.",
  },
  {
    id: 3,
    img: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-3.jpg",
    alt: "Eggs...",
    title: "The Rayban Vegan House",
    description:
      "Icacls morbid id maecenas mi amen, mi ut dolor aeneas id justs.",
  },
  {
    id: 4,
    img: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-4.jpg",
    alt: "Cake",
    title: "Mangiest Bake & Cake",
    description:
      "Diam laces func est comodo func, relit et amer eu vitae sem.",
  },
  {
    id: 5,
    img: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-5.jpg",
    alt: "Vegetarian egg",
    title: "Crush Los Angeles",
    description:
      "Advising eger in sit rectus sem elision ut consequent suspenses ut tristich.",
  },
  {
    id: 6,
    img: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-6.jpg",
    alt: "Mike Winery",
    title: "The Mike Winery",
    description:
      "Aliquot ut vel faucets gravid tellus non ipsum ullamcorper advising felid.",
  },
];
const VideoData = [
  {
    id: 1,
    img: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-2.jpg",
    title: "Family Dinner - Lated pulvinus scelerisque diam tempus facility",
    dec: "Enid impedient fames nils, purus et diam aliquots",
  },
  {
    id: 2,
    img: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-3.jpg",
    title: "Laborite turpin  vehicular laurent egests enid orange",
    dec: "Enid impedient fames nils, purus et diam aliquot",
  },
  {
    id: 4,
    img: "https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-4.jpg",
    title: "Tempus quia ac vivaria condiment's sit nullo vivaria",
    dec: "Enid impedient fames Nils, purus et diam aliquot",
  },
];
// Function Start
const Slider: React.FC = () => {

  const dispatch = useDispatch();

  const handleAdd = (item: DataProducts) => {
    dispatch(add(item));
  };

  const { theme } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <Box  className={theme === "light" ? "dark cartPage" : "light cartPageS"}>
        <Box> 
          <Grid container  className={theme === "light" ? "dark main" : "light main_1"} spacing={1}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography variant="h6" ml={5} mt={5} color="secondary">
                <CodeOffIcon /> WELCOME
              </Typography>
              <Typography
                variant="h3"
                mt={5}
                textAlign="center"
                sx={{ fontFamily: "My Soul" }}
                className="first_heading"
              >
                I'm Developer
              </Typography>
              <Typography
                variant="h4"
                mt={2}
                textAlign="center"
                className="sliderContent"
              >
                HTML / React Js / FrameWork
              </Typography>
              <Typography
                variant="body2"
                mt={2}
                textAlign="center"
                className="sliderContents"
                width="75%"
                sx={{ margin: "15px auto" }}
              >
                React.js developers design and implement user interface
                components for JavaScript-based web and mobile applications
                using the React open-source library ecosystem. These skilled
                front-end developers are involved in all stages of interface
                component design, from conception through to final testing.
              </Typography>
              <Button
                variant="text"
                className="first_btn"
                sx={{
                  margin: "25px 50px",
                  color: "orange",
                  outline: "2px dashed orange",
                }}
              >
                Outlined
              </Button>
            </Grid>
            {/* Second Grid Col */}
            <Grid item xs={12} sm={12} md={6} lg={6} textAlign="center">
              <img
                src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
                alt="Demo Img"
                className="imgeSlider"
              />
            </Grid>
          </Grid>
        </Box>

        {/* ICONS SLIDER */}

        <Container fixed className="Slider">
          <Box>
            <Grid spacing={2}>
              {/* AS FEATURED IN */}
              <Grid xs={12} my={8}>
                <Typography
                  className="H5_second"
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  my={8}
                >
                  AS FEATURED IN
                </Typography>
                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                  {imgIcons.map((i) => {
                    return (
                      <Grid xs={12} md={3} sm={4} spacing={1}>
                        <Item key={i.id} className="ImgIcons">
                          <img src={i.img} alt={i.alt} />
                        </Item>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>

        {/* All Data Blog Link */}

        <Container fixed>
          <Box className="Third">
            <Typography
              variant="h6"
              className="blog_title_Links"
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              Latest Reviews
              <Link className="blog_Link" to="/blog">
                VIEW ALL
              </Link>
            </Typography>
            <Grid container spacing={3}>
              {cardData.map((item: DataProducts) => {
                return (
                  <Grid item xs={12} sm={6} md={4}  className={theme === "light" ? "dark card_Slider" : "light card_SliderS"}>
                    <Card key={item.id}>
                      <CardMedia
                        component="img"
                        width="100"
                        height="250"
                        image={item.img}
                        alt={item.alt}
                      />
                      <CardContent className="card_Con">
                        <Typography gutterBottom variant="h5" component="div">
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="card_Con">
                          {item.description}
                        </Typography>
                      </CardContent>
                      <CardActions className="card_Con">
                        <Button size="small" onClick={() => handleAdd(item)}>
                          Add Cart
                        </Button>
                        <Button size="small" sx={{ color: "#6EC1E4" }}>
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

        {/* Restaurant DATA */}

        <Box sx={{ backgroundColor: "#f0faf0", padding: "15px auto" }}>
          <Container fixed className="Card_Blog_Items">
            <Typography variant="h3" align="center" className="Blog_heading">
              Best in Class Restaurant
            </Typography>
            <Typography
              variant="body2"
              align="center"
              className="Blog_desc"
              width="80%"
            >
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of fasts. Add 1 cup of
              frozen peas along with the mussels, if you like.
            </Typography>
            <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
              {cardDataAll.map((item: DataProducts) => {
                return (
                  <Grid item xs={12} md={4} sm={4} className="card_Slider">
                    <Card key={item.id} className={theme === "light" ? "dark card_Slider" : "light card_SliderS"}>
                      <CardMedia
                        component="img"
                        width="100"
                        height="250"
                        image={item.img}
                        alt={item.alt}
                      />
                      <CardContent className="card_Con">
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          className="card_Inner_Title"
                        >
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className="card_Con">
                          {item.description}
                        </Typography>
                      </CardContent>
                      <CardActions className="card_Con">
                        <Button size="medium">Add Cart</Button>
                        <Button size="medium" sx={{ color: "#6EC1E4" }}>
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Box>

        {/* Subscribe Box */}
        <Container className="main_menu">
          <Grid container spacing={0.5}>
            <Grid item xs={12} sm={12} md={6}>
              <Box className="ImgSubscribe">
                <img
                  src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Subscribe"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box className="second_Box">
                <Typography variant="h3" className="Text_Content">
                  Join Mailing List
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  className={theme === "light" ? "dark Text_Contents" : "light Text_Contents"}
                >
                  Sign up and get all the latest, ad-free reviews, recipes and
                  news sent to your inbox.
                </Typography>
                <Box sx={{ display: "flex" }} className="sub_Box_Filed">
                  <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    className="input_Email_Contents"
                  />
                  <Button variant="outlined" className="button_Contents">
                    subscribe
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Latest Video */}
        <Container fixed>
          <Box className="Video_Box">
            <Typography variant="h3" className="video_Top_text">
              Latest Videos
            </Typography>
            <Grid container item>
              <Grid xs={12} sm={12} md={6}>
                <video
                  src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/B04Gfy1teiz3sdqe6/videoblocks-craft-beef-burger-and-french-fries-sauce-isolated-on-black-background-fast-food_rgwybon5a7__2875ed9d9b5015b55175df5847cc222f__P360.mp4"
                  width="100%"
                  autoPlay
                  muted
                  controls
                />
                <Typography variant="h5" className="video_Bottom_text">
                  Dianna Adams visits the Soot Restaurant | Uncovered Miami
                </Typography>
                <Typography variant="subtitle2" className="video_Bottom_texts">
                  A consenter eger utricles nec veldt purus quam pianissimo
                  purus gravid aliquant mattie utricles eger utricles incident
                  et erat enid vitae solicitude tellus Lacerta
                </Typography>
              </Grid>
              <Grid xs={12} sm={12} md={6}>
                <Box id="VIDEO">
                  {VideoData.map((ele) => {
                    var { id, img, title, dec } = ele;
                    return (
                      <Box className="Second_video_Blogs" key={id}>
                        <img src={img} alt={dec} />
                        <Box className="second_video_Blo_text">
                          <Typography variant="h6" className="text_hedings">
                            {title}
                          </Typography>
                          <Typography variant="subtitle2" className="text_desc">
                            {dec}
                          </Typography>
                        </Box>
                      </Box>
                    );
                  })}
                  <Button
                    variant="outlined"
                    sx={{ padding: "8px 0" }}
                    className="Btn_video_Show"
                  >
                    VIEW ALL VIDEOS
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>

        {/* Description */}

        <Box className={theme === "light" ? "dark last_Desc_Box" : "light last_Desc_BoxS"} sx={{ paddingBottom: "10px" }}>
          <Grid xs={12}>
            <Typography variant="h3" className="Desc_Box_">
              Invite me to your restaurant. Get exposure of millions food
              lovers.
            </Typography>
            <Typography variant="subtitle2" className="Desc_Box_s">
              Lorem dui tincidunt nunc viverra morbid et maecenas quam advising
              integer amet eget blandit phasellus est natoque blandit facility
              eleifend.
            </Typography>
            <Button variant="outlined" className="last_Button">
              LET's NEW
            </Button>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Slider;
