import { StyleSheet, Text, View } from "react-native";

function formatTime(total) {
  const m = String(Math.floor(total / 60)).padStart(2, "0");
  const s = String(total % 60).padStart(2, "0");
  return `${m}:${s}`;
}

export default function Stopwatch({ seconds, isRunning }) {
  return (
    <View style={styles.card}>
      <Text style={styles.time}>{formatTime(seconds)}</Text>
      <Text style={styles.status}>{isRunning ? "Running…" : "Paused"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { alignItems: "center", marginBottom: 24 },
  time: { fontSize: 40, fontWeight: "bold" },
  status: { fontSize: 16, color: "#555" },
});
