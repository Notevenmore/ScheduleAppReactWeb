import "../App.css";
import Navigation from "../components/navigation";
import BottomBarNavigation from "../components/bottomBarNavigation";
import React, { useState, useEffect } from "react";
import FetchData from "../helper/fetchdata";
import { useNavigate, useParams } from "react-router-dom";
import storeData from "../helper/storedata";

function Detail() {
  const { id, req } = useParams();
  const [detail, setDetail] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchData(`http://127.0.0.1:8000/api/${req}/${id}`);
      setDetail(data);
    };
    fetchData();
  }, [req, id]);
  return (
    <div className="main">
      <Navigation />
      <div className="detail">
        {req === "tugas" ? (
          <div>
            <h1>{detail.nama}</h1>
            <h3>Deadline: {detail.deadline}</h3>
            <h3>Deskripsi Tugas: </h3>
            <p>{detail.deskripsi}</p>
          </div>
        ) : (
          <div>
            <h1>{detail.nama}</h1>
            <h3>Tipe Agenda: {detail.tipe}</h3>
            <h3>Posisi Agenda: {detail.posisi}</h3>
            <h3>Deskripsi Agenda:</h3>
            <p>{detail.deskripsi}</p>
          </div>
        )}
        <div className="task">
          <button onClick={() => navigate(`/update/${req}/${detail.id}`)}>Update</button>
          <button onClick={() => navigate(req === "tugas" ? "/" : "/agenda")}>Kembali</button>
          <button onClick={() => storeData(`http://127.0.0.1:8000/api/${req}/destroy/${id}`, req === "tugas" ? "/" : "/agenda", [])}>Selesaikan</button>
        </div>
      </div>
      <BottomBarNavigation />
    </div>
  );
}

export default Detail;
