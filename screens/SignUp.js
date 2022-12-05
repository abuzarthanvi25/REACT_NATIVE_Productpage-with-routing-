import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  TextInput,
} from 'react-native';

export default function SignUp() {
  return (
    <>
      <ImageBackground
        style={styles.background}
        source={{
          uri: 'https://wallpaperaccess.com/full/7331581.jpg',
        }}>
        <View style={styles.container}>
          <View>
            <Text style={styles.heading}>Register</Text>
          </View>
          <View>
            <TextInput
              placeholderTextColor={'#5FAB90'}
              placeholder="Username"
              style={styles.input}
            />
          </View>
          <View>
            <TextInput
              placeholderTextColor={'#5FAB90'}
              placeholder="Email"
              style={styles.input}
            />
          </View>
          <View>
            <TextInput
              placeholderTextColor={'#5FAB90'}
              placeholder="Password"
              style={styles.input}
            />
          </View>
          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              {/* <Text style={styles.forgotPassword}>Forgot Password</Text> */}
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.link}>Already have an account? Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  input: {
    backgroundColor: '#F7F7F7',
    borderColor: '#E4E4E4',
    borderWidth: 1,
    marginHorizontal: 25,
    marginVertical: 5,
    color: '#01AD6F',
    fontSize: 22,
    padding: 10,
    borderRadius: 5,
    opacity: 0.9,
  },
  heading: {
    fontSize: 60,
    textAlign: 'center',
    padding: 20,
    color: '#01AD6F',
    fontWeight: 'bold',
  },
  button: {
    padding: 10,
    backgroundColor: '#01AD6F',
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 10,
    borderRadius: 30,
  },
  btnText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  link: {
    color: '#0182B9',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  forgotPassword: {
    color: '#01C372',
    textAlign: 'right',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 25,
  },
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    height: '55%',
    borderTopLeftRadius: 50,
    borderTopColor: '#E67D01',
    borderTopRightRadius: 50,
    backgroundColor: 'white',
  },
});
