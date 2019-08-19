/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet
} from 'react-native';
import { WebView} from 'react-native-webview';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <WebView
      style={{ marginTop: 50, marginBottom: 50 }}
      source={{ uri: 'https://www.techcareerbooster.com' }}
    />
  );
};

const styles = StyleSheet.create({
});

export default App;
