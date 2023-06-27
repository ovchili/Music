import { styled } from 'styled-components';

export const Icon = styled.section`
	cursor: pointer;
	transition: all 0.3s ease-in;
	width: 40px;
	height: 40px;
	border: 1px solid #fff;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	font-size: 18px;
	align-items: center;

	&:hover {
		background: #fff;
		color: #000;
	}
`;
