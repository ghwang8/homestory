import "./styles.css";
import Home from "./Home";
import MobileNavbar from "./MobileNavbar";
import EstherBio from "./EstherBio";
import Testimonials from './Testimonials';
import Resources from './Resources';
import Instagram from "./Instagram";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import ContactFooter from "./ContactFooter";

export default function App() {
  return (
    <div className="App">
      <MobileNavbar />
      <Home />
      <EstherBio />
      <Testimonials />
      <Resources />
      <Instagram />
      <About />
      <Blog />
      <Contact />
      <ContactFooter />
    </div>
  );
}
