import React, {
  AppRegistry,
} from 'react-native';

import AwesomeProject from './components/AwesomeProject';

class AndroidAwesomeProject extends AwesomeProject {
}

AppRegistry.registerComponent('AwesomeProject', () => AndroidAwesomeProject);
