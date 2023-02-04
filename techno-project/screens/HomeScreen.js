import { ScrollView, Image, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.TabNav}>
      <Text>This is Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  TabNav: {
    marginTop: 40,
    marginStart: 10,
  },
});