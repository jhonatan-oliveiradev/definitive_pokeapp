import styled, { css } from "styled-components/native";

export const Container = styled.View`
	${({ theme }) => css`
		flex: 1;
		padding: 20px;
		background-color: ${theme.colors.background};
	`}
`;
