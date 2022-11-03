import './App.css';
import Linktree from './LinkTree/Linktree';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './LinkTree/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Linktree />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
