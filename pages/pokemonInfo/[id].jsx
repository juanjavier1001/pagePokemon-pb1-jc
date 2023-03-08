import { useEffect, useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { toggleFavorites } from '@/utils';
import { existFavorites } from '@/utils/localFavorites';

const PokemonInfo = ({ dataP }) => {
	const [inFavorites, setinFavorites] = useState(false);

	useEffect(() => {
		setinFavorites(existFavorites(dataP.id));
		console.log('DD', dataP.id);
	}, []);

	const onToggleFavorite = () => {
		toggleFavorites(dataP.id);
		setinFavorites(!inFavorites);
	};

	/* console.log('papapap'); */

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

export default PokemonInfo;

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths = async (ctx) => {
	const pages151 = [...Array(151)].map((el, i) => `${i + 1}`);
	//console.log('p151', pages151);
	return {
		paths: pages151.map((e) => {
			return { params: { id: e } };
		}),
		fallback: false,

		/* paths: [
			{
				params: { id: '1' },
			},
			{ params: { id: '2' } },
		],
		fallback: 'blocking', */
	};
};

export const getStaticProps = async ({ params }) => {
	//console.log('jjjjc', params);
	// console.log(ctx);
	// console.log(ctx.params.id);
	const { id } = params;
	// const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${ctx.params}`);
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	const data = await res.json(); // your fetch function here

	console.log('dataaaaa', data);
	console.log('dd.id', data.id);

	//console.log('pokepapa', data.name);
	/* console.log('jjcjavito', data.name); */

	const dataP = {
		id: data.id,
		name: data.name,
	};

	return {
		props: { dataP },
	};
};
