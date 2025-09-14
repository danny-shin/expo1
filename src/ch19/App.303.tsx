import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./router.303";
import Home from "./Home.303";
import Details from "./Details.303";
import { NavigationContainer } from "@react-navigation/native";
import { Button } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Details" component={Details} 
				options={({route})=>({
					headerRight: ()=>{
						return (
						<Button title="Buy" onPress={()=>{}} 
							disabled={!route.params?.stock || route.params.stock === 0}
						/>
						)
					}
				})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
