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

function App() {
  return (
    <>
      <Router>
        <Header />
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
