import { all } from 'redux-saga/effects';
import { radioSaga } from './radioSaga';

const rootSaga = function* () {
    yield all([radioSaga()]);
};

export { rootSaga };
