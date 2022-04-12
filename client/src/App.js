import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import HomeScreen from "./Screen/Home";
import LoginScreen from "./Screen/Login";
import ProfileScreen from "./Screen/Profile";
import PracticeScreen from "./Screen/Practice";
import ContestScreen from "./Screen/Contest";

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/practice" element={<PracticeScreen />} />
            <Route path="/contest" element={<ContestScreen/>} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
