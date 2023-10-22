import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/footer/Footer";
import Contact from "./pages/Contact/Contact";
import Error from "./pages/Error/Error";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Blog from "./pages/Blog/Blog";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import FactorAuth from "./pages/2FactorAuth/FactorAuth";
import ForgotPass from "./pages/ForgetPassword/ForgotPass";
import Market from "./pages/MarketPlace/Market";
import Cart from "./pages/Cart/Cart";
import BuyProduct from "./pages/BuyProduct/BuyProduct";
import OrderConfirm from "./pages/OrderConfirmation/OrderConfirm";
import MyProfile from "./pages/MyProfile/MyProfile";
import Orders from "./pages/MyOrders/Orders";
import PaymentDetails from "./pages/PaymentDetails/PaymentDetails";
import Wishlist from "./pages/Wishlist/Wishlist";
import DeleteAcc from "./pages/DeleteAc/DeleteAcc";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddProduct from "./pages/AddProduct/AddProduct";
import Team from "./pages/Team/Team";

const Root = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

const router = "placeholder";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blog-detail" element={<BlogDetail />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/two-factor-auth" element={<FactorAuth />}></Route>
        <Route path="/forgot-password" element={<ForgotPass />}></Route>
        <Route path="/market-place" element={<Market />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/buy-product" element={<BuyProduct />}></Route>
        <Route path="/confirmation" element={<OrderConfirm />}></Route>
        <Route path="/error" element={<Error />}></Route>
        <Route path="/profile" element={<MyProfile />}></Route>
        <Route path="/my-orders" element={<Orders />}></Route>
        <Route path="/payment-details" element={<PaymentDetails />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/delete-account" element={<DeleteAcc />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/addProduct" element={<AddProduct />}></Route>
        <Route path="/team" element={<Team />}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
