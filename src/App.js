import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import StakeListing from "./components/StakeListing";
import NotFound from "./components/NotFound";
import CryptoNews from "./components/CryptoNews";
import "./styles/Home.css";

export default function Home() {

  return (
    <>
   <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/StakeListing" element={<StakeListing />} />
        <Route path="/cryptoNews" element={<CryptoNews />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </>
  );
}
