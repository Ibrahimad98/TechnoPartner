import { ScrollView, Image, StyleSheet, Text, View } from "react-native";

export default function MenuScreen() {
  return (
    <View style={styles.TabNav}>
      <Text>This is Menu Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  TabNav: {
    marginTop: 40,
    marginStart: 10,
  },
});
