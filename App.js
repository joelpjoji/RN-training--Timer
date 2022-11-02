/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';

const App = () => {
  const [Time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 10);
      }, 10);
    }else if (!running || Time === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-around',
          marginTop: 180,
        }}>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            setTime(Time + 60000);
          }}>
          <Text style={styles.ButtonText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.Miner}>
          {('' + Math.floor((Time / 60000) % 60)).slice(-2)}:
          {('' + Math.floor((Time / 1000) % 60)).slice(-2)}
        </Text>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            setTime(Time - 1);
          }}>
          <Text style={styles.ButtonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={styles.Button1}
          onPress={() => {
            setRunning(true);
          }}>
          <Text style={styles.ButtonText1}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button1}
          onPress={() => {
            setRunning(false);
            setTime(0);
          }}>
          <Text style={styles.ButtonText1}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Miner: {
    textAlign: 'center',
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
    alignItems: 'center', //Centered vertically
  },
  Button: {
    alignItems: 'center', //Centered vertically
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginStart: 90,
    marginEnd: 90,
    margin: 20,
  },
  ButtonText: {
    textAlign: 'center',
    width: 60,
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
  },
  Button1: {
    alignItems: 'center', //Centered vertically
    elevation: 8,
    marginStart: 20,
    marginEnd: 20,
    marginTop: 30,
    backgroundColor: '#009688',
    borderRadius: 20,
    paddingVertical: 12,
  },
  ButtonText1: {
    alignItems: 'center', //Centered vertically
    width: 100,
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default App;
