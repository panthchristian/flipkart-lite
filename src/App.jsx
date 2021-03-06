import React, { useEffect } from "react";
import "./App.css";

// Route
import { Switch, Route, useLocation } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getProducts, closeNotification } from "./actions/index";

// Copmonents
import Home from "./components/Homepage/Home";
import ProductListing from "./components/ProductListing/ProductListing";
import Navbar from "./components/Navbar";
import SideCart from "./components/Cart/SideCart";
import ProductDetail from "./components/ProductDetails/ProductDetail";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer";
import Orders from "./components/Orders/Orders";
import NotificationModal from "./components/NotificationModal";
import OrderPlaceholder from "./components/Orders/OrderPlaceholder";
import FourOFour from "./components/FourOFour";

function App() {
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  // to take the scroll to top
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="App">
      {/* Navbar and sidecart */}
      <Navbar />
      <SideCart />

      {/* notification handling */}
      {notification.open ? (
        <>
          <NotificationModal
            message={notification.message}
            type={notification.type}
          />
          <h1 className="hidden">
            {setTimeout(() => {
              dispatch(closeNotification());
            }, 2000)}
          </h1>
        </>
      ) : (
        ""
      )}

      {/* Routes */}
      <Switch>
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/products">
          <ProductListing />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route component={FourOFour} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
