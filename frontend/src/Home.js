import React from "react";
import Nav from "./Nav";
import "./styles.css";
import CircularProgressCountUp from "./CircularProgressCountUp";
import { PieChart } from "@mui/x-charts/PieChart";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const createPopupContent = (data) => (
  <PieChart
    series={[
      {
        data,
        highlightScope: { faded: "global", highlighted: "item" },
        faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
      },
    ]}
    height={200}
  />
);

const companies = [
  {
    name: "Company A",
    percentage: 53,
    transitionalPopupCardContent: createPopupContent([
      { id: 0, value: 61, label: "ESG Ratings" },
      { id: 1, value: 11, label: "Greenwashing" },
      { id: 2, value: 18, label: "No Investment" },
    ]),
    physicalPopupCardContent: createPopupContent([
      { id: 0, value: 23, label: "ESG Ratings" },
      { id: 1, value: 48, label: "Drought" },
      { id: 2, value: 29, label: "Flooding" },
    ]),
  },
  {
    name: "Company B",
    percentage: 71,
    transitionalPopupCardContent: createPopupContent([
      { id: 0, value: 45, label: "ESG Ratings" },
      { id: 1, value: 30, label: "Greenwashing" },
      { id: 2, value: 25, label: "No Investment" },
    ]),
    physicalPopupCardContent: createPopupContent([
      { id: 0, value: 28, label: "ESG Ratings" },
      { id: 1, value: 25, label: "Drought" },
      { id: 2, value: 47, label: "Flooding" },
    ]),
  },
  {
    name: "Company C",
    percentage: 39,
    transitionalPopupCardContent: createPopupContent([
      { id: 0, value: 30, label: "ESG Ratings" },
      { id: 1, value: 20, label: "Greenwashing" },
      { id: 2, value: 50, label: "No Investment" },
    ]),
    physicalPopupCardContent: createPopupContent([
      { id: 0, value: 10, label: "ESG Ratings" },
      { id: 1, value: 15, label: "Drought" },
      { id: 2, value: 75, label: "Flooding" },
    ]),
  },
  {
    name: "Company D",
    percentage: 86,
    transitionalPopupCardContent: createPopupContent([
      { id: 0, value: 40, label: "ESG Ratings" },
      { id: 1, value: 50, label: "Greenwashing" },
      { id: 2, value: 10, label: "No Investment" },
    ]),
    physicalPopupCardContent: createPopupContent([
      { id: 0, value: 25, label: "ESG Ratings" },
      { id: 1, value: 40, label: "Drought" },
      { id: 2, value: 35, label: "Flooding" },
    ]),
  },
];
function Home({ Toggle }) {
  const data = [
    {
      name: "Company A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Company B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Company C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Company D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  ];

  return (
    <div className="px-3">
      <Nav Toggle={Toggle} />
      <div className="container-fluid">
        <div className="row g-3 my-2">
          {companies.map((company, index) => (
            <div key={index} className="col-md-3">
              <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <p className="fs-5">{company.name}</p>
                  <CircularProgressCountUp
                    percentage={company.percentage}
                    transitionalPopupCardContent={
                      company.transitionalPopupCardContent
                    }
                    physicalPopupCardContent={company.physicalPopupCardContent}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="pv"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="uv"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Home;
