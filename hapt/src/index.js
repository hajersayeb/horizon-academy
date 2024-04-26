import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Acceuil from "./pages/Acceuil";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Formation from "./pages/Formation";
import Inscription from "./pages/Inscription";
import Student from "./pages/Student";
import Login from "./pages/Login";
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Acceuil />} />
        <Route path="admin" element={<Admin />} />
        <Route path="contact" element={<Contact />} />
        <Route path="formation" element={<Formation />} />
        <Route path="inscription" element={<Inscription />} />
        <Route path="student" element={<Student />} />
        <Route path="login" element={<Login />} />

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);