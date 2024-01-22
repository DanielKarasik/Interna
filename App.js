import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.internaText}>Interna</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          accessibilityLabel="email"
          placeholder="Email"
          style={styles.textInput}
        />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          accessibilityLabel="password"
          placeholder="Password"
          secureTextEntry={true}
          style={styles.textInput}
        />
      </View>
      <Button accessibilityLabel="login" title="Login" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF1493',
  },
  internaText: {
    fontSize: 24, // Adjust the font size as needed
    fontWeight: 'bold', // Make the text bold
    marginBottom: 20, // Move the text up by increasing marginBottom
  },
  textInputContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  textInput: {
    fontSize: 18,
    padding: 10,
    width: 200,
  },
});
