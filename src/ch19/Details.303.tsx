
import { Text, View, StatusBar, Button } from "react-native";
import styles from './styles.303'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./router.303";

type Props = NativeStackScreenProps<RootStackParamList,"Details">;

export default function Details({route}:Props) {
	const {title} = route.params;
	return (
		<View style={styles.container}>
			<StatusBar barStyle={'dark-content'} />
			<Text>Details Screen</Text>
			<Text>Title: {title}</Text>
		</View>
	);
}
