import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
	return (
		<Tabs screenOptions={{ tabBarActiveTintColor: 'currentColor' }}>
			<Tabs.Screen
				name="library"
				options={{
					title: 'Library',
					tabBarIcon: ({ color }) => <FontAwesome size={28} name="book" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="settings"
				options={{
					title: 'Settings',
					tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
				}}
			/>
		</Tabs>
	);
}
