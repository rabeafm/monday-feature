import React from "react";
import Monkey from "./Monkey";

const MonkeyRace = ({ stats }) => {
  return (
    <div className="jungle road">
      <div className="legend">
        <h1>Legend</h1>
        <ul>
          <li>
            <h3 style={{ display: "inline" }}>
              <img
                src="./assets/monkey.png"
                alt="monkey progress"
                width="20px"
              />{" "}
              Monkey Progress :
            </h3>
            <p> Represents the ratio between finished task and total tasks</p>
          </li>
          <li>
            <h3 style={{ display: "inline" }}>
              <img src="./assets/monkey.png" alt="monkey size" width="20px" />{" "}
              Monkey Size :
            </h3>
          </li>
          <li>
            <p style={{ display: "inline" }}> Represents the amount of tasks</p>
            <h3>Banana Color :</h3>
            <ul>
              <li>
                <img
                  src="./assets/banana.png"
                  alt="banana legend"
                  width="20px"
                />{" "}
                <p> Monkey is Accurate</p>
              </li>
              <li>
                <img
                  src="./assets/banana.png"
                  alt="banana legend"
                  width="20px"
                  style={{
                    filter: `grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg)
                    saturate(600%) contrast(0.8)`,
                  }}
                />
                <p> Monkey is early</p>
              </li>
              <li>
                <img
                  src="./assets/banana.png"
                  alt="banana legend"
                  width="20px"
                  style={{
                    filter: `invert(80%) sepia(80%) saturate(288%) hue-rotate(346deg)
              brightness(30%) contrast(97%)`,
                  }}
                />
                <p> Monkey is late</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      {stats.map((monkey, index) => (
        <Monkey key={index} id={index} {...monkey} className="tooltip">
          <div className="tip">
            <h2>{monkey.name}</h2>
            <h3>
              <strong>Tasks :</strong> {monkey.tasks}
            </h3>
            <h3>
              <strong>Finished Tasks :</strong> {monkey.taskstatus}
            </h3>
            <strong>Working on it :</strong> {monkey.workingTasks.length}
            <ul>
              {monkey.workingTasks.map((task) => (
                <li>
                  <img
                    src="./assets/banana.png"
                    alt="banana legend"
                    width="20px"
                    style={{
                      filter: `grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg)
                    saturate(600%) contrast(0.8)`,
                    }}
                  />{" "}
                  {task}
                </li>
              ))}
            </ul>
          </div>
          <img
            src="./assets/banana.png"
            className="banana"
            alt={monkey.name}
            width="70"
            style={{ marginLeft: "20px" }}
          />

          <img
            src="./assets/monkey.png"
            alt={monkey.name}
            width={monkey.tasks * 20}
          />
        </Monkey>
      ))}
      <div className="legend progress-bar">
        <div className="progress"></div>
      </div>
    </div>
  );
};

export default MonkeyRace;
