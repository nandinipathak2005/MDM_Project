// import { useState } from "react";
// import { View, Text, Button, Image, StyleSheet } from "react-native";
// import * as ImagePicker from "expo-image-picker";

// export default function HomeScreen() {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   const pickImageFromGallery = async () => {
//     const result: any = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setSelectedImage(result.assets[0].uri);
//     }
//   };

//   const takePhoto = async () => {
//     const { granted } = await ImagePicker.requestCameraPermissionsAsync();
//     if (!granted) return alert("Please allow camera permissions.");

//     const result: any = await ImagePicker.launchCameraAsync({
//       allowsEditing: true,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setSelectedImage(result.assets[0].uri);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Recycle Smart ♻️</Text>
//       <Text style={styles.subtitle}>Click or upload to classify waste</Text>

//       <Button title="📷 Take a Photo" onPress={takePhoto} />
//       <View style={{ height: 10 }} />
//       <Button title="🖼️ Choose from Gallery" onPress={pickImageFromGallery} />

//       {selectedImage && (
//         <Image source={{ uri: selectedImage }} style={styles.preview} />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center" },
//   title: { fontSize: 28, fontWeight: "bold" },
//   subtitle: { fontSize: 14, color: "gray", marginBottom: 20 },
//   preview: { width: 250, height: 250, marginTop: 20, borderRadius: 12 }
// });
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RecycleIt ♻️</Text>
      <Text style={styles.subtitle}>Use the Scan tab to classify waste.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" },
  title: { fontSize: 28, fontWeight: "bold" },
  subtitle: { marginTop: 10, fontSize: 16, color: "gray" },
});
