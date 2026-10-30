import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState<string>('');
  const ageAsNumber: number = !isNaN(Number(age)) === true ? Number(age) : 0;
  const lowerLimit: number = (220 - ageAsNumber) * 0.65;
  const upperLimit: number = (220 - ageAsNumber) * 0.85;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Heart Rate Limits Calculator</Text>
      <Text style={styles.age}>Enter your age: </Text>
      <TextInput style={styles.ageInput}
      placeholder="Enter your age"
      keyboardType="number-pad"
      value={age}
      onChangeText={setAge}
      />
      <Text style={styles.age}>Lower limit: {lowerLimit.toFixed(2)}bpm</Text>
      <Text style={styles.age}>Upper limit: {upperLimit.toFixed(2)}bpm</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 100,

  },
  age: {
    alignSelf: 'flex-start',
    paddingLeft: 50,
    paddingTop: 10,
  },
  ageInput: {
    borderWidth: 1,
    borderColor: 'gray',
    width: 60,
    alignSelf: 'flex-start',
    marginLeft: 50,
  },
});
