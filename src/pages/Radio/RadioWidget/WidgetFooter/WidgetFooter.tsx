import React, { useRef } from 'react';

// Local
import styles from './WidgetFooter.module.scss';
import { CSSTransition } from 'react-transition-group';

interface WidgetFooterProps {
    currentStationName?: string;
}

const WidgetFooter = ({
    currentStationName
}: WidgetFooterProps): JSX.Element => {
    // CSSTransition uses findDOMNode, which needs a ref. Used explicitly as per StrictMode
    const transitionRef = useRef<HTMLDivElement>(null);

    return (
        <footer className={styles.footer}>
            <CSSTransition
                in={!!currentStationName}
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
                <div
                    className={styles.currentlyPlaying}
                    role='alert'
                    ref={transitionRef}
                >
                    <span className={styles.playing}>Currently playing</span>
                    <span className={styles.station}>{currentStationName}</span>
                </div>
            </CSSTransition>
        </footer>
    );
};

export { WidgetFooter };
