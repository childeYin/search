// index.ios.js
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var SearchPage = require('./SearchPage');

var {
  NavigatorIOS,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

class SearchProject extends React.Component{
  render() {
    return (
      <NavigatorIOS
        style={Styles.container}
        initialRoute={{
          title: 'Search',
          component: SearchPage
        }}
      />
    );
  }
}

var Styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

//注意：registerComponent的第一个参数必须和项目名称相同

AppRegistry.registerComponent('SearchProject', () => SearchProject);