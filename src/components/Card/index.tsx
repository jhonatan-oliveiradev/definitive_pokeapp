import React from "react";
import { TouchableOpacityProps } from "react-native";

import dotsImage from "../../assets/images/dots.png";
import pokeball from "../../assets/images/pokeballCard.png";

import * as S from "./styles";

export type PokemonType = {
	type: {
		name: string;
	};
};

export type Pokemon = {
	name: string;
	url: string;
	id: number;
	types: PokemonType[];
};

type CardProps = {
	data: Pokemon;
} & TouchableOpacityProps;

export function Card({ data, ...rest }: CardProps) {
	// console.log(data);
	return (
		<S.PokemonCard type={data.types[0].type.name} {...rest}>
			<S.LeftSide>
				<S.PokemonId>#{data.id}</S.PokemonId>
				<S.PokemonName> {data.name} </S.PokemonName>
				<S.ImageCardDetailLeftSide source={dotsImage} />

				<S.PokemonContentType>
					{data.types.map((pokemonType) => (
						<S.PokemonType
							key={pokemonType.type.name}
							type={pokemonType.type.name}
						>
							<S.PokemonTypeText>{pokemonType.type.name}</S.PokemonTypeText>
						</S.PokemonType>
					))}
				</S.PokemonContentType>
			</S.LeftSide>
			<S.RightSide>
				<S.PokeballDetail source={pokeball} />
				<S.PokemonImage
					source={{
						uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
					}}
				/>
			</S.RightSide>
		</S.PokemonCard>
	);
}
