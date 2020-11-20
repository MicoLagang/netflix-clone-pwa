import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import App from './app';
import * as serviceWorker from './serviceWorker.js';

import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod.js';
import { FirebaseContext } from './context/firebase';

render(
    <>
        <FirebaseContext.Provider value={( firebase )}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>,
    document.getElementById('root'),
);

serviceWorker.register();