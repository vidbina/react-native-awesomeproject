/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  Text,
  View
} from 'react-native';

import MoviesSource from './movies';
import BasicStyle from './styles/basic';

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
        style={BasicStyle.listView}
        />
    );
  }

  renderLoadingView() {
    console.log("This is odd");
    return (
      <View style={BasicStyle.container}>
        <Text>
          Loading movies
        </Text>
      </View>
    );
  }

  renderMovie(movie) {
    return (
      <View style={BasicStyle.container}>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={BasicStyle.thumbnail} />
        <View style={BasicStyle.rightContainer}>
          <Text style={BasicStyle.title}>{movie.title}</Text>
          <Text style={BasicStyle.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
