import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Audio } from 'expo-av';

const drumKit = {
  bass1: require('./assets/Sounds/linn-BONGO1.wav'),
  bass2: require('./assets/Sounds/linn-BONGO2.wav'),
  bass3: require('./assets/Sounds/linn-CABASA-v2.wav'),
  bass4: require('./assets/Sounds/linn-CABASA.wav'),
  bass5: require('./assets/Sounds/linn-CHH-v2.wav'),
  bass6: require('./assets/Sounds/linn-CHH.wav'),
  bass7: require('./assets/Sounds/linn-CHHL.wav'),
  bass8: require('./assets/Sounds/linn-CHHS.wav'),
  bass9: require('./assets/Sounds/linn-BDRUM13.wav'),
};

const colorsbt = {
  BONGO: '#C0071E',
  CABASA: '#1C1E57',
  CHH: '#0B5E55',
  CHHL: '#57A515',
  CHHS: '#DECE17',
  BDRUM: '#E7A',
};

export default class App extends React.Component {
  playSound = async (drumKitSound) => {
    try {
      const soundobject = new Audio.Sound();

      const path = drumKit[drumKitSound];
      await soundobject.loadAsync(path);
      await soundobject.playAsync().then((status) => {});
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>DrumPad</Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={[{ backgroundColor: colorsbt['BONGO'] }, styles.button]}
            onPress={() => {
              this.playSound('bass1');
            }}></TouchableOpacity>

          <TouchableOpacity
            style={[{ backgroundColor: colorsbt['BONGO'] }, styles.button]}
            onPress={() => {
              this.playSound('bass2');
            }}></TouchableOpacity>

          <TouchableOpacity
            style={[{ backgroundColor: colorsbt['CABASA'] }, styles.button]}
            onPress={() => {
              this.playSound('bass3');
            }}></TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={[{ backgroundColor: colorsbt['CABASA'] }, styles.button]}
            onPress={() => {
              this.playSound('bass4');
            }}></TouchableOpacity>

          <TouchableOpacity
            style={[{ backgroundColor: colorsbt['CHH'] }, styles.button]}
            onPress={() => {
              this.playSound('bass5');
            }}></TouchableOpacity>

          <TouchableOpacity
            style={[{ backgroundColor: colorsbt['CHH'] }, styles.button]}
            onPress={() => {
              this.playSound('bass6');
            }}></TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={[{ backgroundColor: colorsbt['CHHL'] }, styles.button]}
            onPress={() => {
              this.playSound('bass7');
            }}></TouchableOpacity>

          <TouchableOpacity
            style={[{ backgroundColor: colorsbt['CHHS'] }, styles.button]}
            onPress={() => {
              this.playSound('bass8');
            }}></TouchableOpacity>

          <TouchableOpacity
            style={[{ backgroundColor: colorsbt['BDRUM'] }, styles.button]}
            onPress={() => {
              this.playSound('bass9');
            }}></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    height: 120,
    borderRadius: 10,
    margin: 10,
  },
});

