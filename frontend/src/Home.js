import React from "react";
import Nav from "./Nav";
import "./styles.css";
import CircularProgressCountUp from "./CircularProgressCountUp";
import { PieChart } from "@mui/x-charts/PieChart";
import Barclays from "./Barclays";

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
    name: "Physical Climate Risk",
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
    name: "Carbon Footprint",
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
    name: "Supply Chain Risk",
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
];

const lineData = [
  { name: "Jun", Score: 50 },
  { name: "Jul", Score: 60 },
  { name: "Aug", Score: 70 },
  { name: "Sep", Score: 65 },
  { name: "Oct", Score: 75 },
  { name: "Nov", Score: 80 },
  { name: "Dec", Score: 85 },
  { name: "Jan", Score: 90 },
  { name: "Feb", Score: 85 },
  { name: "Mar", Score: 88 },
  { name: "Apr", Score: 80 },
  { name: "May", Score: 87 },
];

function Home({ Toggle }) {
  const data = [
    {
      name: "UK",
      Score: 70,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Germany",
      Score: 50,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "France",
      Score: 20,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Italy",
      Score: 87,
      pv: 3908,
      amt: 2000,
    },
  ];

  return (
    <div className="px-3">
      <Nav Toggle={Toggle} />

      <div className="container-fluid">
        <div className="row g-3 my-2 justify-content-center">
          <div className="col-md-4">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <p className="fs-3 center-text">Barclays</p>
                <Barclays percentage={50} />
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3 my-2 justify-content-center">
          {companies.map((company, index) => (
            <div key={index} className="col-md-4">
              <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                <div>
                  <p className="fs-5 center-text">{company.name}</p>
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
              dataKey="Score"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={lineData}
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
              dataKey="Score"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Home;
