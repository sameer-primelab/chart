import "./styles.css";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList
} from "recharts";

const data = [
  {
    event: "",
    name: "10:00am",
    token_value: 1,
    token_supply: 100,
    amt: 2400
  },
  {
    event_details: "Token listing",
    event: "⬤",
    name: "11:00am",
    token_value: 1000,
    token_supply: 2500,
    amt: 2210
  },
  {
    event_details: "Additional Validatiors Join",
    event: "⬤",
    name: "12:00pm",
    token_value: 4200,
    token_supply: 1800,
    amt: 2290
  },
  {
    event: "",
    name: "1:00pm",
    token_value: 3880,
    token_supply: 3408,
    amt: 2000
  },
  {
    event_details: "Toke Launch",
    event: "⬤",
    name: "2:00pm",
    token_value: 5290,
    token_supply: 2800,
    amt: 2181
  },
  {
    name: "3:00pm",
    token_value: 5390,
    token_supply: 3200,
    amt: 2500
  },
  {
    event_details: "More Customers Join",
    event: "⬤",
    name: "4:00pm",
    token_value: 7490,
    token_supply: 3800,
    amt: 2100
  }
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="desc">{`${payload[0].payload.event_details}`}</p>
      </div>
    );
  }

  return null;
};

export default function App() {
  return (
    <AreaChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#885FFF" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#885FFF" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#30B4FF" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#30B4FF" stopOpacity={0} />
        </linearGradient>
      </defs>
      <Tooltip
        wrapperStyle={{
          backgroundColor: "#f9f9f9",
          borderWidth: "3",
          borderColor: "#cccccc",
          color: "#885fff"
        }}
        labelStyle={{ color: "green" }}
        itemStyle={{ color: "cyan" }}
        content={<CustomTooltip />}
      />
      <XAxis stroke="#999999" dataKey="name" />
      <YAxis stroke="#999999" />
      <CartesianGrid strokeDasharray="3 3" />
      <Area
        name="Token Value"
        type="monotone"
        dataKey="token_value"
        stroke="#885FFF"
        fillOpacity={1}
        fill="url(#colorUv)"
      >
        <LabelList dataKey="event" stroke="#ffffff" />
      </Area>
      <Area
        name="Token Supply"
        type="monotone"
        dataKey="token_supply"
        stroke="#30B4FF"
        fillOpacity={1}
        fill="url(#colorPv)"
      />
      <Legend verticalAlign="top" height={36} />
    </AreaChart>
  );
}
