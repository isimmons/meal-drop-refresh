import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

import { useKey, useLockBodyScroll } from '~/hooks';
import { Button } from '~/components/Button';
import { Heading } from '~/components/typography';

import {
  SidebarContainer,
  SidebarContent,
  SidebarFooter,
  TopBar,
  Backdrop,
} from './Sidebar.styles';

type Props = {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  footer?: React.ReactNode;
  children?: React.ReactNode;
};

export const Sidebar = ({
  children,
  footer,
  isOpen,
  title,
  onClose,
}: Props) => {
  useKey('escape', onClose);
  useLockBodyScroll(isOpen);
  const contentRef = React.useRef(null);
  const backdropRef = React.useRef(null);

  return (
    <>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="sidebar"
        unmountOnExit
        nodeRef={contentRef}
      >
        <SidebarContainer data-testid="sidebar" ref={contentRef}>
          <TopBar>
            <Heading level={4}>{title}</Heading>
            <Button
              aria-label="close sidebar"
              data-testid="sidebar-close-btn"
              onClick={onClose}
              clear
              round
              icon="cross"
              iconSize={16}
            />
          </TopBar>
          <SidebarContent data-testid="sidebar-content">
            {children}
          </SidebarContent>
          {footer && (
            <SidebarFooter data-testid="sidebar-footer">{footer}</SidebarFooter>
          )}
        </SidebarContainer>
      </CSSTransition>

      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="backdrop"
        unmountOnExit
        nodeRef={backdropRef}
      >
        <Backdrop data-testid="Sidebar-backdrop" onClick={onClose} />
      </CSSTransition>
    </>
  );
};
