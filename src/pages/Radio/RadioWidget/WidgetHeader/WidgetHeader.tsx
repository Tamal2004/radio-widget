import React from 'react';

// Assets
import backIcon from '../../../../assets/back-arrow.png';
import switchIcon from '../../../../assets/switch.png';

// Components
import { IconButton } from '../../../../components/IconButton/IconButton';

// Local
import styles from './WidgetHeader.module.scss';

interface WidgetHeaderProps {
    handleBack: JSX.IntrinsicElements['button']['onClick'];
    handleSwitch: JSX.IntrinsicElements['button']['onClick'];
}

const WidgetHeader = ({
    handleBack,
    handleSwitch
}: WidgetHeaderProps): JSX.Element => {
    return (
        <header className={styles.header}>
            <IconButton src={backIcon} alt='Back' onClick={handleBack} />
            Stations
            <IconButton src={switchIcon} alt='Switch' onClick={handleSwitch} />
        </header>
    );
};

export { WidgetHeader };
