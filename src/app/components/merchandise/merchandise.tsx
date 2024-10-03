import React from 'react'
import { ResponsiveContainer, Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    // {
    //     "name": "January",
    //     "twitter": 5000,
    //     "facebook": 3000,
    //     "youtube": 18000,
    //     "linkedIn": 1000,
    //     "instagram": 250000,
    //     "whatsapp-channel": 800
    // },
    // {
    //     "name": "February",
    //     "twitter": 700,
    //     "facebook": 12000,
    //     "youtube": 2500,
    //     "linkedIn": 45000,
    //     "instagram": 450000,
    //     "whatsapp-channel": 30000
    // },
    // {
    //     "name": "March",
    //     "twitter": 2000,
    //     "facebook": 4500,
    //     "youtube": 7000,
    //     "linkedIn": 3400,
    //     "instagram": 150000,
    //     "whatsapp-channel": 700
    // },
    // {
    //     "name": "April",
    //     "twitter": 9500,
    //     "facebook": 65000,
    //     "youtube": 32000,
    //     "linkedIn": 1800,
    //     "instagram": 95000,
    //     "whatsapp-channel": 6000
    // },
    // {
    //     "name": "May",
    //     "twitter": 12000,
    //     "facebook": 500,
    //     "youtube": 10000,
    //     "linkedIn": 80000,
    //     "instagram": 520000,
    //     "whatsapp-channel": 13000
    // },
    // {
    //     "name": "June",
    //     "twitter": 6500,
    //     "facebook": 1700,
    //     "youtube": 1100,
    //     "linkedIn": 12000,
    //     "instagram": 40000,
    //     "whatsapp-channel": 2000
    // },
    {
        "name": "July",
        "twitter": 300,
        "facebook": 55000,
        "youtube": 2500,
        "linkedIn": 50000,
        "instagram": 670000,
        "whatsapp-channel": 100
    },
    {
        "name": "August",
        "twitter": 8400,
        "facebook": 10000,
        "youtube": 20000,
        "linkedIn": 2000,
        "instagram": 72000,
        "whatsapp-channel": 800
    },
    {
        "name": "September",
        "twitter": 22000,
        "facebook": 2000,
        "youtube": 33000,
        "linkedIn": 3700,
        "instagram": 130000,
        "whatsapp-channel": 11000
    },
    {
        "name": "October",
        "twitter": 14000,
        "facebook": 3000,
        "youtube": 50000,
        "linkedIn": 500,
        "instagram": 400000,
        "whatsapp-channel": 2500
    },
    {
        "name": "November",
        "twitter": 900,
        "facebook": 15000,
        "youtube": 7000,
        "linkedIn": 65000,
        "instagram": 550000,
        "whatsapp-channel": 1500
    },
    {
        "name": "December",
        "twitter": 10000,
        "facebook": 1000,
        "youtube": 45000,
        "linkedIn": 2700,
        "instagram": 99000,
        "whatsapp-channel": 9500
    }
]

function Merchandise() {
    return (
        <ResponsiveContainer width={"100%"} height={"80%"}>
            <LineChart
                width={1000}
                height={300}
                data={data}
                margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis
                  label={{ value: 'Total Followers Gained', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="facebook" stroke="#1877F2" />
                <Line type="monotone" dataKey="twitter" stroke=" #1DA1F2;" />
                <Line type="monotone" dataKey="instagram" stroke="purple" />
                <Line type="monotone" dataKey="linkedIn" stroke="#0077B5;" />
                <Line type="monotone" dataKey="youtube" stroke="#ff0000" />
                <Line type="monotone" dataKey="whatapps-channel" stroke=" #25D366;" />
            </LineChart>

        </ResponsiveContainer>

    )
}

export default Merchandise