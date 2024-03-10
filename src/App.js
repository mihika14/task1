import React, { useState } from "react";
import { Resizable } from "re-resizable";
import "./App.css";
import BarChart from "./components/BarChart";
import AreaChart from "./components/AreaChart";
import ColumnChart from "./components/ColumnChart";

const App = () => {
  const [box1Width, setBox1Width] = useState(800);
  const [box1Height, setBox1Height] = useState(400);
  const [box2Width, setBox2Width] = useState(700);
  const [box2Height, setBox2Height] = useState(400);
  const [box3Width, setBox3Width] = useState(1000);
  const [box3Height, setBox3Height] = useState(200);

  const handleResizeBox1 = (e, direction, ref, d) => {
    setBox1Width(box1Width + d.width);
    setBox1Height(box1Height + d.height);
    setBox2Width(box2Width - d.width);
    setBox2Height(box2Height + d.height);
  };

  const handleResizeBox2 = (e, direction, ref, d) => {
    setBox1Width(box1Width - d.width);
    setBox1Height(box1Height + d.height);
    setBox2Width(box2Width + d.width);
    setBox2Height(box2Height + d.height);
  };

  const handleResizeBox3 = (e, direction, ref, d) => {
    setBox3Width(box3Width + d.width);
    setBox3Height(box3Height + d.height);
  };

  return (
    <>
      <div>
        <h1 className="title">Dashboard</h1>
        <div className="upper-part">
          <div className="box">
            <Resizable
              size={{ width: box1Width, height: box1Height }}
              onResizeStop={handleResizeBox1}
            >
              <BarChart />
            </Resizable>
          </div>
          <div className="box">
            <Resizable
              size={{ width: box2Width, height: box2Height }}
              onResizeStop={handleResizeBox2}
            >
              <AreaChart />
            </Resizable>
          </div>
        </div>
      </div>
      <div className="bottom-part">
        <Resizable
          size={{ width: box3Width, height: box3Height }}
          onResizeStop={handleResizeBox3}
        >
          <div>
            <h1 className="title">This is Task 1 of the assignment. </h1>
            <p className="task-description">
              <ul>
                <li className="list-item">
                  Purpose: The app serves as a dashboard interface, providing
                  users with visual representations of data through various
                  types of charts.
                </li>

                <li>
                  Technologies Used: <br/>
                  React: The app is built using React, a
                  JavaScript library for building user interfaces. re-resizable:
                  This library is utilized to create resizable components,
                  allowing users to adjust the size of the chart containers
                  dynamically. CSS: Styling is applied to create an
                  aesthetically pleasing layout and appearance for the
                  dashboard.
                </li>

                <li>
                  This combination allows for a more user-friendly experience
                  and enhances the overall interactivity of the application.
                </li>
              </ul>
            </p>
          </div>
        </Resizable>
      </div>
    </>
  );
};

export default App;
