import React, { useEffect } from "react";
import { useWindowDimensions, ViewProps } from "react-native";
import {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";

import * as S from "./styles";

type FadeAnimationProps = {
	children: React.ReactNode;
} & ViewProps;

export function FadeAnimation({ children, ...rest }: FadeAnimationProps) {
	const { width: displayWidth } = useWindowDimensions();
	const cardOpacity = useSharedValue(0);
	const cardOffset = useSharedValue(0.25 * displayWidth);

	const animatedStyle = useAnimatedStyle(() => {
		"worklet";
		return {
			opacity: cardOpacity.value,
			transform: [
				{
					translateX: cardOffset.value,
				},
			],
		};
	});

	useEffect(() => {
		cardOpacity.value = withTiming(1, { duration: 1000 });
		cardOffset.value = withTiming(0, { duration: 1000 });
	}, []);

	return (
		<S.AnimationContainer {...rest} style={animatedStyle}>
			{children}
		</S.AnimationContainer>
	);
}
