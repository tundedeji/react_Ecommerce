import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Secondpage from "./Pages/Secondpage";
import Thirdpage from "./Pages/Thirdpage";
import Fourthpage from "./Pages/Fourthpage";
import Fifthpage from "./Pages/Fifthpage";
import Sixthpage from "./Pages/Sixthpage";
import Seventhpage from "./Pages/Seventhpage";
import Eightpage from "./Pages/Eightpage";
import Ninthpage from "./Pages/Ninthpage";
import Tenthpage from "./Pages/Tenthpage";
import Eleventhpage from "./Pages/Eleventhpage";
import Twelfthpage from "./Pages/Twelfthpage";
import ClassNavbar from "./Components/ClassNavbar";
import { ProductsProvider } from "./Contexts/ProductContext";
import { AuthProvider } from "./Contexts/AuthContext";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <ProductsProvider>
          <Router>
            <ClassNavbar />
            {/* <Navbar /> */}
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/second-page" element={<Secondpage />} />
              <Route path="/third-page" element={<Thirdpage />} />
              <Route path="/fourth-page" element={<Fourthpage />} />
              <Route path="/fifth-page" element={<Fifthpage />} />
              <Route path="/sixth-page" element={<Sixthpage />} />
              <Route path="/seventh-page" element={<Seventhpage />} />
              <Route path="/eight-page" element={<Eightpage />} />
              <Route path="/ninth-page" element={<Ninthpage />} />
              <Route path="/tenth-page" element={<Tenthpage />} />
              <Route path="/eleventh-page" element={<Eleventhpage />} />
              <Route path="/twelfth-page" element={<Twelfthpage />} />
              {/* <Route path="/catalogue" element={<CataloguePage />} /> */}
              {/* <Route path="/account" element={<AccountPage />} /> */}
            </Routes>
            <Footer />
          </Router>
        </ProductsProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
