import "../../App.css";
import Navigation from "../../components/navigation";
import BottomBarNavigation from "../../components/bottomBarNavigation";
import React, { useState, useEffect } from "react";
import FormField from "../../components/formField";
import FetchData from "../../helper/fetchdata";
import storeData from "../../helper/storedata";
import { useParams } from "react-router-dom";

function TugasAdd() {
  const { req, id } = useParams();
  const [name, setName] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [clock, setClock] = useState("");
  const [dataselect, setDataSelect] = useState([]);

  useEffect(() => {
    if (id !== "all") {
      const fetchData = async () => {
        const data = await FetchData(`http://127.0.0.1:8000/api/tugas/${id}`);
        setName(data.agenda_id);
        setDeskripsi(data.deskripsi);
        setTanggal(data.deadline.split(" ")[0]);
        setClock(data.deadline.split(" ")[1].split(":")[0] + ":" + data.deadline.split(" ")[1].split(":")[1]);
      };
      fetchData();
    }
    const fetchAgenda = async () => {
      const data = await FetchData("http://127.0.0.1:8000/api/ambil-agenda");
      setDataSelect(data);
    };
    fetchAgenda();
  }, [req, id]);

  const data = [
    {
      value: name,
      setValue: setName,
      placeholder: "Nama Agenda",
      type: "select",
    },
    {
      value: deskripsi,
      setValue: setDeskripsi,
      placeholder: "Deskripsi Tugas",
      type: "text",
    },
    {
      value: tanggal,
      setValue: setTanggal,
      placeholder: "Tanggal Deadline Tugas",
      type: "date",
    },
    {
      value: clock,
      setValue: setClock,
      placeholder: "Jam Deadline Tugas",
      type: "time",
    },
  ];
  const handleSubmit = () => {
    storeData(id === "all" ? "http://127.0.0.1:8000/api/kirim-tugas" : `http://127.0.0.1:8000/api/ubah-tugas/${id}`, "/", {
      agenda_id: data[0].value,
      deskripsi: data[1].value,
      tanggal: data[2].value,
      clock: data[3].value,
    });
  };
  return (
    <div className="main">
      <Navigation />
      <h1>{req === "add" ? "Tambah" : req === "update" ? "Update" : ""} Tugas</h1>
      <FormField data={data} handleSubmit={handleSubmit} dataselect={dataselect} />
      <BottomBarNavigation />
    </div>
  );
}

export default TugasAdd;
