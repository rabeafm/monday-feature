import React, { useState, useEffect } from 'react';
import mondaySdk from 'monday-sdk-js';
import MonkeyRace from './MonkeyRace';
import { generateData, generateStats } from './Logic';

const monday = mondaySdk();

const Board = () => {
  const [context, setContext] = useState();
  const [data, setData] = useState(); // Map users -> data
  const [stats, setStats] = useState(); // Component data

  // Fetches current board context
  useEffect(() => {
    monday.listen('context', (res) => {
      setContext(res.data);
    });
    // eslint-disable-next-line
  }, []);

  // Fetches current board items based on context and generate data
  useEffect(() => {
    if (context) {
      try {
        monday
          .api(
            `query ($boardIds: [Int]) { boards (ids:$boardIds) { items { name column_values(ids: ["person", "status" , "numbers" ,"numbers_1"]){ text title } } } }`,
            { variables: { boardIds: context.boardIds } }
          )
          .then((res) => {
            const items = res.data.boards[0].items;
            generateData(items, setData);
          });
      } catch (e) {
        console.log(e);
      }
    }
  }, [context]);

  // Generate statistics for Monkey
  useEffect(() => {
    if (data) generateStats(data, setStats);
  }, [data]);

  return stats ? (
    <MonkeyRace stats={stats} />
  ) : (
    <div className="legend">
      <h1>Loading...</h1>
    </div>
  );
};

export default Board;
