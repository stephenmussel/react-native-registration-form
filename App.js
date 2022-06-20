import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function App() {

  const [username, setUsername] = useState('');

  return (
    <View style={styles.container}>
      <Inputs 
        label="Username"
        placeholder="Username"
        value={username}

        // no auth function that does nothing; used as 'placeholder'
        // onChangeText={() => {}}   
        onChangeText={setUsername}     
      />
      
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

// reusable component for inputs
function Inputs(props) {

  const { label, placeholder, value, onChangeText } = props;

  return(
    <View>
      <Text>{label}</Text>
      <TextInput 
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}

export default App;
