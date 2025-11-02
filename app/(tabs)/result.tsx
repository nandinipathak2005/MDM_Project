import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function ResultScreen() {
  const { result } = useLocalSearchParams();
  const data = JSON.parse(result as string);

  return (
    <View style={styles.container}>
      <Text style={styles.category}>{data.category}</Text>
      <Text style={styles.instructions}>{data.instructions}</Text>
      <Text style={styles.co2}>CO₂ Saved: {data.co2_saved} g</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  category: { fontSize: 32, fontWeight: "bold", marginBottom: 12 },
  instructions: { fontSize: 18, marginBottom: 20 },
  co2: { fontSize: 20, fontWeight: "bold", color: "green" },
});
