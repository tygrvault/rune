import { playbackService } from "@/constants/playbackService"
import { useLogPlayerState } from "@/hooks/log-player-state"
import { useSetupPlayer } from "@/hooks/setup-player"
import { SplashScreen, Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useCallback } from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import TrackPlayer from "react-native-track-player"

SplashScreen.preventAutoHideAsync()
TrackPlayer.registerPlaybackService(() => playbackService)

export default function App() {
	const handleTrackPlayerLoaded = useCallback(() => {
		SplashScreen.hideAsync()
	}, []);

	useSetupPlayer({ onLoad: () => handleTrackPlayerLoaded() });

	useLogPlayerState();

	return (
		<SafeAreaProvider>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			</Stack>
			<StatusBar style="auto" />
		</SafeAreaProvider>
	)
}