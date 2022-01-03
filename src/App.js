import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Result from "./routes/Result.js";
import Numpad from "./routes/Numpad";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Numpad />}></Route>
        <Route path="/result/:input" element={<Result />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
