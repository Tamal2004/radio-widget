import stationLogo from '../../assets/station-logo.png';

import { store } from '../configureStore';
import {
    setCurrentRadioStationIndex,
    setRadioStations
} from '../actions/radio';

// Types
import type { RadioStation } from '../../pages/Radio/types';

describe('stations', () => {
    test('is initialized with none', () => {
        const { stations } = store.getState().radio;

        expect(stations).toHaveLength(0);
    });

    test('can be set separately', () => {
        const sampleStations: RadioStation[] = [
            { station: 'Sandbox FM', frequency: '66.7', logo: stationLogo },
            { station: 'Final FM', frequency: '99.9', logo: stationLogo }
        ];

        store.dispatch(setRadioStations(sampleStations));

        const { stations } = store.getState().radio;

        expect(stations).toBe(sampleStations);
    });
});

describe('currentStationIndex', () => {
    test('is initialized to show none', () => {
        const { currentStationIndex } = store.getState().radio;

        expect(currentStationIndex).toBe(-1);
    });

    test('will toggle a station on & off', () => {
        const currentStationIndex = 2;

        // Toggle on
        store.dispatch(setCurrentRadioStationIndex(currentStationIndex));

        const { currentStationIndex: indexWhenToggledOn } =
            store.getState().radio;

        expect(indexWhenToggledOn).toBe(2);

        // Toggle off
        store.dispatch(setCurrentRadioStationIndex(currentStationIndex));

        const { currentStationIndex: indexWhenToggledOff } =
            store.getState().radio;
        expect(indexWhenToggledOff).toBe(-1);
    });
});
