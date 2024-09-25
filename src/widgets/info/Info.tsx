import { useState, useEffect } from "react";
import { CloudSun, Sun  } from "lucide-react"
import { getInfoData } from "../../api/get-info-data";
import styles from "./Info.module.scss"
import { Info } from './types'

export const InfoWidget = () => {
    const [infoData, setInfoData] = useState<Info>()

    useEffect(() => {
        setInfoData(getInfoData())
    }, [])


    return (
        <div className={styles.Info}>
            {!infoData ? (
                <p>Data not Available</p>
            ) : (
                <>
                    <div className={styles.Location}>
                        <div className={styles.Details}>
                            <p className={styles.City}>{infoData.city}</p>
                            <p className={styles.Temp}>{infoData.temp}°</p>
                            <p className={styles.Date}>{infoData.date}<span className={styles.Time}>{infoData.time}</span></p>
                        </div>
                        <div className={styles.Icon}>
                            {infoData.weatherToday === "Cloudy" && (
                                <CloudSun size={108} />
                            )}
                        </div>
                    </div>
                    <div className={styles.Stats}>
                        <p className={styles.Data}><span className={styles.Label}>Humidity</span>{infoData.humidity}%</p>
                        <p className={styles.Data}><span className={styles.Label}>Chance of Rain</span>{infoData.chanceRain}%</p>
                        <p className={styles.Data}><span className={styles.Label}>Wind</span>{infoData.wind}<span className={styles.WindSpeed}>kmh</span></p>
                        <p className={styles.Data}> <span className={styles.Label}>Tomorrow</span>    
                            {infoData.tempTomorrow}°
                            {infoData.weatherTomorrow === "Sunny" && (
                                <Sun size={20} className={styles.Icon}/>
                            )}
                        </p>
                    </div>
                </>
            )}
        </div>
    )
};