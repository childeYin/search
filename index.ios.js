// index.ios.js
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var SearchPage = require('./SearchPage');//接口模式
//var SearchPage = require('./SearchPageWordFile'); //存储在文件中

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
          //  component: SearchPageWordFile

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