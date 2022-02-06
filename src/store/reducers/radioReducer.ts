import {
    SET_CURRENT_RADIO_STATION_INDEX,
    SET_RADIO_STATIONS,
    SET_STATIONS_LOADING
} from '../actions/radio';

// Types
import type { AnyAction } from 'redux';
import type { RadioStation } from '../../pages/Radio/types';

interface RadioState {
    stations: RadioStation[];
    currentStationIndex: number;
    loading: boolean;
}

const initialState: RadioState = {
    stations: [],
    currentStationIndex: -1,
    loading: false
};

const radioReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_RADIO_STATIONS: {
            return { ...state, stations: action.payload };
        }
        case SET_STATIONS_LOADING: {
            return { ...state, loading: action.payload };
        }
        case SET_CURRENT_RADIO_STATION_INDEX: {
            const stationToggleIndex = action.payload; // Readability -- Index of the station that was clicked

            const currentStationIndex =
                state.currentStationIndex === stationToggleIndex
                    ? initialState.currentStationIndex
                    : stationToggleIndex;

            return { ...state, currentStationIndex };
        }
        default: {
            return state;
        }
    }
};

export { radioReducer };
