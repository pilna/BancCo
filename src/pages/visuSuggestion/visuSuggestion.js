import {
  Alert,
  Button,
  FlatList,
  Image,
  ImageBackground,
  Text,
  TextInput,
  View,
} from "react-native";

import { ButtonFactory } from "../../components";
import { MobileLayout } from "../../layout";
import React from "react";
import { styles } from "../login/login.style";
import { useSuggestions } from "../../hooks/useSuggestions";

const VisuSuggestionPage = ({ navigation }) => {
  const buttonFactory = new ButtonFactory();
  const { sug } = useSuggestions();

  return (
    <MobileLayout navigation={navigation}>
      <View style={styles.profilePageContainer}>
        <ImageBackground
          source={require("../../../assets/background.png")}
          style={styles.backgroundImage}
        >
          <View style={styles.loginPageContainer}>
            <View style={styles.topContentContainer}>
              <Text
                style={{
                  ...styles.colorizedText,
                  ...styles.loginTitle,
                }}
              >
                Banc.co
              </Text>

              <Text
                style={{
                  ...styles.colorizedText,
                  ...styles.loginTitle,
                }}
              >
                Orléans
              </Text>

              <View style={styles.container2}>
                <FlatList
                  data={[{ key: "Suggestion 1" }]}
                  renderItem={({ item }) => (
                    <Text style={styles.item2}>{item.key}</Text>
                  )}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </MobileLayout>
  );
};
export default VisuSuggestionPage;
