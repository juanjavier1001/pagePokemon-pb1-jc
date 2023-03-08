import NavBar from '../navBar';

const MainLayout = ({ children }) => {
	return (
		<>
			<NavBar />
			{children}
		</>
	);
};

export default MainLayout;
