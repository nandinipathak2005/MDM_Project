import React from "react";
import { View, Text, FlatList, StyleSheet, Linking, TouchableOpacity } from "react-native";

type Center = {
  name: string;
  address: string;
  phone: string;
  latitude: number;
  longitude: number;
  distance: string;
  types: string[];
};

const centers: Center[] = [
  {
    name: "Pune Waste Management Center",
    address: "Shivaji Nagar, Pune, Maharashtra 411005",
    phone: "+91 20 1234 5678",
    latitude: 18.5303,
    longitude: 73.8478,
    distance: "4.8 km",
    types: ["Plastic", "Metal", "Glass", "E‑Waste"],
  },
  {
    name: "SWaCH Recycling Facility",
    address: "Kothrud, Pune, Maharashtra 411038",
    phone: "+91 20 2345 6789",
    latitude: 18.5073,
    longitude: 73.8075,
    distance: "2.1 km",
    types: ["Plastic", "Metal", "Glass"],
  },
  {
    name: "E‑Waste Collection Hub",
    address: "Viman Nagar, Pune, Maharashtra 411014",
    phone: "", // add phone if available
    latitude: 18.5648, // approximate for Viman Nagar
    longitude: 73.9110,
    distance: "", // to compute
    types: ["E‑Waste"],
  },
  {
    name: "Green Earth Recyclers",
    address: "Deccan Gymkhana, Pune, Maharashtra 411004",
    phone: "", // add phone if available
    latitude: 18.5160, // approximate for Deccan Gymkhana
    longitude: 73.8480,
    distance: "",
    types: ["Plastic", "Metal", "Glass"], 
  },
  {
    name: "Hadapsar Scrap Yard",
    address: "Hadapsar, Pune, Maharashtra 411028",
    phone: "", // add phone if available
    latitude: 18.5014, // approximate for Hadapsar
    longitude: 73.9235,
    distance: "",
    types: ["Metal", "Plastic"], 
  },
];


export default function CentersScreen() {
  const renderItem = ({ item }: { item: Center }) => (
    <View style={styles.card}>
      {/* Name + Distance */}
      <View style={styles.headerRow}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.distance}>{item.distance}</Text>
      </View>

      {/* Address */}
      <Text style={styles.address}>{item.address}</Text>

      {/* Recycling Types */}
      <View style={styles.typesContainer}>
        {item.types.map((type) => (
          <View key={type} style={styles.typeBox}>
            <Text style={styles.typeText}>{type}</Text>
          </View>
        ))}
      </View>

      {/* Buttons */}
      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#4CAF50" }]}
          onPress={() => Linking.openURL(`tel:${item.phone}`)}
        >
          <Text style={styles.buttonText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#4CAF50" }]}
          onPress={() =>
            Linking.openURL(
              `https://www.google.com/maps/dir/?api=1&destination=${item.latitude},${item.longitude}`
            )
          }
        >
          <Text style={styles.buttonText}>Navigate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.banner}>Centers near you</Text>
      <FlatList
        data={centers}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 40, // shifts everything down from top
    backgroundColor: "#F5F5F5",
  },
  container: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  banner: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2E7D32",
    padding: 16,
    backgroundColor: "#C8E6C9",
    textAlign: "center",
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
    flexWrap: "wrap",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E7D32",
    flexShrink: 1,
  },
  distance: {
    fontSize: 12,
    color: "#388E3C",
    marginLeft: 8,
    textAlign: "right",
  },
  address: {
    fontSize: 14,
    color: "#4CAF50",
    marginBottom: 8,
  },
  typesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 12,
  },
  typeBox: {
    backgroundColor: "#E8F5E9",
    borderColor: "#4CAF50",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 6,
    marginBottom: 4,
  },
  typeText: {
    fontSize: 10,
    color: "#2E7D32",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
