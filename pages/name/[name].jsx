import { useEffect, useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { toggleFavorites } from '@/utils';
import { existFavorites } from '@/utils/localFavorites';

const Name = ({ dataP }) => {
	/* const router = useRouter();
	console.log(router.query); */

	const [inFavorites, setinFavorites] = useState(false);

	useEffect(() => {
		setinFavorites(existFavorites(dataP.id));
		console.log('DD', dataP.id);
	}, []);

	const onToggleFavorite = () => {
		toggleFavorites(dataP.id);
		setinFavorites(!inFavorites);
	};

	return (
		<>
			<MainLayout>
				<div className="navBar">
					<p>
						pokemon {dataP.id} : {dataP.name}
					</p>
					{inFavorites ? (
						<button onClick={onToggleFavorite}> en favoritos</button>
					) : (
						<button onClick={onToggleFavorite}> guardar en favoritos </button>
					)}
				</div>
			</MainLayout>
		</>
	);
};

/* pages151.map((e)=>{
    return paths: [{params : {name : data.name}}] ,
}),
fallback : false  ,
*/

export async function getStaticPaths() {
	const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
	const data = await res.json();

	const namePokemons151 = data.results.map((e) => {
		return e.name;
	});

	//console.log('jey jey ', namePokemons151);

	return {
		paths: namePokemons151.map((e) => {
			return { params: { name: e } };
		}),
		fallback: false, // can also be true or 'blocking' */
	};

	/* return {
		paths: [{ params: { name: '1' } }, { params: { name: '2' } }],
		fallback: 'blocking', // can also be true or 'blocking' 
	}; */

	/* console.log(
		'datita',
		data.results.map((e) => e.name)
	); */
	//const pokemonsName = data

	//const pages151 = [...Array(151)].map((el, i) => `${i + 1}`);
	//console.log(pages151);

	//console.log(data);
	/* paths: pages151.map((e) => ({
        params: { name: e },
    })), */
}

export async function getStaticProps({ params }) {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
	const data = await res.json();

	const dataP = {
		id: data.id,
		name: data.name,
	};

	//console.log('pp', params);
	//console.log(name);

	return {
		props: { dataP }, // will be passed to the page component as props
	};

	//console.log('jjcjj', context);
	//console.log('jjparams', context.params);
	//console.log('jjparamsName', context.params.name);
}

export default Name;
