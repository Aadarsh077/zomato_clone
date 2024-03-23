import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Navbar />} />
        <Route exact path="/filters" element={<Filters />} />
      </Routes>
    </>
  );
}

export default App;