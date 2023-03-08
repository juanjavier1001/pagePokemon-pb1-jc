import { Card, Grid } from '@nextui-org/react';
import { useRouter } from 'next/router';
//import { use } from 'react';

const FavoriteCardPoker = ({ e, i }) => {
	console.log(`jjjjjjhg  ${e} `);
	const router = useRouter();
	console.log('router', router);
	const jj = () => {
		//console.log('jjce', e);
		//console.log('jjci', i);
		router.push(`/pokemonInfo/${e}`);
	};
	return (
		<>
			<Grid xs={6} sm={3} key={e} onClick={jj}>
				<Card isPressable>
					<Card.Body css={{ p: 0 }}>
						<Card.Image
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${e}.svg`}
							width="100%"
							height={140}
							alt={'hola'}
						/>
					</Card.Body>
				</Card>
			</Grid>
		</>
	);
};

export default FavoriteCardPoker;

/* const FavoriteCardPoker = ({ id, i }) => {
	const router = useRouter();
	console.log(router);
	const jj = () => {
		router.push(`/pokemonInfo/${id}`);
	};

	return (
		<>
			<Grid xs={6} sm={3} key={id} onClick={jj}>
				<Card isPressable>
					<Card.Body css={{ p: 0 }}>
						<Card.Image
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
							width="100%"
							height={140}
							alt={'hola'}
						/>
					</Card.Body>
				</Card>
			</Grid>
		</>
	);
};

export default FavoriteCardPoker; */
