import React, {Component} from 'react';
import { Provider } from 'react-redux';
import StackNavigation from './app/appConfig/Navigation/StackNavigation'
import store from './app/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StackNavigation />
      </Provider>
    );
  }
}