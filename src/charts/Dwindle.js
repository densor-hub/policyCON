import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    offsetY: -8,
                    parentHeightOffset: 0,
                    toolbar: { show: false }
                },
                tooltip: { enabled: false },
                dataLabels: { enabled: false },
                stroke: {
                    width: 5,
                    //curve: 'smooth'
                },
                grid: {
                    show: false,
                    padding: {
                        left: 10,
                        top: -24,
                        right: 12
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityTo: 0.7,
                        opacityFrom: 0.5,
                        shadeIntensity: 1,
                        stops: [0, 90, 100],
                        colorStops: [
                            [
                                {
                                    offset: 0,
                                    opacity: 0.6,
                                    color: "red"
                                },
                                {
                                    offset: 100,
                                    opacity: 0.1,
                                    color: "red"
                                }
                            ]
                        ]
                    }
                },
                theme: {
                    monochrome: {
                        enabled: true,
                        //shadeTo: 'light',
                        shadeIntensity: 1,
                        color: "red"
                    }
                },
                xaxis: {
                    // type: 'numeric',
                    labels: { show: false },
                    axisTicks: { show: false },
                    axisBorder: { show: false }
                },
                yaxis: { show: false },
                markers: {
                    size: 1,
                    offsetY: 1,
                    offsetX: -5,
                    strokeWidth: 4,
                    strokeOpacity: 1,
                    colors: ['transparent'],
                    strokeColors: 'transparent',
                    discrete: [
                        {
                            size: 7,
                            seriesIndex: 0,
                            dataPointIndex: 7,
                            strokeColor: "yellow",
                            fillColor: "red"
                        }
                    ]
                }
            },
            series: [
                {
                    name: "series-1",
                    data: [30, 40, 45, 50, 49, 60, 70, 91]
                }
            ]
        };
    }

    render() {
        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={this.props.options}
                            series={this.props.series}
                            type="area"
                            width="200"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;