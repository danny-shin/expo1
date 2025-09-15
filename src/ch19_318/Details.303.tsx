import React from "react";
import { Text, View, StatusBar, Button } from "react-native";
import styles from './styles.303'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./router.303";

type Props = NativeStackScreenProps<RootStackParamList,"Details">;

export default function ({route,navigation}:Props) {
	const {title, content, stock} = route.params;
	
	React.useEffect(()=>{
		navigation.setOptions({title})
	},[])

	return (
		<View style={styles.container}>
			<StatusBar barStyle={'dark-content'} />
			<Text>{content}</Text>
			<Text>Stock: {stock||'none'}</Text>
		</View>
	);
}
