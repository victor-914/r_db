"use client"
import React from 'react';
import styled from 'styled-components';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,} from 'recharts';


// const values = [
//   {
//     name: 'R vs SS',
//     fullname: 'Rangers International vs Shooting Stars',
//     date: '2024-01-15', // Date of match
//     onlineSales: 2390,
//     offlineSales: 3800,
//     totalSales: 6190, // Sum of online and offline sales
//     revenue: 5000000, // Revenue in Naira
//     ticketType: {
//       executive: 1500, // Number of executive tickets sold
//       openShade: 3000, // Number of open shade tickets sold
//       covered: 1690,   // Number of covered tickets sold
//     }
//   },
//   {
//     name: 'R vs EU',
//     fullname: 'Rangers International vs Enyimba',
//     date: '2024-02-10',
//     onlineSales: 2800,
//     offlineSales: 4500,
//     totalSales: 7300,
//     revenue: 6200000,
//     ticketType: {
//       executive: 1800,
//       openShade: 3500,
//       covered: 2000,
//     }
//   },
//   {
//     name: 'R vs PI',
//     fullname: 'Rangers International vs Plateau United',
//     date: '2024-03-05',
//     onlineSales: 2500,
//     offlineSales: 4100,
//     totalSales: 6600,
//     revenue: 5500000,
//     ticketType: {
//       executive: 1400,
//       openShade: 3200,
//       covered: 2000,
//     }
//   },
//   {
//     name: 'R vs KI',
//     fullname: 'Rangers International vs Kano Pillars',
//     date: '2024-04-12',
//     onlineSales: 3000,
//     offlineSales: 4600,
//     totalSales: 7600,
//     revenue: 6300000,
//     ticketType: {
//       executive: 2000,
//       openShade: 3400,
//       covered: 2200,
//     }
//   },
//   {
//     name: 'R vs AW',
//     fullname: 'Rangers International vs Abia Warriors',
//     date: '2024-05-09',
//     onlineSales: 3200,
//     offlineSales: 4900,
//     totalSales: 8100,
//     revenue: 6900000,
//     ticketType: {
//       executive: 2100,
//       openShade: 3700,
//       covered: 2300,
//     }
//   },
//   {
//     name: 'R vs RI',
//     fullname: 'Rangers International vs Rivers United',
//     date: '2024-06-18',
//     onlineSales: 3100,
//     offlineSales: 4800,
//     totalSales: 7900,
//     revenue: 6700000,
//     ticketType: {
//       executive: 1900,
//       openShade: 3600,
//       covered: 2400,
//     }
//   },
//   {
//     name: 'R vs NU',
//     fullname: 'Rangers International vs Nasarawa United',
//     date: '2024-07-22',
//     onlineSales: 2700,
//     offlineSales: 4200,
//     totalSales: 6900,
//     revenue: 5800000,
//     ticketType: {
//       executive: 1700,
//       openShade: 3100,
//       covered: 2100,
//     }
//   },
//   {
//     name: 'R vs GU',
//     fullname: 'Rangers International vs Gombe United',
//     date: '2024-08-10',
//     onlineSales: 2800,
//     offlineSales: 4300,
//     totalSales: 7100,
//     revenue: 6000000,
//     ticketType: {
//       executive: 1800,
//       openShade: 3200,
//       covered: 2100,
//     }
//   },
//   {
//     name: 'R vs WI',
//     fullname: 'Rangers International vs Wikki Tourists',
//     date: '2024-09-05',
//     onlineSales: 2600,
//     offlineSales: 4100,
//     totalSales: 6700,
//     revenue: 5700000,
//     ticketType: {
//       executive: 1600,
//       openShade: 3000,
//       covered: 2100,
//     }
//   },
//   {
//     name: 'R vs HS',
//     fullname: 'Rangers International vs Heartland FC',
//     date: '2024-10-02',
//     onlineSales: 3000,
//     offlineSales: 4600,
//     totalSales: 7600,
//     revenue: 6300000,
//     ticketType: {
//       executive: 1900,
//       openShade: 3300,
//       covered: 2400,
//     }
//   },
// ];


// interface Ticket {
//   name:string;
//   fullname:string;
//   onlineSales: number,
//   offlineSales: number,
//   totalSales: number,
//   revenue: number,

