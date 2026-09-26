# IT313_Domaog_Maira_ReactStateHooks

**Laboratory 5 – IT 313 Mobile Programming**
Maira Domaog – [section]

## Problem

A Lab Timer & Practice Tracker screen for lab sessions. It lets a student:

- Count how many practice problems they've solved (**Solve +1** and **Reset**)
- See a **"Great job!"** message after solving 5 problems
- Track how long they've been working with a stopwatch (**Start** and **Stop**)
- See whether the timer is **"Running…"** or **"Paused"**

Both the counter and the stopwatch work together and stay in sync on one screen.

## Approach

| Component / Hook | What it does |
|---|---|
| **LabScreen** | The parent. Owns `solved` and `isRunning` using `useState`, calls `useStopwatch`, and passes state and handlers down as props. |
| **useStopwatch(isRunning)** | A custom hook. Uses `useState` for `seconds` and `useEffect` with `setInterval` to add 1 every second while `isRunning` is true. |
| **PracticeTracker** | Shows `Solved: {solved}`, the Solve +1 and Reset buttons, and "Great job!" once solved reaches 5. |
| **Stopwatch** | Shows the time as `MM:SS` and "Running…" or "Paused". |

### Concepts used

- **useState**: stores `solved`, `isRunning`, and `seconds`.
- **useEffect + dependency array**: runs the timer and re-runs whenever `isRunning` changes.
- **Cleanup function**: `clearInterval` stops the timer when Stop is pressed or the component unmounts, so no leftover timers keep running.
- **Conditional rendering**: `&&` for "Great job!" and a ternary for "Running…" / "Paused".
- **Event handling**: every `onPress` gets a function reference (e.g. `onPress={handleSolve}`), never a direct call.
- **Lifting state up**: `PracticeTracker` and `Stopwatch` are siblings that stay in sync through their shared parent, `LabScreen`.
- **Custom hook**: `useStopwatch` keeps the timer logic separate and reusable.
- **Functional updates**: `setSolved(s => s + 1)` and `setSeconds(s => s + 1)` always use the latest value and avoid stale closures.

## Project Structure

```
IT313_Domaog_Maira_ReactStateHooks/
├── App.js
├── screens/
│   └── LabScreen.js
├── components/
│   ├── PracticeTracker.js
│   └── Stopwatch.js
└── hooks/
    └── useStopwatch.js
```

## How to Run in Expo Go

1. Install [Node.js](https://nodejs.org) on your computer and the **Expo Go** app on your phone.
2. Clone this repository:
```bash
   git clone https://github.com/<username>/IT313_Domaog_Maira_ReactStateHooks.git
   cd IT313_Domaog_Maira_ReactStateHooks
```
3. Install dependencies:
```bash
   npm install
```
4. Start the app:
```bash
   npx expo start
```
5. Scan the QR code with **Expo Go** (Android) or the **Camera app** (iOS).
   Make sure your phone and computer are on the same Wi-Fi network.
   If it won't connect, try `npx expo start --tunnel`.
