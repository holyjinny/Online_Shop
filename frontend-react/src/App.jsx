import "./App.css";
import Header from "./containers/header/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Pages from "./pages/Pages";
import Cart from "./components/cart/Cart";
import NotFound from "./components/notfound/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./containers/footer/Footer";
import Login from "./components/login/Login";
import UserList from "./components/userList/UserList";
import ProductSingle from "./components/product/ProductSingle";

function App() {
  // step 1: fetch data from database

  return (
    <>
      <Router>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Pages />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/userList" element={<UserList />}></Route>
          <Route path="/pages" element={<NotFound />}></Route>
          <Route path="/product/:productId" element={<ProductSingle />}></Route>
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
