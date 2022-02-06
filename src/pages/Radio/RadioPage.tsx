import React from 'react';

// Local
import { RadioWidget } from './RadioWidget/RadioWidget';
import styles from './RadioPage.module.scss';

const RadioPage = () => {
    return (
        <main className={styles.layout}>
            <RadioWidget />
        </main>
    );
};

export { RadioPage };
