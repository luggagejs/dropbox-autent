/* eslint brace-style: 0 */

import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'rgba(245,243,243,1)',
    height: null,
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    paddingTop: 60,
    width: null
  }
})

class Login extends Component {
  componentDidMount() {
  }

  render() {
    const { todos } = this.props

    return (
      <View style={styles.body}>
        <Text>Press to login:</Text>
        <Button
          title="Login with Dropbox"
          onPress={() => this.props.navigation.navigate('TodoList')}
        />
      </View>
    )
  }
}

export default Login
