/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Dimensions,
  NativeModules,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


const { ToastModule } = NativeModules;

const App = () => {

  return (
    <SafeAreaView >
      <StatusBar barStyle='dark-content' />
      <ScrollView
        style={{
          padding: 20,
          height: Dimensions.get("window").height
        }}
        contentInsetAdjustmentBehavior="automatic"
      >
        <Text style={{
          fontSize: 18,
          fontWeight: "700"
        }}>Native Module Bridge</Text>
        <TouchableOpacity
          style={{
            marginTop: 30,
            backgroundColor: "#ccc",
            width: Dimensions.get("window").width * .4,
            padding: 10,
            borderRadius: 5,
            alignItems: "center",
            alignSelf: "center"
          }}
          onPress={() => { 
            ToastModule.showToast("This is a native toast")
          }}>
          <Text style={{
            fontSize: 17,
            fontWeight: "700"
          }}>Show Toast</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
