import React from 'react';
import Monkey from './Monkey';

const MonkeyRace = ({ stats }) => {
  return (
    <div className="jungle road">
      <div className="legend">
        <h1>Legend</h1>
        <h3 style={{ display: 'inline' }}>
          <img src="./assets/monkey.png" alt="monkey progress" width="25px" />{' '}
          Monkey Progress:
        </h3>
        <p></p>
        <h3 style={{ display: 'inline' }}>
          <img src="./assets/monkey.png" alt="monkey size" width="25px" />{' '}
          Monkey Size:
        </h3>
        <p style={{ display: 'inline' }}> Represents the amount of tasks</p>
        <h3>
          <img src="./assets/banana.png" alt="banana legend" width="25px" />{' '}
          Banana Color:
        </h3>
      </div>
      {stats.map((monkey, index) => (
        <Monkey key={index} id={index} {...monkey} className="tooltip">
          <div className="tip">
            <h2>{monkey.name}</h2>
            <h3>
              <strong>Tasks:</strong> {monkey.tasks}
            </h3>
            <h3>
              <strong>Finished Tasks:</strong> {monkey.taskstatus}
            </h3>
            <h3>
              <strong>Tasks:</strong> {monkey.tasks}
            </h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
            molestias fugit veniam quas at id minus cum repellat architecto
            porro unde libero.
          </div>
          <img
            src="./assets/banana.png"
            className="banana"
            alt={monkey.name}
            width="70"
            style={{ marginLeft: '20px' }}
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
