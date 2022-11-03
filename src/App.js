import './App.css';
import Linktree from './LinkTree/Linktree';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Linktree />} />
        <Route path="/contact" element={<Linktree />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
