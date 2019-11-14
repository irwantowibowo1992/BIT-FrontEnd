import React from 'react';
import TabNavigator from './main_navigation';
import {Provider} from 'react-redux';
import store from '../store/create_store';

import Splash from '../components/screens/SplashScreen';

export default class Navigation extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
    };
  }

  render() {
    const {isLoading} = this.state;

    if (isLoading) {
      return <Splash />;
    }

    return (
      <Provider store={store}>
        <TabNavigator />
      </Provider>
    );
  }

  onLoading = () => {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 3000);
  };

  componentDidMount() {
    this.onLoading();
  }
}
