import "../App.css";
import Navigation from "../components/navigation";
import BottomBarNavigation from "../components/bottomBarNavigation";
import { useNavigate } from "react-router-dom";

function Tambah() {
  const navigate = useNavigate();
  return (
    <div className="main">
      <Navigation />
      <h1>Menu</h1>
      <div className="btn" onClick={() => navigate("/add/agenda/all")}>
        <h1>Tambah Agenda</h1>
      </div>
      <div className="btn" onClick={() => navigate("/add/tugas/all")}>
        <h1>Tambah Tugas</h1>
      </div>
      <BottomBarNavigation />
    </div>
  );
}

export default Tambah;
