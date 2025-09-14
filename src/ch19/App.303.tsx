import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./router.303";
import Home from "./Home.303";
import Details from "./Details.303";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Details" component={Details} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
