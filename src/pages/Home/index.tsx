import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import Api from "../../services/api";

import * as S from "./styles";

type PokemonType = {
	type: string;
};

type Pokemon = {
	name: string;
	url: string;
	id: number;
	types: PokemonType[];
};

type Request = {
	id: number;
	types: PokemonType[];
};

export function Home() {
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);

	useEffect(() => {
		async function getAllPokemons() {
			const response = await Api.get("/pokemon");
			const { results } = response.data;

			const payloadPokemons = await Promise.all(
				results.map(async (pokemon: Pokemon) => {
					const { id, types } = await getMoreInfo(pokemon.url);

					return {
						name: pokemon.name,
						id,
						types,
					};
				})
			);
			setPokemons(payloadPokemons);
		}

		getAllPokemons();
	}, []);

	async function getMoreInfo(url: string): Promise<Request> {
		const response = await Api.get(url);
		const { id, types } = response.data;
		return { id, types };
	}

	return (
		<S.Container>
			{pokemons.map((item) => (
				<Text>{item.name}</Text>
			))}
		</S.Container>
	);
}
