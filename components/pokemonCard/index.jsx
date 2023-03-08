import { Card, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

const PokemonCard = ({ name, id }) => {
	const router = useRouter();
	const infoPoke = () => {
		router.push(`/pokemonInfo/${id}`);
	};

	return (
		<>
			<Card
				onClick={infoPoke}
				isPressable
				isHoverable
				variant="bordered"
				css={{ mw: '400px' }}
			>
				<Card.Body>
					<Text>
						#{id} - {name}
					</Text>
				</Card.Body>
			</Card>
		</>
	);
};

export default PokemonCard;
