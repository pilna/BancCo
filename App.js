import Router from './src/router/router'
import { View } from "react-native";

export default function App() {
  return (
    <View style={{
      height: "100%",
      width: "100%"
    }}>
      <Router />
    </View>
  );
}
