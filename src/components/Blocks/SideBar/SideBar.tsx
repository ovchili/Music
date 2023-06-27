import { Dispatch, FC, useRef } from 'react';
import { TfiClose } from 'react-icons/tfi';

import useOnClickOutside from '@/hooks/useOnClickOutside';

import { Icon, Link, Nav, NavContainer, Overlay } from './SideBar.styled';

type SideBarProps = {
	isActive: boolean;
	setIsActive: Dispatch<React.SetStateAction<boolean>>;
};

const SideBar: FC<SideBarProps> = ({ isActive, setIsActive }) => {
	const sideBarRef = useRef<HTMLDivElement>(null);

	const clickOutsideHandler = () => {
		setIsActive(false);
	};

	useOnClickOutside(sideBarRef, clickOutsideHandler);

	return (
		<Overlay $active={isActive}>
			<Nav $active={isActive} ref={sideBarRef}>
				<Icon>
					<TfiClose
						onClick={() => {
							setIsActive((prev) => !prev);
						}}
					/>
				</Icon>

				<NavContainer>
					<Link to='/home'>Главная</Link>
					<Link to='/favorites'>Мои Треки</Link>
				</NavContainer>
			</Nav>
		</Overlay>
	);
};
export default SideBar;
