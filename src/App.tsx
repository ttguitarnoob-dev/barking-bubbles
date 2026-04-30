import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import PricingPage from "@/pages/pricing";
import AboutPage from "@/pages/about";
import ContactPage from "./pages/contact";
import SuccessPage from "./pages/success";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<PricingPage />} path="/services" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<ContactPage />} path="/contact" />
      <Route element={<SuccessPage />} path="/success" />
    </Routes>
  );
}

export default App;
