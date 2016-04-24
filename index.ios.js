/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

import AwesomeProject from'./components/AwesomeProject';
import BasicStyle, {colors} from './styles/basic';

class IOSAwesomeProject extends Component {
  render() {
    return(
      <NavigatorIOS
        initialRoute={{component: AwesomeProject, title: 'AwesomeProject'}}
        style={BasicStyle.navigator}
        itemWrapperStyle={BasicStyle.navigatorPadding}
        barTintColor={colors.topBar}
      />
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => IOSAwesomeProject);
