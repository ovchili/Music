import { styled } from 'styled-components';

export const Button = styled.button<{ $primary?: boolean }>`
	border-radius: 6px;
	cursor: pointer;
	font-size: 18px;
	padding: 16px 0;
	color: ${(props) => (props.$primary ? `#fff` : `#000`)};
	background-color: ${(props) => (props.$primary ? `#580EA2` : `transparent`)};
	width: 100%;
	border: ${(props) => (props.$primary ? `` : `1px solid #D0CECE`)};
	transition: background-color 0.3s linear;

	&:hover {
		background-color: ${(props) => (props.$primary ? `#3F007D` : `#F4F5F6`)};
	}

	&:active {
		background-color: ${(props) => (props.$primary ? `#271A58` : `#D9D9D9`)};
	}
`;
