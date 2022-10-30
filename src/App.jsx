import Navbar from "./components/Navbar";

import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Executive from "./pages/Executive";
import Gym from "./pages/Gym";
import Nkem from "./pages/Nkem";
import Kitchen from "./pages/Kitchen";
import Laundry from "./pages/Laundry";
import News from "./pages/News";
import Pool from "./pages/Pool";
import Presidential from "./pages/Presidential";
import Reservations from "./pages/Reservations";
import Safety from "./pages/Safety";
import Salon from "./pages/Salon";
import Standard from "./pages/Standard";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/executive" element={<Executive />} />
          <Route path="/gym" element={<Gym />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/laundry" element={<Laundry />} />
          <Route path="/pool" element={<Pool />} />
          <Route path="/presidential" element={<Presidential />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/salon" element={<Salon />} />
          <Route path="/standard" element={<Standard />} />
          <Route path="/news" element={<News />} />
          <Route path="/nkem" element={<Nkem />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
