import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Rectangle, ResponsiveContainer } from 'recharts';

const matchFeedbackData = [
    {
        name: "Rangers International vs Nasarawa United",
        positive: 500,
        neutral: 200,
        negative: 100,
    },
    {
        name: "Rangers International vs Gombe United",
        positive: 400,
        neutral: 150,
        negative: 80,
    },
    {
        name: "Rangers International vs Abia Warriors",
        positive: 450,
        neutral: 220,
        negative: 120,
    },
    {
        name: "Rangers International vs Enyimba",
        positive: 600,
        neutral: 300,
        negative: 200,
    }
];



const FanFeedbackBarChart = () => {
    return (
        <ResponsiveContainer width={"100%"} height={"80%"}>

            <BarChart
                width={1000}
                height={400}
                data={matchFeedbackData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 20,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" 
                // label={{ value: 'Match', position: 'insideBottom', offset: -10 }}
                 />
                <YAxis label={{ value: 'Number of Feedbacks', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />

                {/* Positive Feedback */}
                <Bar dataKey="positive" fill="#4CAF50" activeBar={<Rectangle fill="lightgreen" stroke="green" />} />

                {/* Neutral Feedback */}
                <Bar dataKey="neutral" fill="#FFC107" activeBar={<Rectangle fill="yellow" stroke="orange" />} />

                {/* Negative Feedback */}
                <Bar dataKey="negative" fill="#F44336" activeBar={<Rectangle fill="lightcoral" stroke="red" />} />
            </BarChart>
        </ResponsiveContainer>

    );
};

export default FanFeedbackBarChart;
