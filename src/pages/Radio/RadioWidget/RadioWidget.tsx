import React, { Fragment, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

// Store
import {
    fetchRadioStations,
    setCurrentRadioStationIndex
} from '../../../store/actions/radio';

// Local
import { PlayingStation } from './PlayingStation/PlayingStation';
import { WidgetHeader } from './WidgetHeader/WidgetHeader';
import { WidgetFooter } from './WidgetFooter/WidgetFooter';
import { Station } from './Station/Station';
import styles from './RadioWidget.module.scss';

// Types
import type { RootState } from '../../../store/reducers';
import type { RadioStation } from '../types';

const RadioWidget = (): JSX.Element => {
    // CSSTransition uses findDOMNode, which needs a ref. Used explicitly as per StrictMode
    const transitionRef = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRadioStations());
    }, [dispatch]);

    const stations: RadioStation[] = useSelector(
        (state: RootState) => state.radio.stations
    );
    const currentStationIndex: number = useSelector(
        (state: RootState) => state.radio.currentStationIndex
    );

    return (
        <div className={styles.widget}>
            <WidgetHeader
                handleBack={() => void 0}
                handleSwitch={() => void 0}
            />
            <CSSTransition
                in={!!stations.length}
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
            >
                <div className={styles.stations} ref={transitionRef}>
                    {stations.map(({ station, frequency, logo }, index) => (
                        <Fragment key={station}>
                            <PlayingStation
                                isPlaying={index === currentStationIndex}
                                logo={logo}
                                station={station}
                                handlePrevious={() => void 0}
                                handleNext={() => void 0}
                            />
                            <Station
                                station={station}
                                frequency={frequency}
                                handleToggle={() =>
                                    dispatch(setCurrentRadioStationIndex(index))
                                }
                            />
                        </Fragment>
                    ))}
                </div>
            </CSSTransition>
            <WidgetFooter
                currentStationName={stations[currentStationIndex]?.station}
            />
        </div>
    );
};

export { RadioWidget };
