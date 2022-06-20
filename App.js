import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

function App() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  // function confirmPassword(props) {
  //   const { nativeEvent: { text } } = props;

  //   if( text !== password ) {
  //     alert('Password incorrect, try again!')
  //   }
  // }

  // another option is to destructure props
  const confirmPassword = ({ nativeEvent: { text } }) => {
    if (text != password) {
      alert('Password incorrect, try again!');
    }
  }

  return (
    // <View style={styles.container}>
    <>
    <View style={{ height: '10%', backgroundColor: 'red' }} />
    <ScrollView>
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
        onSubmitEditing={confirmPassword}
      />
      {/* <StatusBar style="auto" /> */}
    </ScrollView>
    <View style={{ height: '10%', backgroundColor: 'blue' }} />
    </>
  );
}

// reusable component for inputs
function Inputs(props) {

  const { label, placeholder, value, onChangeText, secureTextEntry, onSubmitEditing } = props;

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ padding: 8, fontSize: 18 }}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onSubmitEditing={onSubmitEditing}
        style={{ padding: 8, fontSize: 18 }}
      />
    </View>
  )
}

export default App;
