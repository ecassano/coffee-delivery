import styled from "styled-components";
import { typography } from "../../styles/typography";

export const Container = styled.header`
  max-width: 1160px;
  padding: 32px 160px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  img {
    width: 5.25rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    background: ${(props) => props.theme.colors["purple-light"]};
    padding: 0.5rem;
    border-radius: 6px;
    color: ${(props) => props.theme.colors["purple-dark"]};

    p {
      ${typography.fonts.textS}
    }

    a {
    }
  }
`;