// }
const values = [
  {
    date: '2024-01-15',
    name: 'R vs SS',
    fullname: 'Rangers International vs Shooting Stars',
    onlineSales: 2390,
    offlineSales: 3800,
    totalSales: 6190, // Sum of online and offline sales
    revenue: 5000000, // Revenue in Naira
    executive: 1500,  // Number of executive tickets sold
    openShade: 3000,  // Number of open shade tickets sold
    covered: 1690,    // Number of covered tickets sold
  },
  {
    date: '2024-02-10',
    name: 'R vs EU',
    fullname: 'Rangers International vs Enyimba',
    onlineSales: 2800,
    offlineSales: 4500,
    totalSales: 7300,
    revenue: 6200000,
    executive: 1800,
    openShade: 3500,
    covered: 2000,
  },
  {
    date: '2024-03-05',
    name: 'R vs PI',
    fullname: 'Rangers International vs Plateau United',
    onlineSales: 2500,
    offlineSales: 4100,
    totalSales: 6600,
    revenue: 5500000,
    executive: 1400,
    openShade: 3200,
    covered: 2000,
  },
  {
    date: '2024-04-12',
    name: 'R vs KI',
    fullname: 'Rangers International vs Kano Pillars',
    onlineSales: 3000,
    offlineSales: 4600,
    totalSales: 7600,
    revenue: 6300000,
    executive: 2000,
    openShade: 3400,
    covered: 2200,
  },
  {
    date: '2024-05-09',
    name: 'R vs AW',
    fullname: 'Rangers International vs Abia Warriors',
    onlineSales: 3200,
    offlineSales: 4900,
    totalSales: 8100,
    revenue: 6900000,
    executive: 2100,
    openShade: 3700,
    covered: 2300,
  },
  {
    date: '2024-06-18',
    name: 'R vs RI',
    fullname: 'Rangers International vs Rivers United',
    onlineSales: 3100,
    offlineSales: 4800,
    totalSales: 7900,
    revenue: 6700000,
    executive: 1900,
    openShade: 3600,
    covered: 2400,
  },
  {
    date: '2024-07-22',
    name: 'R vs NU',
    fullname: 'Rangers International vs Nasarawa United',
    onlineSales: 2700,
    offlineSales: 4200,
    totalSales: 6900,
    revenue: 5800000,
    executive: 1700,
    openShade: 3100,
    covered: 2100,
  },
  {
    date: '2024-08-10',
    name: 'R vs GU',
    fullname: 'Rangers International vs Gombe United',
    onlineSales: 2800,
    offlineSales: 4300,
    totalSales: 7100,
    revenue: 6000000,
    executive: 1800,
    openShade: 3200,
    covered: 2100,
  },
  {
    date: '2024-09-05',
    name: 'R vs WI',
    fullname: 'Rangers International vs Wikki Tourists',
    onlineSales: 2600,
    offlineSales: 4100,
    totalSales: 6700,
    revenue: 5700000,
    executive: 1600,
    openShade: 3000,
    covered: 2100,
  },
  {
    date: '2024-10-02',
    name: 'R vs HS',
    fullname: 'Rangers International vs Heartland FC',
    onlineSales: 3000,
    offlineSales: 4600,
    totalSales: 7600,
    revenue: 6300000,
    executive: 1900,
    openShade: 3300,
    covered: 2400,
  },
];

const StyledTooltip = styled.div`
background-color: #ccccccb4;


`


function CustomTooltip(data: any) {
  if (data.active) {
    return (
      <StyledTooltip className="custom-tooltip">
        <p className="label">{`${data?.label} : ${data?.payload[0]?.payload?.fullname}`}</p>
        <p className="intro">Online Ticket Sales:<b>{`${data?.payload[0]?.payload?.onlineSales?.toLocaleString()}`}</b></p>
        <p className="intro">Offline Ticket Sales:<b>{`${data?.payload[0]?.payload?.offlineSales?.toLocaleString()}`}</b></p>
        <p className="intro">Total Ticket Revenue:<b>&#8358;{`${data?.payload[0]?.payload?.revenue?.toLocaleString()}`}</b></p>
        <p className="intro">Match played:<b>{`${data?.payload[0]?.payload?.date}`}</b></p>
        <p className="desc"></p>
      </StyledTooltip>
    );
  }

  return null;
}

function CustomTooltipCatergory(data: any) {
  if (data.active) {
    return (
      <StyledTooltip className="custom-tooltip">
        <p className="label">{`${data?.label} :${data?.payload[0]?.payload?.fullname}`}</p>
        <p className="intro">Executive Ticket Sales:<b>{`${data?.payload[0]?.payload?.executive?.toLocaleString()}`}</b></p>
        <p className="intro">Open Shade Ticket Sales:<b>{`${data?.payload[0]?.payload?.openShade?.toLocaleString()}`}</b></p>
        <p className="intro">Covered Ticket Sales:<b>{`${data?.payload[0]?.payload?.covered?.toLocaleString()}`}</b></p>
        <p className="intro">Match played:<b>{`${data?.payload[0]?.payload?.date}`}</b></p>
        <p className="desc"></p>
      </StyledTooltip>
    );
  }

  return null;
}




function page() {
  return (
    <StyledBarChart style={{
      width: "auto",
      overflowX: "scroll",
      height: "100vh",
      backgroundColor: "#ccccccc0",
      margin: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "end",
    }}>
      <StyledTitle>Ticket sales per match</StyledTitle>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          width={1000}
          height={300}
          data={values}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="totalSales" />
          <Tooltip content={<CustomTooltip data={values} />} />
          <Legend />
          <Bar dataKey="onlineSales" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="offlineSales" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
      {/* ----------------------------------------- */}
      <StyledTitle>Ticket catergory sales  per match</StyledTitle>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          width={1000}
          height={300}
          data={values}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="totalSales" />
          <Tooltip content={<CustomTooltipCatergory data={values} />} />
          <Legend />
          <Bar dataKey="executive" fill="#ca8284" activeBar={<Rectangle fill="gold" stroke="purple" />} />
          <Bar dataKey={"openShade"} fill="#1d15c6" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="covered" fill="#4e1f1f" activeBar={<Rectangle fill="green" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>


    </ StyledBarChart>

  )
}

// onlineSales: 3490,
// offlineSales: 4300,
// totalSales: 7790,


const StyledTitle = styled.div`
  height:20%;
  width:100%;
  font-size: 20px;
  text-align: center;
  padding-top: 20px;
  font-weight:600;
  text-transform: uppercase;
  /* background-color: red; */
`


const StyledBarChart = styled.section`
  













`

export default page