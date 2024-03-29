import React, { useEffect, useState } from "react";
import Filters from '../../components/Filters';
import './styles.css';
import Chart from 'react-apexcharts';
import { barOptions, pieOptions} from "./chart-options";
import axios from "axios";
import { buildBarSeries, getGenderChartData, getPlatformChartData } from "./helpers";

type PieChartData = {
    labels: string[];
    series: number[];
}

type BarChartData = {
    x: string;
    y: number;
}

const initialPieData = {
    labels: [],
    series: []
}

const BASE_URL = "https://sds1-games.herokuapp.com";

const Charts = () => {

    const [barChartData, setBarChartData] = useState<BarChartData[]>([]);
    const [platformData, setPlatformData] = useState<PieChartData>(initialPieData);
    const [genderData, setGenderData] = useState<PieChartData>(initialPieData);

    useEffect(() => {
        async function getData(){
            const recordsRespone = await axios.get(`${BASE_URL}/records`);
            const gamesRespone = await axios.get(`${BASE_URL}/games`);

            const barData = buildBarSeries(gamesRespone.data, recordsRespone.data.content);
            setBarChartData(barData);

            const platformChartData = getPlatformChartData(recordsRespone.data.content);
            setPlatformData(platformChartData);

            const genderChartData = getGenderChartData(recordsRespone.data.content);
            setGenderData(genderChartData);
        }

        getData();
    }, [])

    return (
        <div className="page-container">
            <Filters link="/records" linkText='Ver Tabela'/>
            <div className="chart-container">
               <div className="top-related">
                   <h1 className="top-related-title">
                     Jogos mais votados
                   </h1>
                   <div className="games-container">
                        <Chart
                            options={barOptions}
                            type="bar"
                            width="600"
                            height="650"
                            series={[{ data: barChartData}]}
                        />
                   </div>
               </div>
               <div className="charts">
                   <div className="platform-chart">
                       <h2 className="chart-title">Plataformas</h2>
                       <Chart
                            options={{...pieOptions, labels: platformData?.labels }}
                            type="donut"
                            series={platformData?.series}
                            width = "350"
                        />
                   </div> 
                   <div className="gender-chart">
                       <h2 className="chart-title">Gêneros</h2>
                       <Chart
                            options={{...pieOptions, labels: genderData?.labels }}
                            type="donut"
                            series={genderData?.series}
                            width = "350"
                        />
                   </div> 
               </div>
            </div>
        </div>
    )
}

export default Charts;