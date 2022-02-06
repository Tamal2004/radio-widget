import React from 'react';

// Local
import styles from './Station.module.scss';

interface StationProps {
    station: string;
    frequency: string;
    handleToggle: JSX.IntrinsicElements['div']['onClick'];
}

const Station = ({
    station,
    frequency,
    handleToggle
}: StationProps): JSX.Element => (
    <div
        className={styles.station}
        onClick={handleToggle}
        role='button'
        aria-label={`Station: ${station}`}
    >
        <span className={styles.name}>{station}</span>
        <span className={styles.frequency}>{frequency}</span>
    </div>
);

export { Station };
