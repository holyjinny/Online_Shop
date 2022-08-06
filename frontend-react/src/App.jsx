import "./App.css";
import Header from "./containers/header/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Pages from "./pages/Pages";
import ProductDetail from "./components/product/ProductDetail";
import Cart from "./components/cart/Cart";
import NotFound from "./components/notfound/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./containers/footer/Footer";

function App() {
  // step 1: fetch data from database

  return (
    <>
      <Router>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Pages />}></Route>
          <Route path="/pages" element={<NotFound />}></Route>
          <Route path="/product/:productId" element={<ProductDetail />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/not-found" element={<NotFound />}></Route>
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
