import MainLayout from '@/components/layout/MainLayout';
import PokemonCard from '@/components/pokemonCard';

const Home = ({ pokemons }) => {
	/* console.log(pokemons); */
	return (
		<MainLayout>
			{pokemons.map(({ name, id }) => {
				return <PokemonCard name={name} id={id} key={id} />;
			})}

			{/* <h1>welcome to the page</h1> */}
		</MainLayout>
	);
};

export async function getStaticProps(context) {
	const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
	const data = await res.json();

	const pokemons = data.results.map((e, i) => {
		return {
			...e,
			id: i + 1,
			img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
				i + 1
			}.svg`,
		};
	});

	console.log(pokemons);

	return {
		props: {
			pokemons,
		}, // will be passed to the page component as props
	};
}

export default Home;
