import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Accordion } from "../../shared/components/accordion/Accordion";
import getRampAlgorithms from "../../api/get-ramp-algorithms";
import styles from "./Ramps.module.scss"
import {transformRampsData} from "../../utils/transform-ramps-data"
import {Ramp} from "./types"

ChartJS.register(ArcElement, ChartDataLabels);

export const RampsWidget = () => { 
    const [ramps, setRamps] = useState<Ramp[]>([]);
    const [transformedData, setTansformedData] = useState<number[]>([]);   

    useEffect(()=>{
        getRampAlgorithms((ramps:Ramp[] ) => {
            setRamps(ramps);
        });
    }, []); 

    useEffect(()=>{
        if(ramps){
            const rampsData:number[] = transformRampsData(ramps)
            setTansformedData(rampsData.sort())
        }
    }, [ramps]);

    const chatData = {
        datasets: [{
            data: transformedData,
            backgroundColor: [
              '#24b5a9',
              '#71d9d2',
              '#afe3df',
              '#f2f9ff',
              '#afe3df'
            ],
            borderWidth: 0,
            cutout: "70%",
          }],
    };

    return (
        <Accordion title="RAMPS">
            <div className={styles.rampsContent}>
                <Doughnut 
                    data={chatData}        
                    options={{
                        aspectRatio: 3,
                        responsive: true,
                        maintainAspectRatio: false,
                        layout: {
                            padding: 55
                        },
                        plugins:{
                            datalabels: {
                            align: "end",
                            offset: 30,
                            color: '#24b5a9',
                            font: {
                                size: 16,
                                weight: "bold"
                            },
                            formatter: function(value, context) {
                                return value + '%';
                              }
                            }
                        }
                    }}
                />
            </div>
        </Accordion>
    );
  };
