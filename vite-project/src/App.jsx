import React from 'react'; // ✅ ADD THIS LINE
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Homepage';
import Aboutus from './Aboutus';
import ContactUs from './ContactUs';
import Printed from './Printed';
import Woven from './Woven';
import Barcode from './Barcode';
import Heattransfer from './Heattransfer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/printed" element={<Printed />} />
        <Route path="/woven" element={<Woven />} />
        <Route path="/barcode" element={<Barcode />} />
        <Route path="/heattransfer" element={<Heattransfer />} />
      </Routes>
    </Router>
  );
}

export default App;
