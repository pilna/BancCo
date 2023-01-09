import Router from './src/router/router'
import { View } from "react-native";
import { useCredentials } from './src/hooks/useCredentials';

export default function App() {
  const { credentials, setCredentials } = useCredentials();

  return (
    <View style={{
      height: "100%",
      width: "100%"
    }}>
      <Router 
        credentials={credentials}
        setCredentials={setCredentials}
      />
    </View>
  );
}
