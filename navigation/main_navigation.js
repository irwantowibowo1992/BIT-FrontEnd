import React, {Component} from 'react';
import {Container, Header, Title, Content, Body, Text, Icon} from 'native-base';
import {createAppContainer, TabBarBottom} from 'react-navigation';
import ToDoAll from '../containers/todo_all';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FA from 'react-native-vector-icons/FontAwesome5';

class AllToDo extends Component {
  render() {
    return <ToDoAll show_new_todo={true} screen="All" />;
  }
}

class ActiveToDo extends Component {
  render() {
    return <ToDoAll show_new_todo={false} screen="Active" />;
  }
}

class CompletedToDo extends Component {
  render() {
    return <ToDoAll show_new_todo={false} screen="Completed" />;
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    All: {screen: AllToDo},
    Active: {screen: ActiveToDo},
    Completed: {screen: CompletedToDo},
  },
  {
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = FA;
        let iconName;
        if (routeName === 'All') {
          iconName = `list`;
        } else if (routeName === 'Active') {
          iconName = `unlock`;
        } else {
          iconName = `checkmark`;
        }

        return <IconComponent name={iconName} color={'red'} active={true} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  },
);

export default createAppContainer(TabNavigator);
