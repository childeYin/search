// SearchPageWordFile.js
'use strict';

var React = require('react-native');
var Immutable = require('immutable');
var Words = require('./Word.js');
var SearchResults = require('./SearchResults');

var {
  NavigatorIOS,
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

class SearchPageWordFile extends Component {
 
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
    var key = query.toLocaleLowerCase();
    var  value = Words.words.get(key);
    if (value) {
      this.setState({ message: value});
    } else {
       this.setState({ message:"sorry, can't found it!"});
    }
  }
  onSearchPressed() {
     this._executeQuery(this.state.searchString);
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

module.exports = SearchPageWordFile;
