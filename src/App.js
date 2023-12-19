
import Home from "./pages/landingpage/Home";

import { Provider } from 'react-redux';
import store from "./redux/Store";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from "./pages/cart/Cart";
import BookDetails from "./pages/cart/book_detail/BookDetails";
import BookDetailHindi from "./pages/cart/book_detail/BookDetailHindi";
import { useLanguage } from "./components/Context/Context";
import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/Signup";
import ForgotPassword from "./pages/authentication/ForgotPassword";

function App() {

  const { language, toggleLanguage } = useLanguage();

  return (
    <>

      <Provider store={store}>


        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart/" element={<Cart />} />
            <Route path="/BookDetail/:id" element={<BookDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/resetpassword" element={<ForgotPassword />} />
          </Routes>

        </Router>





      </Provider>


    </>
  );
}

export default App;
