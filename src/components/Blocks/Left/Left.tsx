import { useState } from 'react';
import { TfiMenu } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

import logo from '@/assets/images/logo__white.png';

import SideBar from '../SideBar/SideBar';

import { Logo, Menu, Section } from './Left.styled';

const Left = () => {
	const [isActive, setIsActive] = useState<boolean>(false);

	return (
		<Section>
			<SideBar isActive={isActive} setIsActive={setIsActive} />

			<Menu>
				<TfiMenu
					onClick={() => {
						setIsActive((prev) => !prev);
					}}
				/>
			</Menu>
			<Link to='/home'>
				<Logo src={logo} />
			</Link>
		</Section>
	);
};
export default Left;
