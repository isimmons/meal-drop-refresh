import type { ComponentProps } from "react";
import styled, { css } from "styled-components";

import { Icon } from "~/components/Icon";

const StyledButton = styled.button<{ styled: { small: boolean } }>(
  ({ styled, theme: { borderRadius } }) => css`
    border: 0;
    width: ${styled.small ? "3rem" : "4rem"};
    height: ${styled.small ? "3rem" : "4rem"};
    border-radius: ${borderRadius.round};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px;
    color: #333;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.14);
  `
);

type Props = {
  name: string;
  small?: boolean;
  onClick?: () => void;
} & ComponentProps<typeof StyledButton>;

export const IconButton = ({ small = false, name, ...props }: Props) => (
  <StyledButton type="button" styled={{ small }} {...props}>
    <Icon name={name} size={small ? 15 : 24} color="#202020" />
  </StyledButton>
);
