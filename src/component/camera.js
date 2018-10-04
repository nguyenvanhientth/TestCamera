import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, Alert,Dimensions} from 'react-native';
import Camera from 'react-native-camera';

export default class TestCamera extends Component {

    takePicture() { this.camera.capture() .then((data) => console.warn("asdasd",data)) .catch(err => console.warn("asdasd",err)); }
    render() {
      return (
        <View style={styles.container}>
          <Camera 
            ref = {(cam) => {
                this.camera = cam;
            }}
            style = {styles.preview}
            aspect = {Camera.constants.Aspect.fill}>
          </Camera>
          <TouchableHighlight onPress = {this.takePicture.bind(this)}>
            <View style={{height: 50, width: 50, backgroundColor: "green"}}></View>
          </TouchableHighlight>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
      preview: {
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
      },
      capture: {
        flex: 0,
        backgroundColor: 'steelblue',
        borderRadius: 10,
        color: 'red',
        padding: 15,
        margin: 45
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
  })