// Types
import type { Action } from './types';
import type { RadioStation } from '../../pages/Radio/types';

const FETCH_RADIO_STATIONS = '@fetch-radio-stations';

const fetchRadioStations = (): Action<void> => ({
    type: FETCH_RADIO_STATIONS
});

const SET_RADIO_STATIONS = '@set-radio-stations';

const setRadioStations = (
    stations: RadioStation[]
): Action<RadioStation[]> => ({
    type: SET_RADIO_STATIONS,
    payload: stations
});

const SET_CURRENT_RADIO_STATION_INDEX = '@set-current-radio-station-index';

const setCurrentRadioStationIndex = (
    currentStationIndex: number
): Action<number> => ({
    type: SET_CURRENT_RADIO_STATION_INDEX,
    payload: currentStationIndex
});

const SET_STATIONS_LOADING = '@set-stations-loading';

const setStationsLoading = (isLoading: boolean): Action<boolean> => ({
    type: SET_CURRENT_RADIO_STATION_INDEX,
    payload: isLoading
});

export {
    FETCH_RADIO_STATIONS,
    fetchRadioStations,
    SET_RADIO_STATIONS,
    setRadioStations,
    SET_CURRENT_RADIO_STATION_INDEX,
    setCurrentRadioStationIndex,
    SET_STATIONS_LOADING,
    setStationsLoading
};
