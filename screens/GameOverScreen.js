import { View, Image, Text, StyleSheet } from "react-native";

import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>Game over LOSER!!!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/hahacat.png")}
        />
      </View>
      <Text>Your phone needed x rounds to guess the numbe y.</Text>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 7,
    borderColor: Colors.primary500,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
