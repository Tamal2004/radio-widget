import React from 'react';
import { Provider } from 'react-redux';
import { RadioPage } from './pages/Radio/RadioPage';

import './styles/global.scss';
import { store } from './store/configureStore';

function App() {
    return (
        <Provider store={store}>
            <RadioPage />
        </Provider>
    );
}

export default App;
