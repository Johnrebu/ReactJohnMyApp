import { Route,Routes } from "react-router-dom"
import './App.css';
import NavBar from './ReactRouter/NavBar';
import Home from './ReactRouter/Home';
import About from "./ReactRouter/About";
import Service from "./ReactRouter/Service";
import Contact from "./ReactRouter/Contact";
import PageNotFound from "./ReactRouter/PageNotFound";
function App() {
  return (
   <div className= "App">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
   </div>
   );
}

export default App;
