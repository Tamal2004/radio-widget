import { call, put, takeEvery } from 'redux-saga/effects';

import stationLogo from '../../assets/station-logo.png';
import {
    FETCH_RADIO_STATIONS,
    setRadioStations,
    setStationsLoading
} from '../actions/radio';

// Types
import { RadioStation } from '../../pages/Radio/types';

const delay = (timeout: number) =>
    new Promise((resolve) => setTimeout(resolve, timeout));

const fetchRadioStations = async (): Promise<{
    data: RadioStation[];
    status: number;
}> => {
    await delay(200);
    return {
        data: [
            { station: 'Putin FM', frequency: '66,6', logo: stationLogo },
            { station: 'Dribble FM', frequency: '101,2', logo: stationLogo },
            { station: 'Doge FM', frequency: '99,4', logo: stationLogo },
            { station: 'Ballads FM', frequency: '87,1', logo: stationLogo },
            { station: 'Maximum FM', frequency: '142,2', logo: stationLogo }
        ],
        status: 200
    };
};

const fetchRadioStationsWorker = function* () {
    // Not currently used
    yield put(setStationsLoading(true));

    const { data: radioStations } = yield call(fetchRadioStations);

    yield put(setRadioStations(radioStations));
    yield put(setStationsLoading(false));
};

const radioSaga = function* () {
    yield takeEvery(FETCH_RADIO_STATIONS, fetchRadioStationsWorker);
};

export { radioSaga };
