import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RigtSide/RightSide";
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import OKRs from "./pages/OKRs";
import Aplicativos from "./pages/Aplicativos/Aplicativos";
import Chatinterno from "./pages/Chatinterno";
import Cigegpt from "./pages/Cigegpt";
// import Dashboard from "./pages/Dashboard";
import Matrizgut from "./pages/Matrizgut";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MainDash />
                  <RightSide />
                </>
              }
            ></Route>
            <Route path="okrs" element={<OKRs />} />
            <Route path="matriz-gut" element={<Matrizgut />} />
            <Route path="chat-interno" element={<Chatinterno />} />
            <Route path="aplicativos" element={<Aplicativos />} />
            <Route path="chat-gpt" element={<Cigegpt />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
