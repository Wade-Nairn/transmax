import { useState, useEffect } from "react";
import { RoutesItem } from "./components/routes-item/RouteItem";
import { Accordion } from "../../shared/components/accordion/Accordion";
import {getRoutesData} from "../../api/get-routes-data"
import {Route} from "./types"
import styles from "./RoutesList.module.scss"
  
export const RoutesListWidget = () => {
    const [routesData, setDelayedRoutes] = useState<Route[]>([])

    useEffect(() => {
        setDelayedRoutes(getRoutesData())
    }, [])

    return (
        <div className={styles.RoutesList}>
            <Accordion title="DELAYED ROUTES">
                <>
                {(routesData.length < 1) ? (
                    <p className={styles.ErrorMessage}>No Routes are delayed.</p>
                ) : (
                    routesData.map((route:Route , i: number) => {
                        return <RoutesItem key={i} {...route} />
                    })
                )}
                </>
            </Accordion>
        </div>
    );
  };
