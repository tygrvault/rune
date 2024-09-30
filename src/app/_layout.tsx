import { playbackService } from "@/constants/playbackService"
import { useSetupTrackPlayer } from "@/hooks/player/service"
import { SplashScreen } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useCallback, useEffect } from "react"
import { Button, StyleSheet, View } from "react-native"
import TrackPlayer from "react-native-track-player"

TrackPlayer.registerPlaybackService(() => playbackService)

export default function App() {
	const handleTrackPlayerLoaded = useCallback(() => {
		SplashScreen.hideAsync()
	}, []);

	useSetupTrackPlayer({ onLoad: () => handleTrackPlayerLoaded });

	useEffect(() => {
		var track = {
			url: require("../../assets/music/egg.mp3"),
			title: "Temple of Null",
			artist: "Kaizo Slumber",
			genre: "Electronic",
			date: "2014-05-20T07:00:00+00:00",
			artwork: "https://f4.bcbits.com/img/a2147349699_10.jpg",
			duration: 231
		}

		TrackPlayer.add([track]);
	}, [])

	return (
		<View style={styles.container}>
			<Button title="Play" onPress={() => TrackPlayer.play()} />
			<Button title="Pause" onPress={() => TrackPlayer.pause()} />
			<StatusBar style="auto" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
