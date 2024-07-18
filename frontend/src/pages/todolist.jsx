import "../App.css";
import Navigation from "../components/navigation";
import BottomBarNavigation from "../components/bottomBarNavigation";
import React, { useState, useEffect } from "react";
import FetchData from "../helper/fetchdata";
import { useNavigate } from "react-router-dom";

function ToDoList() {
  const navigate = useNavigate();
  const [todolist, setTodoList] = useState([]);
  const [timeLefts, setTimeLefts] = useState([]);

  const calculationTimeLeft = (deadline) => {
    const deadlineDate = new Date(deadline.replace(/-/g, "/"));
    const now = new Date();
    const difference = deadlineDate - now;
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchData("http://127.0.0.1:8000/api/ambil-tugas");
      setTodoList(data);
      setTimeLefts(data.map((task) => calculationTimeLeft(task.deadline)));
    };
    fetchData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLefts(todolist.map((task) => calculationTimeLeft(task.deadline)));
    }, 1000);
    return () => clearInterval(timer);
  }, [todolist]);

  return (
    <div className="main">
      <Navigation />
      <h1>To Do List</h1>
      <div className="list">
        {todolist.map((e, i) => {
          const timeLeft = timeLefts[i];
          return (
            <div
              key={i}
              className="item"
              onClick={() => {
                navigate(`/tugas/${e.id}`, { state: { req: "Tugas" } });
              }}
            >
              <h3>{e.nama}</h3>
              {timeLeft.days == null && timeLeft.hours == null && timeLeft.minutes == null && timeLeft.seconds == null ? (
                <p>tugas sudah melampaui deadline</p>
              ) : (
                <p>
                  {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes {timeLeft.seconds} seconds
                </p>
              )}
            </div>
          );
        })}
      </div>
      <BottomBarNavigation />
    </div>
  );
}

export default ToDoList;
