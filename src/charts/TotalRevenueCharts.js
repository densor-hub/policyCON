import * as React from 'react';
import { useState, useEffect } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [50, 20, 30, 40, 50, 60, 100];
const pData = [-50, -20, -50, -30, -60, -70, -80];

const xLabels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
];

const TotalRevenueChart = () => {
    return (
        <BarChart
            width={450}
            height={200}
            series={[
                {
                    data: pData,
                    label: 'Revenue A',
                },
                {
                    data: uData,
                    label: 'Revenue B',
                },
            ]}
            xAxis={[
                {
                    data: xLabels,
                    scaleType: 'band',
                },
            ]}
            yAxis={[{ max: 50 }]}
        />
    );
}
export default TotalRevenueChart