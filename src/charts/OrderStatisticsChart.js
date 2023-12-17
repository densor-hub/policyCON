import * as React from 'react';
import Stack from '@mui/material/Stack';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
    { label: 'Group A', value: 400 },
    { label: 'Group B', value: 300 },
    { label: 'Group C', value: 300 },
    { label: 'Group D', value: 200 },
];

const OrderStatisticsChart = () => {
    return (
        <Stack direction="row" >
            <PieChart
                series={[
                    {
                        paddingAngle: 5,
                        innerRadius: 30,
                        outerRadius: 40,
                        data,
                    },
                ]}
                margin={{ right: 5 }}
                width={90}
                height={90}
                legend={{ hidden: true }}
            />
        </Stack >
    );
}

export default OrderStatisticsChart