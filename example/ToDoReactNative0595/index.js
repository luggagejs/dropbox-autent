import React, { AppRegistry } from 'react-native';
import WithDropboxAutent from './src/components/index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => WithDropboxAutent)
