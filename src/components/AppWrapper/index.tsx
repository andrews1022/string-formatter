import styled from 'styled-components';

const AppWrapper = styled.div`
	background-color: ${({ theme }) => theme.shades.white};
	box-shadow: 0 0.5rem 1rem 0 rgb(0 0 0 / 15%);
	padding: 2%;
	height: 85%;
	width: 75%;

	@media ${({ theme }) => theme.mediaQueries.tabletLandscape} {
		padding: 5% 5% 2% 5%;
		width: 85%;
	}
`;

export default AppWrapper;
