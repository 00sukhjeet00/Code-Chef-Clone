import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import HomeScreen from "./Screen/Home";
import LoginScreen from "./Screen/Login";
import ProfileScreen from "./Screen/Profile";
import PracticeScreen from "./Screen/Practice";
import ContestScreen from "./Screen/Contest";
import RegisterScreen from "./Screen/Register";
import DashboardScreen from "./Screen/Dashboard";
import SideBar from "./Component/SideBar";
import QuestionScreen from "./Screen/Question";
import {Provider} from 'react-redux'
import { store } from "./Store/store";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div class="container-scroller">
      <Provider store={store}>
      <BrowserRouter>
        <SideBar />
        <div class="container-fluid page-body-wrapper">
          <Navbar />
          <div class="main-panel">
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/dashboard" element={<DashboardScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/practice" element={<PracticeScreen />} />
              <Route path="/contest" element={<ContestScreen />} />
              <Route path="/question" element={<QuestionScreen />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
