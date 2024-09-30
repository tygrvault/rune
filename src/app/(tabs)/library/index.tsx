import { defaultStyles } from "@/styles";
import { useEffect } from "react";
import { Button, View } from "react-native";
import TrackPlayer from "react-native-track-player";

export default function LibraryScreen() {
	useEffect(() => {
		var track = {
			url: require("../../../../assets/music/babydoll.mp3"),
			title: "Carol Smells",
			artist: "Really Bad",
			genre: "Electronic",
			date: "2024-09-30T07:00:00+00:00",
			artwork: require("../../../../assets/music/carol.png"),
			duration: 231
		}

		TrackPlayer.add([track]);
	}, [])

	return (
		<>
			<View style={defaultStyles.container}>
				<Button title="Play" onPress={() => TrackPlayer.play()} />
				<Button title="Pause" onPress={() => TrackPlayer.pause()} />
			</View>
		</>
	)
}
