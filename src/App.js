import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Error from "./pages/error404/Error";
import Contacts from "./pages/contacts/Contacts";
import Home from "./pages/home/Home";
import Privacy from "./pages/privacy/Privacy";
import Terms from "./pages/terms/Terms";
import PlaceOrder from "./pages/place-order/PlaceOrder";
import Store from "./pages/store/Store";
import Menu from "./components/mobile_menu/MobileMenu";
import MobileMenu from "./components/mobile_menu/MobileMenu";
import { useState } from "react";

function App() {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <Router>
        <Header onOpen={() => setShowMenu(true)}/>
        {showMenu && <MobileMenu onHideMenu={() => setShowMenu(false)}/>}
        <Routes>
          <Route path="/*" element={<Error />}/>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/stores" element={<Store />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
