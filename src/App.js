import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/home";

import Header from "./Components/Header/header"

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
    </Router>
    
  );
}

export default App;
