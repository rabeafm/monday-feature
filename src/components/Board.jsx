import React, { useState, useEffect } from "react";
import mondaySdk from "monday-sdk-js";

const monday = mondaySdk();

const Board = () => {
  const [items, setItems] = useState(); // Fetch data
  const [data, setData] = useState(); // Map users -> data
  const [stats, setStats] = useState(); // Component data

  // Return 1 if is the same status
  const isSameStatus = (status1, status2) => {
    if (status1 === status2) return 1;
    else return 0;
  };

  // Map the users to their data
  const generateData = () => {
    const map = new Map();
    items.map((item) => {
      let itemName = item.name;
      let estimate;
      let actual;
      let persons;
      let status;
      item.column_values.map((column) => {
        switch (column.title) {
          case "Estimated time":
            estimate = column.text;
            break;
          case "Actual time":
            actual = column.text;
            break;
          case "Person":
            persons = column.text.split(", ");
            break;
          case "Status":
            status = column.text;
            break;
          default:
            break;
        }
      });
      persons.map((person) => {
        const newData = {
          items: 0,
          stuck: 0,
          working: 0,
          workingItems: [],
          done: 0,
          acc: 0,
          dir: 0,
        };
        if (map.get(person)) {
          const oldData = map.get(person);
          newData.items = 1 + oldData.items;
          newData.stuck = isSameStatus("Stuck", status) + oldData.stuck;
          newData.working =
            isSameStatus("Working on it", status) + oldData.working;
          newData.done = isSameStatus("Done", status) + oldData.done;
          newData.acc = Math.abs(estimate - actual) + oldData.acc;
          newData.dir = actual - estimate + oldData.dir;
          isSameStatus("Working on it", status)
            ? (newData.workingItems = [...oldData.workingItems, ...[itemName]])
            : (newData.workingItems = oldData.workingItems);
          console.log(typeof newData.workingItems);
        } else {
          newData.items = 1;
          newData.stuck = isSameStatus("Stuck", status);
          newData.working = isSameStatus("Working on it", status);
          newData.done = isSameStatus("Done", status);
          newData.acc = Math.abs(estimate - actual);
          newData.dir = actual - estimate;
          if (isSameStatus("Working on it", status))
            newData.workingItems = [...[], ...[itemName]];
        }
        map.set(person, newData);
      });
    });
    setData(map);
  };

  // The data for monkey component
  const generateStat = () => {
    const res = [];
    const iter = data.keys();
    while (iter) {
      const key = iter.next().value;
      if (key) {
        const item = data.get(key);
        const statToAdd = {
          name: key,
          tasks: item.items,
          taskStatus: item.working * 0.5 + item.done * 1,
          workingTasks: item.workingItems,
          accuracy: item.acc,
          accuracyDirection: item.dir,
        };
        res.push(statToAdd);
      } else {
        break;
      }
    }
    setStats(res);
  };

  // Fetch from API
  useEffect(() => {
    const fetchBoard = async () => {
      try {
        monday.setToken(
          "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjEzMjA1NTk4NywidWlkIjoyNTAzNjQ1NCwiaWFkIjoiMjAyMS0xMS0wOFQxMjoxMjo0OS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTEwMjMyOCwicmduIjoidXNlMSJ9.fcTHFIXYVCOZsbU0hIaknPPpOX-pVsXGXg5qkoVEKkk"
        );
        const res = await monday.api(`query {
          boards(ids:1879880968){
              items{
                name
                  column_values(ids: ["person", "status" , "numbers" ,"numbers_1"]){
                    text
                    title
                  }
                }
              }
            }
        `);
        const items = res.data.boards[0].items;
        setItems(items);
      } catch (e) {
        console.log(e);
      }
    };

    fetchBoard();
  }, []);

  // After fetch
  useEffect(() => {
    if (items) generateData();
  }, [items]);

  // After maping the data
  useEffect(() => {
    if (data) generateStat();
  }, [data]);

  return <></>;
};

export default Board;
