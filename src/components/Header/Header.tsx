import styled, { css } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDarkMode } from 'usehooks-ts';

import { useAppDispatch, useAppSelector } from '~/app-state';
import {
  CartItem,
  saveItemAction,
  selectCartItems,
  selectCartTotal,
  selectCartVisibility,
  toggleVisibilityAction,
} from '~/app-state/cart';
import { breakpoints } from '~/styles/breakpoints';
import { ShoppingCartMenu } from '~/components/ShoppingCartMenu';
import { Button } from '~/components/Button';
import { toEuro } from '~/helpers';
import { Body } from '~/components/typography/Body';
import { Logo } from '~/components/Logo';

export const HeaderContainer = styled.div<{ styleProps: { sticky: boolean } }>(
  ({ styleProps, theme: { color } }) => css`
    display: flex;
    justify-content: space-between;
    height: 56px;
    border-bottom: 1px solid ${color.headerBorder};
    top: 0;
    left: 0;
    position: sticky;
    background: ${color.headerBackground};
    z-index: 2;
    width: 100%;
    padding: 0 1.5rem;

    @media ${breakpoints.S} {
      padding: 0 4rem;
    }

    @media ${breakpoints.M} {
      position: ${styleProps.sticky ? 'sticky' : 'relative'};
      height: 72px;
    }
  `
);

export const LogoContainer = styled(Link)`
  width: 40px;
  display: flex;
  padding-left: 1rem;

  & img {
    width: 100%;
  }

  @media screen and (max-width: 800px) {
    width: 30px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .navigation-items {
    display: none;
  }

  a {
    margin-right: 0.5rem;
  }

  @media ${breakpoints.M} {
    .navigation-items {
      display: contents;
    }
    width: 80%;
  }
`;

export const CartText = styled(Body)(
  ({ theme: { color } }) => css`
    display: none;
    @media ${breakpoints.M} {
      display: inline-block;
      color: ${color.cartButtonText};
      margin-right: 0.25rem;
    }
  `
);

export const CartTotal = styled(Body)(
  ({ theme: { color } }) => css`
    display: inline-block;
    color: ${color.buttonText};
  `
);

const ThemeToggle = () => {
  const { isDarkMode, toggle: toggleDarkMode } = useDarkMode(false);
  return (
    <Button
      round
      clear
      aria-label={`turn on ${isDarkMode ? 'light' : 'dark'} mode`}
      icon={isDarkMode ? 'moon' : 'sun'}
      onClick={toggleDarkMode}
    />
  );
};

type Props = {
  isCartVisible?: boolean;
  cartItems?: CartItem[];
  totalPrice?: number;
  logoOnly?: boolean;
  sticky?: boolean;
  toggleCartVisibility?: () => void;
  goToCheckout?: () => void;
  saveItem?: (item: CartItem) => void;
};

export const HeaderComponent = ({
  isCartVisible = false,
  logoOnly = false,
  sticky = false,
  totalPrice = 0,
  cartItems = [],
  toggleCartVisibility = () => {},
  goToCheckout,
  saveItem = () => {},
}: Props) => (
  <HeaderContainer data-testid="header" styleProps={{ sticky }}>
    <LogoContainer to="/" aria-label="go to home page">
      <Logo />
    </LogoContainer>
    {!logoOnly && (
      <>
        <OptionsContainer>
          <span className="navigation-items">
            <ThemeToggle />
            <Link to="/" tabIndex={-1}>
              <Button clear>Home</Button>
            </Link>
            <Link to="/categories" tabIndex={-1}>
              <Button clear>All restaurants</Button>
            </Link>
          </span>
          <Button aria-label="food cart" icon="cart" onClick={toggleCartVisibility}>
            {totalPrice > 0 && (
              <>
                <CartText type="span">Order</CartText>
                <CartTotal type="span">{toEuro(totalPrice)}</CartTotal>
              </>
            )}
          </Button>
        </OptionsContainer>
        <ShoppingCartMenu
          isOpen={isCartVisible}
          onClose={toggleCartVisibility}
          onGoToCheckoutClick={goToCheckout}
          cartItems={cartItems}
          totalPrice={totalPrice}
          onItemChange={saveItem}
        />
      </>
    )}
  </HeaderContainer>
);

export const Header = ({ sticky }: { sticky?: boolean }) => {
  const isCartVisible = useAppSelector(selectCartVisibility);
  const cartItems = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectCartTotal);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const toggleCartVisibility = () => dispatch(toggleVisibilityAction());
  const saveItem = (item: CartItem) => dispatch(saveItemAction(item));

  const goToCheckout = () => {
    toggleCartVisibility();
    navigate('/checkout');
  };

  return (
    <HeaderComponent
      sticky={sticky}
      goToCheckout={goToCheckout}
      cartItems={cartItems}
      isCartVisible={isCartVisible}
      toggleCartVisibility={toggleCartVisibility}
      totalPrice={totalPrice}
      saveItem={saveItem}
    />
  );
};
