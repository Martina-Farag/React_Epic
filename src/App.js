import "./App.css";
import { Container } from "./components/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  Header  from "./sections/Header/Header";
import  Footer  from "./sections/Footer/Footer";
// import { BrowsePage, CartPage, DiscoverPage, Wishlist } from "./Pages/index";
import Discover from "./Pages/Discover/Discover";
import BrowsePage from './Pages/BrowsePage/BrowsePage';
import Wishlist from './Pages/Wishlist/Wishlist';
import CartPage from './Pages/CartPage/CartPage';

function App() {
  return (<>
    {/* // <Router> */}
    <Header />

      <div className="Container">
      <Routes>
        {/* <Route path="/" element={<DiscoverPage />} /> */}
        <Route path="/" element={<Discover />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      </div>

      <Footer />
    {/* // </Router> */}
    </>
  );
}

export default App;
