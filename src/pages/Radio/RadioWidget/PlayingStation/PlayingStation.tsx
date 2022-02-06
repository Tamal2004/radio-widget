import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

// Components
import { IconButton } from '../../../../components/IconButton/IconButton';

// Assets
import minusIcon from '../../../../assets/minus.png';
import plusIcon from '../../../../assets/plus.png';

// Local
import styles from './PlayingStation.module.scss';

interface PlayingStationProps {
    isPlaying: boolean;
    logo: string;
    station: string;
    handlePrevious: JSX.IntrinsicElements['button']['onClick'];
    handleNext: JSX.IntrinsicElements['button']['onClick'];
}

const PlayingStation = ({
    isPlaying,
    logo,
    station,
    handlePrevious,
    handleNext
}: PlayingStationProps): JSX.Element => {
    // CSSTransition uses findDOMNode, which needs a ref. Used explicitly as per StrictMode
    const transitionRef = useRef<HTMLDivElement>(null);

    return (
        <CSSTransition
            in={isPlaying}
            nodeRef={transitionRef}
            timeout={300}
            classNames={{
                enter: styles.transitionEnter,
                enterActive: styles.transitionEnterActive,
                exit: styles.transitionExit,
                exitActive: styles.transitionExitActive
            }}
            appear
            mountOnEnter
            unmountOnExit
        >
            <div className={styles.playingStation} ref={transitionRef}>
                <IconButton
                    className={styles.stationIcon}
                    src={minusIcon}
                    alt='Previous station'
                    role='button'
                    onClick={handlePrevious}
                />
                <img
                    className={styles.logo}
                    src={logo}
                    alt={`${station} Logo`}
                />
                <IconButton
                    className={styles.stationIcon}
                    src={plusIcon}
                    alt='Next station'
                    role='button'
                    onClick={handleNext}
                />
            </div>
        </CSSTransition>
    );
};

export { PlayingStation };
