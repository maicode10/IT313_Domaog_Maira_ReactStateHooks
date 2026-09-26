import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import PracticeTracker from "../components/PracticeTracker";
import Stopwatch from "../components/Stopwatch";
import useStopwatch from "../hooks/useStopwatch";

export default function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const seconds = useStopwatch(isRunning);

  const handleSolve = () => setSolved((s) => s + 1);
  const handleReset = () => setSolved(0);
  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);

  return (
    <View style={styles.container}>
      <PracticeTracker
        solved={solved}
        onSolve={handleSolve}
        onReset={handleReset}
      />
      <Stopwatch seconds={seconds} isRunning={isRunning} />
      <View style={styles.row}>
        <Button title="Start" onPress={handleStart} />
        <Button title="Stop" onPress={handleStop} color="#d9534f" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  row: { flexDirection: "row", gap: 12 },
});
