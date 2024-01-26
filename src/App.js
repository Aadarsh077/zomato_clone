import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Cuisines from "./components/Cuisines";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Navbar />} />
        <Route exact path="/cuisines" element={<Cuisines />} />
      </Routes>
    </>
  );
}

export default App;