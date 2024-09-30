import { defaultStyles } from "@/styles";
import { Text, View } from "react-native";

export default function DevicesScreen() {
	return (
		<>
			<View style={defaultStyles.container}>
				<Text style={defaultStyles.text}>Devices</Text>
			</View>
		</>
	)
}
