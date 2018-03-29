import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './src/App.js';
/*
 * TODO Step 2:
 *
 * 1. Import App.js file above using: import App.js from './src/App.js'
 * 2. Delete ReactNative Component
 * 3. Delete styles object
 * 4. Delete ReactNativeComponent from registerComponent
 * 5. Add App Component into the registerComponent
 */

AppRegistry.registerComponent('reactnative_brandybergh', () => App);
