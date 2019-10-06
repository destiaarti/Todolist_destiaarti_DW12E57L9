/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Make_list from './Make_list';
// flatlist
//pullrefresh
AppRegistry.registerComponent(appName, () => Make_list);
