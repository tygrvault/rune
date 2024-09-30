import { useEffect, useRef } from "react";
import TrackPlayer, { Capability, RatingType, RepeatMode } from "react-native-track-player";

export const setupPlayer = async () => {
	await TrackPlayer.setupPlayer({
		maxCacheSize: 1024 * 10,
	});

	await TrackPlayer.updateOptions({
		ratingType: RatingType.Heart,
		capabilities: [
			Capability.Play,
			Capability.Pause,
			Capability.SkipToNext,
			Capability.SkipToPrevious,
			Capability.Stop,
		]
	});

	await TrackPlayer.setVolume(0.5);
	await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}

export const useSetupTrackPlayer = ({ onLoad }: { onLoad?: () => void }) => {
	const isInit = useRef(false);

	useEffect(() => {
		if (isInit.current) return;

		setupPlayer().then(() => {
			isInit.current = true
			console.log("[TrackPlayer] Setup complete");
			onLoad?.()
		}).catch((error) => {
			isInit.current = false;
			console.error("[TrackPlayer] Setup failed");
			console.error(error);
		});
	}, [onLoad]);
}