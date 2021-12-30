import React, { useEffect, useState, useRef, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import "./App.css";

import Home from "../Home/Home";

// burger icon imports
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import {
  Burger,
  Menu,
  Navbar,
  Footer,
  FoodMenu,
  Store,
  Checkout
} from "../components";
import { useOnClickOutside } from "../hooks";

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
`;

// set storage for cart
const localStorage = window.localStorage;
// initialize cart
let initCart = JSON.parse(localStorage.getItem("cart") || "[]");

// heroku link
const localLink = 'http://localhost:3000/api/v1/photos'
const herokuLink = 'https://radiant-ridge-75037.herokuapp.com'

const App = () => {
  let history = useHistory();
  const node = useRef();

  const [storePhotos, setStorePhotos] = useState(null);
  const [items, setItems] = useState(null);
  const [mainPhoto, setMainPhoto] = useState();
  const [menuPhoto, setMenuPhoto] = useState();
  const [cafePhotos, setCafePhotos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // useState for cart
  const [cart, setCart] = useState(initCart);

  // useState for mobile navbars
  const [isMobile, setIsMobile] = useState();
  const [open, setOpen] = useState(false);

  // useState for transparent navbar
  const [activeTab, setActiveTab] = useState('home')
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(false);

  // listener to close burger menu when clicking
  useOnClickOutside(node, () => setOpen(false));

  // chose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // check if navbar is transparent
  const handleScroll = () => {
    console.log("hi im handlescroll");

    console.log(window.scrollY);
    console.log(window.innerHeight);
    window.scrollY > window.innerHeight
      ? setIsNavbarTransparent(false)
      : setIsNavbarTransparent(true);
  };

  // handle redirect to Menu
  const handleGoToLink = name => {
    history.push(`/home`);
  };

  useEffect(() => {
    // MAKE API CALLS
    axios
      .get(`${herokuLink}/api/v1/photos`)
      .then(resp => {
        setStorePhotos(resp.data);
        // find main photo
        const mainPhoto = resp.data.filter(item => item.title === "Main")[0];
        setMainPhoto(mainPhoto);
        // find menu photo
        const menuPhoto = resp.data.filter(item => item.title === "Menu")[0];
        setMenuPhoto(menuPhoto);
        // find cafe photos
        const cafePhotos = resp.data.filter(item =>
          item.title.includes("Cafe")
        );
        setCafePhotos(cafePhotos);
        console.log(cafePhotos);
        setIsLoaded(true);
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get(`${herokuLink}/api/v1/items`)
      .then(resp => {
        console.log(resp.data);
        setItems(resp.data);
      })
      .catch(error => {
        console.log(error);
      });

    // create an event listener for mobile resize
    window.addEventListener("resize", handleResize);

    // create an event listener for transparent navbar
    window.addEventListener("scroll", handleScroll);

    // initialize isMobile value
    handleResize();
  }, []);

  /////////////////////
  /// MOBILE RENDERING
  ////////

  // decide which navbar
  const renderNavbar = () => {
    if (isMobile) {
      return (
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen}
            activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      );
    } else {
      return (
        <Navbar
          transparent={isNavbarTransparent}
          setIsNavbarTransparent={setIsNavbarTransparent}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      );
    }
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Wrapper>
          {isLoaded && (
            <Fragment>
              {renderNavbar()}

              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Home
                      {...props}
                      mainPhoto={mainPhoto}
                      cafePhotos={cafePhotos}
                      isMobile={isMobile}
                    />
                  )}
                />
                <Route exact path="/food">
                  <FoodMenu menuPhoto={menuPhoto} />
                </Route>
                <Route exact path="/store">
                  <Store
                    items={items}
                    storePhotos={storePhotos}
                    cart={cart}
                    setCart={setCart}
                    localStorage={localStorage}
                  />
                </Route>
                <Route exact path="/checkout">
                  <Checkout cart={cart} />
                </Route>
              </Switch>

              <Footer />
            </Fragment>
          )}
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default App;
