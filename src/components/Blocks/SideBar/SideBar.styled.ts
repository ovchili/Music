import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Overlay = styled.section<{ $active: boolean }>`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: ${(props) => (props.$active ? 1 : -1)};
	transition: background 0.3s linear;

	background: ${(props) =>
		props.$active ? `rgba(255, 255, 255, 0.5)` : `transparent`};
`;

export const Nav = styled.nav<{ $active: boolean }>`
	position: fixed;
	left: ${(props) => (props.$active ? `0` : '-1200px')};
	width: 300px;
	height: 100%;
	background-color: #1c1c1c;
	transition: left 0.5s ease;
`;

export const Icon = styled.section`
	cursor: pointer;
	top: 1rem;
	right: 1.5rem;
	position: absolute;
`;

export const NavContainer = styled.section`
	gap: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 5rem 0;
`;

export const Link = styled(NavLink)`
	width: 100%;
	text-align: center;
	padding: 0.5rem 0;
	transition: background 0.5s ease;
	&:hover {
		background: #a3a3a3;
	}
	&.active {
		border-right: #fff 2px solid;
	}
`;
