import { Card, Grid } from '@nextui-org/react';
import MainLayout from '@/components/layout/MainLayout';
import { pokemonsFavorites, verPokemon } from '@/utils/localFavorites';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import FavoritePokemon from '@/components/favoritePokemons/FavoritePokemon';

const Favorite = () => {
	//console.log('qpa', data.results);
	const [favoritePokeState, setFavoritePokeState] = useState([]);

	console.log('abc', favoritePokeState);
	//console.log('antes useEffect', favoritePokeState);

	useEffect(() => {
		setFavoritePokeState(pokemonsFavorites());
		//console.log('despues useEffect', favoritePokeState);
	}, []);

	const router = useRouter();
	const jj = (e) => {
		console.log(router);
		console.log(e);
		router.push(`/pokemonInfo/${e}`);
	};

	return (
		<>
			<MainLayout>
				{favoritePokeState.length === 0 ? (
					<h1>No Hay Favoritos</h1>
				) : (
					<FavoritePokemon pokemons={favoritePokeState} />
				)}
			</MainLayout>
		</>
	);
};

/* export const getStaticProps = async () => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
	const data = await res.json(); // your fetch function here
	// console.log('jjcjavito', data.name); 

	return {
		props: { data },
	};
}; */

export default Favorite;
