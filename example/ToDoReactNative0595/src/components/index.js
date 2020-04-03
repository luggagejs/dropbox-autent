import 'react-native-gesture-handler';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { luggageMiddleware } from '@luggage/react-luggage-redux'
import DropboxAutent from 'dropbox-autent'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import reducer from '../reducers/index'
import createSessionManager from '../lib/createSessionManager'
import Login from './Login'
import TodoList from './TodoList'

const API_KEY = 'tqx0ze13xl6vawf'

const WithDropboxAutent = DropboxAutent({apiKey: API_KEY, redirectUrl: 'oauth2todo://foo'})(TodoList)

const SwitchNavigator = createSwitchNavigator({
  Login: { screen: Login },
  TodoList: { screen: TodoList }
}, {
  initialRouteName: 'Login'
})

const Navigator = createAppContainer(SwitchNavigator)

class App extends Component {
  static propTypes = {
    token: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
    const { token } = this.props
    const SessionManager = createSessionManager(token)
    this.store = createStore(
      reducer,
      applyMiddleware(luggageMiddleware({
        apiKey: API_KEY,
        SessionManager
      }))
    )
  }

  render() {
    return (
      <Provider store={this.store}>
        <Navigator />
      </Provider>
    )
  }
}

export default App
