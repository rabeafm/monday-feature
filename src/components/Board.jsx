import AttentionBox from "monday-ui-react-core/dist/AttentionBox.js";
import React, { Fragment, useState, useEffect } from "react";
import mondaySdk from "monday-sdk-js";

// id: "1879880968"
// name: "Test Board"
// { groups {title id} }

// query {boards (ids: 1879880968) {
//   items{
//     id
//     name
//     column_values {
//       Actual time
//     }

// } } }

// items {
//   column_values {
//   text
//   title
//   id
//         }
//       }

const monday = mondaySdk();

const Board = () => {
  const [boards, setBoards] = useState();

  const generateBoard = async () => {
    try {
      monday.setToken(
        "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjEzMjA1NTk4NywidWlkIjoyNTAzNjQ1NCwiaWFkIjoiMjAyMS0xMS0wOFQxMjoxMjo0OS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTEwMjMyOCwicmduIjoidXNlMSJ9.fcTHFIXYVCOZsbU0hIaknPPpOX-pVsXGXg5qkoVEKkk"
      );
      const res = await monday.api(`query {
        boards(ids: 1879880968) {
          groups {
            title
            items {
              id
            }
            
          }
        }
      }
        `);

      setBoards(res);
      console.log(res.data);
      console.log("res.data");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    generateBoard();
  }, []);

  return (
    <Fragment>
      <h1>Board</h1>
      <AttentionBox title="Hello Monday Apps!" text="" type="success" />
    </Fragment>
  );
};

export default Board;
