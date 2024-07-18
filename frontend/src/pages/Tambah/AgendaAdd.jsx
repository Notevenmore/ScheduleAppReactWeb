import "../../App.css";
import Navigation from "../../components/navigation";
import BottomBarNavigation from "../../components/bottomBarNavigation";
import React, { useState, useEffect } from "react";
import FormField from "../../components/formField";
import storeData from "../../helper/storedata";
import { useParams } from "react-router-dom";
import FetchData from "../../helper/fetchdata";

function AgendaAdd() {
  const { req, id } = useParams();
  const [name, setName] = useState("");
  const [tipe, setTipe] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [posisi, setPosisi] = useState("");
  const data = [
    {
      value: name,
      setValue: setName,
      placeholder: "Nama Agenda",
      type: "text",
    },
    {
      value: tipe,
      setValue: setTipe,
      placeholder: "Tipe Agenda",
      type: "text",
    },
    {
      value: deskripsi,
      setValue: setDeskripsi,
      placeholder: "Deskripsi Agenda",
      type: "text",
    },
    {
      value: posisi,
      setValue: setPosisi,
      placeholder: "Posisi Agenda",
      type: "text",
    },
  ];

  useEffect(() => {
    if (id !== "all") {
      const fetchData = async () => {
        const data = await FetchData(`http://127.0.0.1:8000/api/agenda/${id}`);
        setName(data.nama);
        setTipe(data.tipe);
        setDeskripsi(data.deskripsi);
        setPosisi(data.posisi);
      };
      fetchData();
    }
  }, [req, id]);

  const handleSubmit = () => {
    storeData(id === "all" ? "http://127.0.0.1:8000/api/kirim-agenda" : `http://127.0.0.1:8000/api/ubah-agenda/${id}`, "/agenda", {
      nama: data[0].value,
      tipe: data[1].value,
      deskripsi: data[2].value,
      posisi: data[3].value,
    });
  };
  return (
    <div className="main">
      <Navigation />
      <h1>{id === "all" ? "Tambah Agenda" : "Update Agenda"}</h1>
      <FormField data={data} handleSubmit={handleSubmit} />
      <BottomBarNavigation />
    </div>
  );
}

export default AgendaAdd;
