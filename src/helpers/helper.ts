const formatNumber = (num: number): string => {
	return num < 10 ? `0${num}` : `${num}`;
};

export const timer = (time: number): string => {
	const min = formatNumber(Math.floor(time / 60));

	const sec = formatNumber(time % 60);

	return `${min}:${sec}`;
};
