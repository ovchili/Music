import { TbHeart, TbPlayerPlay } from 'react-icons/tb';
import { styled } from 'styled-components';

export const Item = styled.ul`
	display: flex;
	cursor: pointer;
	transition: transform 0.3s linear;

	&:hover {
		transform: scale(1.02);
		border: 1px solid #4e4e4e;
	}
`;

export const Column = styled.li`
	color: #fff;
	display: flex;
	align-items: center;
	width: 100px;
	&:first-child {
		flex-grow: 4;
	}
	&:nth-child(2) {
		flex-grow: 3;
	}
	&:nth-child(3) {
		flex-grow: 3;
	}

	&:last-child {
		justify-content: end;
	}
`;

export const ColumnSecondary = styled(Column)`
	color: #4e4e4e;
`;

export const IconContainer = styled.div`
	font-size: 1.125rem;
	margin-right: 1rem;
	width: 51px;
	height: 51px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #4e4e4e;
	background: #313131;
	transition: background 0.3s ease;

	${Item}:hover && {
		background: #000;
	}
`;

export const IconPlay = styled(TbPlayerPlay)`
	display: none;
	position: absolute;

	${Item}:hover && {
		display: block;
		color: #fff;
	}
`;

export const IconHeart = styled(TbHeart)`
	cursor: pointer;
	font-size: 18px;
	margin-right: 17px;
	fill: transparent;
	stroke-width: 1px;
	transition: 0.3s fill linear, 0.3s stroke linear;

	&:hover {
		stroke: #acacac;
	}

	&:active {
		stroke: #fff;
		fill: #696969;
	}
`;
