import { Text, View, StatusBar } from "react-native";
import styles from "./styles.292";
import Box from "./Box.291";
const boxes = new Array(10).fill(null).map((v,i)=>(i+1))

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar hidden={false} />
			{boxes.map(v =>
				<Box key={v}>{v}</Box>
			)}
		</View>
	);
}
