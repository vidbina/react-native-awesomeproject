/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MoviesSource from './movies';

class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    console.log("mounted");
    this.fetchData();
  }

  fetchData() {
    console.log("loading...");
    console.log(MoviesSource);
    (new MoviesSource()).fetchData((data) => {
      console.log("here goes");
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data.movies),
        loaded: true,
      });
    });
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}
        />
    );
  }

  renderLoadingView() {
    console.log("This is odd");
    return (
      <View style={styles.container}>
        <Text>
          Loading movies
        </Text>
      </View>
    );
  }

  renderMovie(movie) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
