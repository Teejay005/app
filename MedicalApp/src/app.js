import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers/index'
import ReduxThunk from 'redux-thunk';
import Main from './components/Main';

class App extends Component {
  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    );
  }
}
 export default App