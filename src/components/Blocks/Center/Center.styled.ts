import { MdSearch } from 'react-icons/md';
import { styled } from 'styled-components';

import { Input } from '@/components/Input/Input.styled';

export const Section = styled.section`
	position: relative;
	width: 1293px;
`;

export const Search = styled(Input)`
	padding: 14px 48px;
	background: transparent;
	font-size: 16px;
	color: #fff;
	border-bottom: 1px solid #4e4e4e;

	&::placeholder {
		color: #fff;
	}
`;

export const SearchIcon = styled(MdSearch)`
	position: absolute;
	font-size: 20px;
	left: 16px;
	position: absolute;
	top: 14px;
`;
