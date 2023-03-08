const toggleFavorites = (id) => {
	//console.log('hola ura aaaaaa' + id);

	let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

	if (favorites.includes(id)) {
		favorites = favorites.filter((e) => e !== id);
		console.log(favorites);
	} else {
		favorites.push(id);
		console.log(favorites);
	}

	localStorage.setItem('favorites', JSON.stringify(favorites));
};

const existFavorites = (id) => {
	//if (typeof windows === 'undefined') return false;

	let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
	return favorites.includes(id);
};

const pokemonsFavorites = () => {
	return JSON.parse(localStorage.getItem('favorites') || '[]');
};

/* const verPokemon = (e) => {
	console.log('javito', e);
	const router = useRouter();
	router.push(`/pokemonInfo/${e}`);
}; */

export { toggleFavorites, existFavorites, pokemonsFavorites };
