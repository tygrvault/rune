import { playbackService } from "@/constants/playbackService"
import { useLogPlayerState } from "@/hooks/log-player-state"
import { useSetupPlayer } from "@/hooks/setup-player"
import { SplashScreen, Stack } from "expo-router"
import { useCallback } from "react"
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
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
		</Stack>
	)
}