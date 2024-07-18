import "../App.css";
import { useNavigate } from "react-router-dom";

function BottomBarNavigation() {
  const navigate = useNavigate();
  return (
    <div className="bottomBar">
      <h1 onClick={() => navigate("/")}>To Do List</h1>
      <h1 onClick={() => navigate("/agenda")}>Agenda</h1>
      <h1 onClick={() => navigate("/add")}>Tambah</h1>
    </div>
  );
}

export default BottomBarNavigation;
