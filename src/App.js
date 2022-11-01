import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/home";
import Details from "./Pages/Details/details";
import NotFount from "./Pages/Error/NotFound";
import Header from "./Components/Header/header"

function App() {

  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} title="Home"/>
          <Route path="/:id" element={<Details />} itle="Details"/>
          <Route path="*" element={<NotFount />}/>
        </Routes>
    </Router>
    
  );
}

export default App;
