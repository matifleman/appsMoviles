import Tarjeta from "@/components/tarjeta";
import { View } from "react-native";

export default function Index() {
  return (
    <View>
      <Tarjeta texto={'Tarjeta 1'}/>
      <Tarjeta texto={'Tarjeta 2'}/>
      <Tarjeta texto={'Tarjeta 3'}/>
      <Tarjeta texto={'Tarjeta 4'}/>
    </View>
  );
}
