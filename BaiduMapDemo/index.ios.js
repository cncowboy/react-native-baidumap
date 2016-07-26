/** * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import BaiduMap from 'react-native-baidumap';
import KKLocation from 'react-native-baidumap/KKLocation';

class BaiduMapDemo extends Component {
    componentDidMount() {
        this.refs["mapView"].zoomToLocs([[39.832136, 116.34095]]);
        KKLocation.getCurrentPosition((position) => {
            console.log("location get current position: ", position);
        }, (error) => {
            console.log("location get current position error: ", error);
        });
        this.watchID = KKLocation.watchPosition((position) => {
            console.log("watch position: ", position);
        });
    } 
    render() {
      return (
      <View style={styles.container}>
          <Text style={styles.welcome}>
              Welcome to React Native!
          </Text>
          <BaiduMap style={{flex: 1, width: 300}}
              ref="mapView"
              showsUserLocation={true}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('BaiduMapDemo', () => BaiduMapDemo);
