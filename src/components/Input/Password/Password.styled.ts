import styled from 'styled-components';

export const IconContainer = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	align-items: center;
	width: 38px;
	height: 38px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 18px;
	cursor: pointer;
	border-radius: 50%;
	transition: background 0.3s ease-in;

	&:hover {
		background: rgba(0, 0, 0, 0.1);
	}
`;
