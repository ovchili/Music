import styled from 'styled-components';

export const Section = styled.section`
	display: flex;
	gap: 15px;
	align-items: center;
`;
export const Logo = styled.img``;

export const Menu = styled.section`
	cursor: pointer;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	font-size: 18px;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: background 0.3s ease-in;

	&:hover {
		background: rgba(255, 255, 255, 0.4);
	}

	&:active {
		background: rgba(255, 255, 255, 0.6);
	}
`;
