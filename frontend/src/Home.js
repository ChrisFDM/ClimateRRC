import React from "react";
import Nav from "./Nav";
import "./style.css";

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
    {
      name: "Company E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Company F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Company G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="px-3">
      <Nav Toggle={Toggle} />
      <div className="container-fluid">
        <div className="row g-3 my-2">
          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">230 L</h3>
                <p className="fs-5">Factor A</p>
              </div>
              <i className="bi bi-fuel-pump p-3 fs-1"></i>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">400</h3>
                <p className="fs-5">Factor B</p>
              </div>
              <i className="bi bi-person-exclamation p-3 fs-1"></i>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">44%</h3>
                <p className="fs-5">Factor C</p>
              </div>
              <i className="bi bi-battery-charging p-3 fs-1"></i>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">3000</h3>
                <p className="fs-5">Factor C</p>
              </div>
              <i className="bi bi-currency-dollar p-3 fs-1"></i>
            </div>
          </div>
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