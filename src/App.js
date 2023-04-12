import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminRoutes from "./routes/AdminRoutes";
import ClientRoutes from "./routes/ClientRoutes";
import DoctorRoutes from "./routes/DoctorRoutes";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/*" element={<ClientRoutes/>} />
          <Route path="/admin/*" element={<AdminRoutes/>} />
          <Route path="/doctor/*" element={<DoctorRoutes/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
