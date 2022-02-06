import React from 'react';
import { render, screen } from '@testing-library/react';
import { RadioWidget } from './RadioWidget';
import { Provider } from 'react-redux';
import { store } from '../../../store/configureStore';
import { config } from 'react-transition-group';

import userEvent from '@testing-library/user-event/dist';

const stationRegexMatch = /^Station:\s/;

describe('RadioWidget', () => {
    // No need to wait for transitions for testing
    beforeAll(() => {
        config.disabled = true;
    });

    afterAll(() => {
        config.disabled = false;
    });

    beforeEach(() => {
        // Redux store needs to be provided since that's where the state management is being handled
        render(
            <Provider store={store}>
                <RadioWidget />
            </Provider>
        );
    });

    test('should initially render with no stations', () => {
        // Immediately on render
        expect(
            screen.queryByRole('button', { name: stationRegexMatch })
        ).toBeNull();
    });

    test('should render with stations on mount asynchronously', async () => {
        // Wait for stations to load
        const stations = await screen.findAllByRole('button', {
            name: stationRegexMatch
        });

        expect(stations.length).toBeGreaterThanOrEqual(1);
    });

    test('should have no playing station initially', async () => {
        // Wait for stations to load
        await screen.findAllByRole('button', {
            name: stationRegexMatch
        });

        // Only alert is the currently playing footer
        expect(screen.queryByRole('alert')).toBeNull();
    });

    test('that can be toggled on and off', async () => {
        const [station] = await screen.findAllByRole('button', {
            name: stationRegexMatch
        });

        // Toggle on
        userEvent.click(station);

        expect(
            screen.queryByRole('button', { name: /^Previous/ })
        ).toBeInTheDocument();
        expect(screen.queryByRole('alert')).toBeInTheDocument(); // Currently playing

        // Toggle off
        userEvent.click(station);

        expect(screen.queryByRole('button', { name: /^Previous/ })).toBeNull();
        expect(screen.queryByRole('alert')).toBeNull(); // Currently playing
    });
});
