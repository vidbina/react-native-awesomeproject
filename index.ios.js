/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import AwesomeProject from'./components/AwesomeProject';

class IOSAwesomeProject extends Component {
  render() {
    return(
      <View style={{flex: 1}}>
        <AwesomeProject />
      </View>
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => IOSAwesomeProject);
