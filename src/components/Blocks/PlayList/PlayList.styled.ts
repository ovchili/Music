import styled from 'styled-components';

export const PlayListContainer = styled.section`
	width: 1136px;
`;

export const PlayListHeader = styled.header`
	letter-spacing: 2px;
	line-height: 24px;
	font-size: 14px;
	text-transform: uppercase;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #4e4e4e;
`;

export const PlayListColumn = styled.li`
	display: flex;
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

export const PlayListMain = styled.main`
	margin: 14px 0;
	display: flex;
	flex-direction: column;
	gap: 12px;
`;
