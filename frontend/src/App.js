import './App.css';
import ThemeToggle from './components/ThemeToggle';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';
import Login from './Login';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <Router>
        {isLoggedIn && <ThemeToggle />} {/* Conditionally render ThemeToggle */}
        <div>
          <ToastContainer theme="dark" position="top-center" />
          {isLoggedIn && <Header cartItems={cartItems} />}
          <Routes>
            <Route path="/" element={isLoggedIn ? <Home /> : <Login onLogin={handleLogin} />} />
            <Route path="/search" element={isLoggedIn ? <Home /> : <Login onLogin={handleLogin} />} />
            <Route
              path="/product/:id"
              element={
                isLoggedIn ? (
                  <ProductDetail cartItems={cartItems} setCartItems={setCartItems} />
                ) : (
                  <Login onLogin={handleLogin} />
                )
              }
            />
            <Route
              path="/cart"
              element={
                isLoggedIn ? (
                  <Cart cartItems={cartItems} setCartItems={setCartItems} />
                ) : (
                  <Login onLogin={handleLogin} />
                )
              }
            />
          </Routes>
          {isLoggedIn && <Footer />}
        </div>
      </Router>
    </div>
  );
}

export default App;