import styled, { css } from "styled-components";

import { Body } from "../typography";

const Container = styled.div(
  ({ theme: { color, borderRadius } }) => css`
    padding: 3px 8px;
    background: ${color.badgeBackground};
    border-radius: ${borderRadius.xs};
    display: inline-block;
    span {
      color: ${color.badgeText};
    }
    span:first-letter {
      text-transform: capitalize;
    }
  `
);

type Props = {
  text: string;
  className?: string;
};

export const Badge = ({ text, className }: Props) => {
  return (
    <Container className={className}>
      <Body type="span" size="S">
        {text}
      </Body>
    </Container>
  );
};
