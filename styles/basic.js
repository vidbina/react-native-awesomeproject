import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    //backgroundColor: '#F00',
    flex: 1,
  },
  thumbnail: {
    width: 53,
    height: 81,
    backgroundColor: '#0F0',
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  toolbar: {
    height: 56,
    backgroundColor: '#FF0',
  }
});
