import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { AdminPage } from "./pages/adminPage/adminPage";
import { ShopContextProvider } from "./context/shop-context";
import {useEffect, useState} from "react";
import {PrivateRoute} from "./keycloak/privateRoute";
import {useAuth} from "./keycloak/useAuth";
import Axios from "axios";

function App() {

  const { isLogin, user, login, logout } = useAuth();
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8081/allProducts").then((res) => setData(res.data))
        .catch(error => console.error(error));

  }, []);

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop data={data}/>} />
            <Route path="/adminPage"
                   element={
              <PrivateRoute isLogin={isLogin} login={login()}>
                <AdminPage data={data} />
              </PrivateRoute>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
