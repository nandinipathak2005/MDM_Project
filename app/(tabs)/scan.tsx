import { useState } from "react";
import { View, Text, Button, Image, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";

export default function ScanScreen() {
  const [image, setImage] = useState<string | null>(null);
  const router = useRouter();

  const pickImageFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImage(uri);
      sendToAPI(uri);
    }
  };

  const takePhoto = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) return Alert.alert("Camera permission needed!");

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImage(uri);
      sendToAPI(uri);
    }
  };

  async function sendToAPI(uri: string) {
    try {
      let form = new FormData();
      form.append("image", {
        uri,
        name: "photo.jpg",
        type: "image/jpeg",
      } as any); // fixes TS type errors ✅

      const response = await fetch(
        "https://nmp2005-recycleit-classifier.hf.space/api/predict",
        {
          method: "POST",
          body: form,
        }
      );

      const data = await response.json();

      router.push({
        pathname: "/result",
        params: { result: JSON.stringify(data) },
      });
    } catch (error) {
      Alert.alert("Error", "Could not classify image.");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan to Classify ♻️</Text>

      <Button title="📷 Take a Photo" onPress={takePhoto} />
      <View style={{ height: 10 }} />
      <Button title="🖼️ Choose from Gallery" onPress={pickImageFromGallery} />

      {image && <Image source={{ uri: image }} style={styles.preview} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  preview: { width: 260, height: 260, marginTop: 20, borderRadius: 14 },
});
