import React, { Component } from 'react'
import { Linking } from 'react-native'
import TokenStorage from './TokenStorage'

const DropboxAutent = ({apiKey, redirectUrl}) => WrappedComponent => (
  class App extends Component {
    static dropboxUrl = `https://www.dropbox.com/1/oauth2/authorize\
?response_type=token\
&client_id=${apiKey}\
&redirect_uri=${redirectUrl}`

    state = {
      token: ''
    }

    constructor(props) {
      super(props)
      this.tokenStorage = new TokenStorage()
    }

    componentDidMount() {
      this.tokenStorage.getToken().then(token => {
        if (token) {
          this.setState({token})
        } else {
          Linking.openURL(App.dropboxUrl)
          Linking.addEventListener('url', this.handleOpenURL)
        }
      })
    }

    componentWillUnmount() {
      Linking.removeEventListener('url', this.handleOpenURL)
    }

    handleOpenURL = event => {
      const matchToken = event.url.match(/access_token=([\w\-\_]+)/)

      if (matchToken) {
        const [, token] = matchToken
        this.tokenStorage.setToken(token)
        this.setState({token})
      }

      Linking.removeEventListener('url', this.handleOpenURL);
    }

    render() {
      const { token } = this.state

      return (
        <WrappedComponent token={token} />
      )
    }
  }
)

export default DropboxAutent
