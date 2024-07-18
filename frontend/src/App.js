import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToDoList from "./pages/todolist";
import Tambah from "./pages/tambah";
import NotFound from "./pages/NotFound";
import AgendaAdd from "./pages/Tambah/AgendaAdd";
import TugasAdd from "./pages/Tambah/TugasAdd";
import Detail from "./pages/Detail";
import AgendaList from "./pages/AgendaList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ToDoList />} />
        <Route path="/agenda" element={<AgendaList />} />
        <Route path="/:req/:id" element={<Detail />} />
        <Route path="/add" element={<Tambah />} />
        <Route path="/:req/agenda/:id" element={<AgendaAdd />} />
        <Route path="/:req/tugas/:id" element={<TugasAdd />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
