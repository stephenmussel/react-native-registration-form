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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');


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
      <Inputs 
        label="Email"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}     
      />
      <Inputs 
        label="Password"
        placeholder="Password"
        value={password} 
        onChangeText={setPassword}
        secureTextEntry     
      />
        <Inputs 
        label="Confirm Password"
        placeholder="Confirm Password"
        value={confirm} 
        onChangeText={setConfirm}   
        secureTextEntry 
      />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

// reusable component for inputs
function Inputs(props) {

  const { label, placeholder, value, onChangeText, secureTextEntry } = props;

  return(
    <View>
      <Text>{label}</Text>
      <TextInput 
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

export default App;
