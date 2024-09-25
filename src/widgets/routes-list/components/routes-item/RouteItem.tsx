import { MoveDown } from 'lucide-react';
import { Route } from "../../types"
import styles from "./RoutesItem.module.scss"

export const RoutesItem = (
    {
        name,
        start,
        end,
        distance,
        time,
        status
    }: Route
    ) => {

    return (
        <div className={styles.RouteItem}>
            <div className={styles.Header}>
                <div className={`${styles.Status} ${status === "RED" ? styles.Red : styles.Yellow}`}></div>
                <p className={styles.Title}>{name}</p>
                <p className={styles.DistanceText}>{distance} km</p>
            </div>
            <div className={styles.Info}>
                <div className={styles.Direction}>
                    <MoveDown className={styles.DirectionIcon}/>
                    <div className={styles.Text}>
                        <p>{start}</p>
                        <p>{end}</p>
                    </div>
                </div>
                <div className={styles.Time}>
                    <span className={styles.TimeText}>{time}</span> mins
                </div>
            </div>
        </div>
    );
  };
