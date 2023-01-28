import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CountryDetails from "./components/CountryDetails";
import Nav from "./components/Nav";
import { GlobalContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries/:country" element={<CountryDetails />} />
        </Routes>
      </Router>
    </GlobalContextProvider>
  );
}

export default App;
