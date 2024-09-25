import { useState } from "react";
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from "./Accordion.module.scss"
import {AccordionProps} from "./types"

export const Accordion = ({title, children} : AccordionProps) => {
    const [isOpen, setOpen] = useState(true);

    return (
        <div className={styles.Accordion}>
            <div
                className={`${styles.Title} ${isOpen && styles.Open }`}
                onClick={() => setOpen(!isOpen)}
            >
                {title}
                {isOpen ? <ChevronDown />: <ChevronUp />}
                
            </div>
            <div className={`${styles.Item} ${!isOpen && styles.Closed}`} hidden={!isOpen}>
                <div className={styles.Content}>{children}</div>
            </div>
        </div>
    );
  };
