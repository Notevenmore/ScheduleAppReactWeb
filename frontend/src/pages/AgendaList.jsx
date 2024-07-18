import "../App.css";
import Navigation from "../components/navigation";
import BottomBarNavigation from "../components/bottomBarNavigation";
import React, { useState, useEffect } from "react";
import FetchData from "../helper/fetchdata";
import { useNavigate } from "react-router-dom";

function ToDoList() {
  const navigate = useNavigate();
  const [agenda, setAgenda] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchData("http://127.0.0.1:8000/api/ambil-agenda");
      setAgenda(data);
    };
    fetchData();
  }, []);

  return (
    <div className="main">
      <Navigation />
      <h1>Daftar Agenda</h1>
      <div className="list">
        {agenda.map((e, i) => {
          return (
            <div
              key={i}
              className="item"
              onClick={() => {
                navigate(`/agenda/${e.id}`, { state: { req: "agenda" } });
              }}
            >
              <h3>{e.nama}</h3>
            </div>
          );
        })}
      </div>
      <BottomBarNavigation />
    </div>
  );
}

export default ToDoList;
