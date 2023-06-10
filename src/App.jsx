/* import "./App.css"; */
import Title from "./components/Title";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import DashBoard from "./views/DashBoard";
import Users from "./views/Users";
import Details from "./views/Details";
import Products from "./views/Products";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Header />
        <Routes>
          {/*<Title title="Dynamic"/>*/}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/" element={<Users />} />
          <Route path="/users/:userId" element={<Details />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
