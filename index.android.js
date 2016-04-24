import React, {
  AppRegistry,
  Component,
  View,
  Text,
  ToolbarAndroid,
} from 'react-native';

import AwesomeProject from './components/AwesomeProject';
import BasicStyle from './styles/basic';

class AndroidAwesomeProject extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ToolbarAndroid
          title="AwesomeProject"
          style={BasicStyle.toolbar}
          />
         <AwesomeProject />
      </View>
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AndroidAwesomeProject);
