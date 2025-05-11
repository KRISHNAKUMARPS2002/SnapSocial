import { View } from "react-native";
import { styles } from "../../styles/auth.styles";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href="/(tabs)/notifications">see notifications here</Link>
    </View>
  );
}
