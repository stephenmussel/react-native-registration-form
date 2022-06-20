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

  // NOTES: don't need...Formik takes care of state!
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirm, setConfirm] = useState('');

  // function confirmPassword(props) {
  //   const { nativeEvent: { text } } = props;

  //   if( text !== password ) {
  //     alert('Password incorrect, try again!')
  //   }
  // }

  // another option is to destructure props
  // const confirmPassword = ({ nativeEvent: { text } }) => {
  //   if (text != password) {
  //     alert('Password incorrect, try again!');
  //   }
  // }

  const onSubmit = (values) => {
    if (values.password !== values.confirm) {
      alert('Password incorrect, try again!')
    }
  }

  return (
    // <View style={styles.container}>
    <>
      <View style={{ height: '10%', backgroundColor: 'red' }} />
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirm: '',
          accessible: true,
          accessibilityLabel: '',
        }}
        onSubmit={onSubmit}
      >
        {({ handleChange, handleSubmit, values }) => (
          <ScrollView
            accessible={true}
            accessibilityLabel="Scrolls view vertically"
          >
            <Inputs
              label="Username"
              placeholder="Username"
              value={values.username}

              // no auth function that does nothing; used as 'placeholder'
              // onChangeText={() => {}}   
              onChangeText={handleChange('username')}
              accessibilityLabel="Enter username"
            />
            <Inputs
              label="Email"
              placeholder="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              accessibilityLabel="Enter email"
            />
            <Inputs
              label="Password"
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry
              accessibilityLabel="Enter password"
            />
            <Inputs
              label="Confirm Password"
              placeholder="Confirm Password"
              value={values.confirm}
              onChangeText={handleChange('confirm')}
              secureTextEntry
              onSubmitEditing={handleSubmit}
              accessibilityLabel="Confirm password"
            />
            {/* <StatusBar style="auto" /> */}
          </ScrollView>
        )}
      </Formik>
      <View style={{ height: '10%', backgroundColor: 'blue' }} />
    </>
  );
}

// reusable component for inputs
function Inputs(props) {

  const { label, placeholder, value, onChangeText, secureTextEntry, onSubmitEditing, accessible, accessibilityLabel } = props;

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ padding: 8, fontSize: 18 }}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onSubmitEditing={onSubmitEditing}
        accessible={accessible}
        accessibilityLabel={accessibilityLabel}
        style={{ padding: 8, fontSize: 18 }}
      />
    </View>
  )
}

export default App;
