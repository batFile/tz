import { HashRouter } from 'react-router-dom';

import Switcher from './containers/Navigation.js';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/reducer.js';

const store = createStore(allReducers);

function App() {
  return (
    <Provider store={store}>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switcher/>
      </HashRouter>
    </Provider>
  );
}

export default App;
