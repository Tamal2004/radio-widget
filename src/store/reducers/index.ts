import { radioReducer } from './radioReducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    radio: radioReducer
});

type RootState = ReturnType<typeof reducer>;

export type { RootState };
export { reducer };
