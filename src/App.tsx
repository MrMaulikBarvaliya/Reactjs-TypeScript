import React, { useContext, Suspense, useState, useMemo } from "react";
import { ThemeContext } from "./ThemeProvider";
import Header from "./component/Header";
import Slider from "./component/Slider";
import Footer from "./component/Footer";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import store from "./store/Store";
import Carts from "./pages/Carts";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import CircularProgress from "@mui/material/CircularProgress";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { IconButton, Box, Typography, Divider } from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// const Dashboard = React.lazy(() => {
//   return new Promise((resolve) => setTimeout(resolve, 3 * 1000)).then(
//     () => import("./CompoSidbar/Dashbord")
//   );
// });

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const themes = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  const { theme, toggleTheme } = useContext(ThemeContext);

  const [count, setCount] = useState<number>(0);
  const [item, setItem] = useState(2);

  const MultipleCountUseMemo = useMemo(
    function MultipleCount() {
      console.warn("UseMemo");
      return count * 10
    },
    [count]
  );

  return (
    <React.Fragment>
      <ThemeProvider theme={themes}>
        <Provider store={store}>
          {/* Sidebar */}
          <Suspense
            fallback={
              <div
                style={{
                  maxWidth: "100%",
                  height: "100vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                <h1>
                  {" "}
                  Loading...
                  <CircularProgress color="success" />{" "}
                </h1>
              </div>
            }
          >
            {/* second layout left Sidebar */}

            {/* <Dashboard /> */}
          </Suspense>

          {/* Dark and Light
          // <Box
          //   sx={{
          //     display: "flex",
          //     alignItems: "center",
          //     justifyContent: "space-between",
          //   }}
          // >
          //   <Typography variant="body2">
          //     {" "}
          //     Free Express Shipping on all orders with all duties included{" "}
          //   </Typography>
          //   <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
          //     {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          //   </IconButton>
          // </Box> */}

          <Header title="TS" />
          <Routes>
            <Route path="/" element={<Slider />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/about" element={<About />}></Route>
            <Route path="/cart" element={<Carts />}></Route>
          </Routes>
          <Footer />
        </Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
