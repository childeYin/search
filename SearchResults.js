'use strict';

var React = require('react-native');
var PropertyView = require('./PropertyView');

var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component
} = React;

class SearchResults extends Component {
  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      { rowHasChanged: (r1, r2) => r1.guid !== r2.guid}
    );
    this.state = {
      dataSource: dataSource.cloneWithRows([this.props.listings]),
     // dataSource: this.props.listings,
      message: 'Location not recognized; please try again.'+this.props.listings
    };
  }
  rowPressed(propertyGuid) {
    var property = this.props.listings;
    this.props.navigator.push({
      title: 'Property',
      component: PropertyView,
      passProps: {property: property}
    });
  }

  renderRow(rowData, sectionId, rowId) {
    return (
      <TouchableHighlight onPress={() => this.rowPressed(rowData.guid)}
        underlayColor="#DDD">
              <Text style={styles.title} >{rowData}</Text>
      </TouchableHighlight>
    );
  }
  render() {
    return (
      <ListView
        dataSource={ this.state.dataSource }
        renderRow={ this.renderRow.bind(this) } />
    );
  }
}

var styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#DDD'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
});

module.exports = SearchResults;
