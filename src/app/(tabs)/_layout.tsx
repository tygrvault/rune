import { colors, fontSize } from '@/constants/tokens';
import { Tabs } from 'expo-router';
import { House, Library, Server } from 'lucide-react-native';

export default function TabLayout() {
	return (
		<Tabs screenOptions={{
			tabBarActiveTintColor: colors.primary,
			tabBarLabelStyle: {
				fontSize: fontSize.xs,
				fontWeight: '500',
			},
			headerShown: false,
			tabBarStyle: {
				backgroundColor: colors.background,
				borderTopColor: "rgba(255, 255, 255, 0.2)",
				paddingTop: 5,
			}
		}}>
			<Tabs.Screen redirect name="index" />
			<Tabs.Screen
				name="home"
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => <House size={22} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="library"
				options={{
					title: 'Library',
					tabBarIcon: ({ color }) => <Library size={22} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="devices"
				options={{
					title: 'Devices',
					tabBarIcon: ({ color }) => <Server size={22} color={color} />,
				}}
			/>
		</Tabs>
	);
}
