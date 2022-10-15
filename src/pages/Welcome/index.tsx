import React from "react";
import AnimatedLottieView from "lottie-react-native";
import pokemonAnimation from "./pokemon.json";

import * as S from "./styles";
import { Button } from "../../components/Button";

export function Welcome() {
	return (
		<S.Container>
			<S.Content>
				<S.WrapperAnimation>
					<S.WrapperImage>
						<AnimatedLottieView
							style={{ width: 200 }}
							autoPlay
							loop
							source={pokemonAnimation}
						/>
					</S.WrapperImage>
				</S.WrapperAnimation>
				<S.Title>Bem-vindo(a)</S.Title>
				<S.Subtitle>Consulte tudo sobre pokemóns aqui!</S.Subtitle>
			</S.Content>
			<S.Footer>
				<Button title="Explorar" />
			</S.Footer>
		</S.Container>
	);
}
