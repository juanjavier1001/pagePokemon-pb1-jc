import Link from 'next/link';

const NavBar = () => {
	return (
		<>
			<nav className="navBar">
				<Link href="/">
					<h1>Pokemon</h1>
				</Link>
				<Link href="/favorite">
					<h2>favoritos</h2>
				</Link>
			</nav>
		</>
	);
};

export default NavBar;
