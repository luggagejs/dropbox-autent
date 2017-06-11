# Dropbox Autent

Small library for authentication to Dropbox with React Native.

### Import

```js
import DropboxAutent from 'dropbox-autent'
```

### Call

```js
DropboxAutent({apiKey: API_KEY, redirectUrl: 'oauth2todo://foo'})(App)

```

Your have to set 2 parameters in hash:
- `apiKey` is an api kay for your Dropbox Application.
- `redirectUrl` is redirect url. It should be set in Dropbox.
<a href="https://medium.com/@jtremback/oauth-2-with-react-native-c3c7c64cbb6d">Read here</a> for more information.

`App` - is your React component which will be called after authentication

### Example

See TodoList example in 'example' folder.