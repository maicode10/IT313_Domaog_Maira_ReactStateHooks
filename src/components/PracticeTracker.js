import { Button, StyleSheet, Text, View } from "react-native";

export default function PracticeTracker({ solved, onSolve, onReset }) {
  return (
    <View style={styles.card}>
      <Text style={styles.count}>Solved: {solved}</Text>
      {solved >= 5 && <Text style={styles.message}>Great job!</Text>}
      <View style={styles.row}>
        <Button title="Solve +1" onPress={onSolve} />
        <Button title="Reset" onPress={onReset} color="#d9534f" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { alignItems: "center", marginBottom: 24 },
  count: { fontSize: 28, fontWeight: "bold", marginBottom: 8 },
  message: {
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
    marginBottom: 8,
  },
  row: { flexDirection: "row", gap: 12 },
});
