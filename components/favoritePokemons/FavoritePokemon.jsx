//import FavoriteCardPoker from '../favoriteCardPoke/FavoriteCardPoke';

import FavoriteCardPoker from '../favoriteCardPoke/FavoriteCardPoke';

const FavoritePokemon = ({ pokemons }) => {
	/* const router = useRouter();
	const jj = (e) => {
		console.log(router);
		console.log(e);
		router.push(`/pokemonInfo/${e}`);
	};
    */

	return pokemons.map((e, i) => {
		//console.log('eeee', e);
		//console.log('id', id);
		//console.log('iiiii', i);
		return <FavoriteCardPoker e={e} i={i} key={e} />;
	});
};

export default FavoritePokemon;
