import React, { useState } from 'react';
import Monkey from './Monkey';

const MonkeyRace = () => {
  //const [boards, setBoards] = useState();
  const [stats, setStats] = useState([
    {
      name: 'Sagi',
      tasks: 6,
      taskstatus: 3.5,
      accuracy: 3,
      accuracyDirection: -1,
    },
    {
      name: 'Rabea',
      tasks: 10,
      taskstatus: 3.5,
      accuracy: 0,
      accuracyDirection: 1,
    },
    {
      name: 'Boaz',
      tasks: 9,
      taskstatus: 8,
      accuracy: 5,
      accuracyDirection: 1,
    },
  ]);

  // const generateBoard = async () => {
  //   try {
  //     monday.setToken(
  //       'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjEzMjA1NTk4NywidWlkIjoyNTAzNjQ1NCwiaWFkIjoiMjAyMS0xMS0wOFQxMjoxMjo0OS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTEwMjMyOCwicmduIjoidXNlMSJ9.fcTHFIXYVCOZsbU0hIaknPPpOX-pVsXGXg5qkoVEKkk'
  //     );
  //     const res = await monday.api(`query {
  //       boards(ids: 1879880968) {
  //         groups {
  //           title
  //           items {
  //             id
  //           }

  //         }
  //       }
  //     }
  //       `);

  //     setBoards(res);
  //     console.log(res.data);
  //     console.log('res.data');
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   generateBoard();
  // }, []);

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
