// SearchPage.js
'use strict';

var React = require('react-native');
var SearchResults = require('./SearchResults');

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component,

} = React;

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  image: {
    width: 217,
    height: 138
  }
});

function urlForQueryAndPage(key, value) {
  var queryString = 'http://localhost/test/test.php?' + key+'='+value
  return queryString;
}

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: 'tcp',
      isLoading: false,
      message: ''
    };
  }
  onSearchTextChanged(event) {
    console.log('onSearchTextChanged');
    this.setState({ searchString: event.nativeEvent.text });
    console.log(this.state.searchString);
  }
  _executeQuery(query) {
    this.setState({ isLoading: true });
    fetch(query)
      .then(response => response.json())
      .then(json => this._handleResponse(json.response))
      .catch(error =>
         this.setState({
           isLoading: false,
           message: 'Something bad happened ' + error+query
         })
      );
  }
  _handleResponse(response) {
    this.setState({ isLoading: false, message: '' });
    if (response.status === true) {
      // this.props.navigator.push({
      //   title: 'Results',
      //   component: SearchResults,
      //   passProps: { listings: response.listings }
      // });
         this.setState({ message: response.full_word });
    } else {
      this.setState({ message: 'Location not recognized; please try again.'+response.status });
    }
  }
  onSearchPressed() {
    var query = urlForQueryAndPage('key_word', this.state.searchString);
    console.log(query);
    this._executeQuery(query);
  }
  render() {
    var spinner = this.state.isLoading ?
        ( <ActivityIndicatorIOS
          hidden="true"
          size="large" />) :
        ( <View /> );
    console.log('SearchPage.render');
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          tcp=> transminssion control protocol
        </Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            onChange={this.onSearchTextChanged.bind(this)}
            placeholder='tcp' />
          <TouchableHighlight style={styles.button}
            underlayColor="#99d9f4"
            onPress={this.onSearchPressed.bind(this)}>
            <Text style={styles.buttonText}>Go</Text>
          </TouchableHighlight>
        </View>
       
        {spinner}
        <Text style={styles.description}>{this.state.message}</Text>
      </View>
    );
  }
}

module.exports = SearchPage;
