import { Outlet } from 'react-router-dom';

import { Container } from '../../components/Container/Container.styled';

export const Empty = () => {
	return (
		<Container>
			<Outlet />
		</Container>
	);
};
export default Empty;
