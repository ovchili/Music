import { Outlet } from 'react-router-dom';

import Center from '@/components/Blocks/Center/Center';
import Left from '@/components/Blocks/Left/Left';
import Right from '@/components/Blocks/Right/Right';

import { Container, Header, Main } from './Private.styled';

const Private = () => {
	return (
		<>
			<Container>
				<Header>
					<Left />
					<Center />
					<Right />
				</Header>
				<Main>
					<Outlet />
				</Main>
			</Container>
		</>
	);
};
export default Private;
