import styled, { css, useTheme } from 'styled-components';

import { breakpoints } from '~/styles/breakpoints';
import { Icon } from '~/components/Icon';

const Spacer = styled.span`
  padding-left: 1rem;
`;

const StyledButton = styled.button<{
  styleProps: {
    clear: boolean;
    large: boolean;
    withIcon: boolean;
    round: boolean;
  };
}>(
  ({ styleProps, theme: { color, boxShadow, borderRadius } }) => css`
    outline: none;
    border: 0;
    font-family: 'Hind';
    border-radius: ${styleProps.round ? borderRadius.xl : borderRadius.xs};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${styleProps.withIcon
      ? '0.7rem'
      : styleProps.large
      ? '1.125rem 1rem'
      : '0.875rem 1rem'};
    color: ${styleProps.clear ? color.primaryText : color.buttonText};

    transition: box-shadow 150ms ease-in;
    z-index: 1;
    background-color: ${styleProps.clear ? color.buttonClear : color.buttonPrimary};

    &:hover {
      cursor: pointer;
      background-color: ${styleProps.clear ? color.buttonClearHover : color.buttonPrimaryHover};
    }

    &:focus {
      box-shadow: ${boxShadow.outerBorder};
    }

    &:disabled {
      background-color: ${styleProps.clear ? color.buttonClear : color.buttonPrimary};
      opacity: 0.4;
    }

    @media ${breakpoints.M} {
      padding: ${styleProps.withIcon
        ? '1rem'
        : styleProps.large
        ? '1.125rem 1.5rem'
        : '0.875rem 1.5rem'};
    }
  `
);

type DefaultProps = {
  /**
   * Clear button styles leaving just a text
   */
  clear?: boolean;
  round?: boolean;
  /**
   * Is the button large?
   */
  large?: boolean;
  /**
   * Does the button have an icon?
   */
  icon?: string;
  /**
   * Size of the icon
   */
  iconSize?: number;
  /**
   * Is the button disabled?
   */
  disabled?: boolean;
  /**
   * Does the button have an icon?
   */
  children?: React.ReactNode | string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
};

type ButtonProps = DefaultProps & React.ComponentProps<typeof StyledButton>;

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  children,
  large = false,
  clear = false,
  round = false,
  icon,
  iconSize,
  ...props
}: ButtonProps) => {
  const theme = useTheme();
  if (!theme) throw Error('theme not defined...');
  const { color } = theme;

  return (
    <StyledButton type="button" styleProps={{ large, clear, round, withIcon: !!icon }} {...props}>
      {icon && (
        <Icon color={clear ? color.primaryText : color.buttonText} size={iconSize} name={icon} />
      )}
      {icon && children && <Spacer />}
      {children}
    </StyledButton>
  );
};
