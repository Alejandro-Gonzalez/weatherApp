export const getColor = (type = 'primary', color = 'main') => ({ theme }) => {
	if (!theme) return;
	const { palette } = theme;
	return palette && palette[type] && palette[type][color];
};
