import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { useState } from 'react';

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [text, onChangeText] = useState('')
  const [text2, onChangeText2] = useState('')

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={{
          fontSize: 30,
          fontWeight: 'bold'
        }}>-- Profile --</Text>
      </View>
      <View style={styles.imageContainer}>
        <ImageViewer 
          placeholderImageSource={PlaceholderImage} 
          selectedImage={selectedImage}
        />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
      </View>
      <ScrollView style={styles.infoContainer}>
      <Text style={{
          fontSize: 20
        }}>The following is simply placeholder text because I am a VERY boring person!</Text>
        <Text style={{
          fontSize: 20
        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        <Text style={{
          fontSize: 20
        }}>Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.</Text>
        <Text style={{
          fontSize: 20
        }}>Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.</Text>
        <Text style={{
          fontSize: 20
        }}>Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</Text>
      </ScrollView>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText2}
          value={text2}
        />
        <Text style={{
          fontSize: 20,
          padding: 10,
          marginBottom: 15,
          borderWidth: 2,
          borderColor: "#0f0f0f",
          borderRadius: 18
        }}>
          Submit
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#e5ded4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 50,
    padding: 20,
  },
  imageContainer: {
    paddingTop: 10,
  },
  footerContainer: {
    alignItems: 'center',
    margin: 5,
  },
  infoContainer: {
    margin: 10,
    padding: 10,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    borderRadius: 19,
    padding: 10,
  },
  formContainer: {
    alignItems: 'center',
    margin: 5,
  }
});
