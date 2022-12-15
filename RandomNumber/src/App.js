import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  const [number, setNumber] = useState(0);
  function handleNumber() {
    const newNumber = Math.floor(Math.random() * 10);

    setNumber(newNumber);
  }
  //esse return só pode retornar um componente
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.number}>{number}</Text>
      <TouchableOpacity onPress={handleNumber} style={style.button}>
        <Text style={style.buttonText}>Random Number</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: '#FF0000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  number: {
    fontSize: 38,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#FFFFFF',
    width: '80%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 28,
    color: '#FF0000',
    fontWeight: 'bold',
  },
});

export default App;
