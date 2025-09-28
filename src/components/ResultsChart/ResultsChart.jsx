import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
    {
      "student_id": 1,
      "name": "Alice",
      "physics": 85,
      "chemistry": 90,
      "math": 88
    },
    {
      "student_id": 2,
      "name": "Bob",
      "physics": 92,
      "chemistry": 85,
      "math": 91
    },
    {
      "student_id": 3,
      "name": "Charlie",
      "physics": 78,
      "chemistry": 82,
      "math": 80
    },
    {
      "student_id": 4,
      "name": "David",
      "physics": 88,
      "chemistry": 86,
      "math": 92
    },
    {
      "student_id": 5,
      "name": "Eva",
      "physics": 95,
      "chemistry": 91,
      "math": 93
    },
    {
      "student_id": 6,
      "name": "Frank",
      "physics": 80,
      "chemistry": 78,
      "math": 85
    },
    {
      "student_id": 7,
      "name": "Grace",
      "physics": 91,
      "chemistry": 94,
      "math": 90
    },
    {
      "student_id": 8,
      "name": "Hank",
      "physics": 70,
      "chemistry": 72,
      "math": 75
    },
    {
      "student_id": 9,
      "name": "Ivy",
      "physics": 77,
      "chemistry": 80,
      "math": 78
    },
    {
      "student_id": 10,
      "name": "Jack",
      "physics": 89,
      "chemistry": 87,
      "math": 90
    }
  ]
  

const ResultsChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey={'chemistry'} stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultsChart;