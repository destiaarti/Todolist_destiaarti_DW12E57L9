/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import List from './List';
import Tugas from './Tugas';
// flatlist
//pullrefresh
AppRegistry.registerComponent(appName, () => Tugas);
