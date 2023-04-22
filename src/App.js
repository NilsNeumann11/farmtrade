import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav.js";
import Home from "./pages/Home/Home.js";
import Events from "./pages/Events/Events.js";
import Freshboard from "./pages/Freshboard/Freshboard.js";
import Whatsnew from "./pages/Whatsnew/Whatsnew.js";
import Profile from "./pages/Profile/Profile.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/freshboard" element={<Freshboard />} />
          <Route path="/whatsnew" element={<Whatsnew />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
