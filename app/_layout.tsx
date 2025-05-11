import { SafeAreaProvider } from "react-native-safe-area-context";
import InitialLayout from "@/components/InitialLayout";
import ClerkAndConvexProvider from "@/providers/ClerkAndConvexProvider";

export default function Layout() {
  return (
    <ClerkAndConvexProvider>
      <SafeAreaProvider style={{ flex: 1, backgroundColor: "black" }}>
        <InitialLayout />
      </SafeAreaProvider>
    </ClerkAndConvexProvider>
  );
}
