import { useRef, type ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Portal } from '~/components/Portal';
import { useKey } from '~/hooks/useKeyboard';
import { Button } from '~/components/Button';
import { useLockBodyScroll } from '~/hooks/useBodyScrollLock';

import { ModalContent, TopBar, Backdrop } from './Modal.styles';

type Props = {
  isOpen: boolean;
  children?: ReactNode;
  onClose: () => void;
};

export const Modal = ({ children, isOpen, onClose }: Props) => {
  useKey('escape', onClose);
  useLockBodyScroll(isOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  return (
    <Portal selector="#modal">
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="modal"
        unmountOnExit
        nodeRef={contentRef}
      >
        <ModalContent data-testid="modal" ref={contentRef}>
          <TopBar>
            <Button
              data-testid="modal-close-btn"
              onClick={onClose}
              clear
              round
              icon="cross"
              aria-label="close modal"
              iconSize={16}
            />
          </TopBar>
          {children}
        </ModalContent>
      </CSSTransition>

      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="backdrop"
        unmountOnExit
        nodeRef={backdropRef}
      >
        <Backdrop
          data-testid="modal-backdrop"
          ref={backdropRef}
          onClick={onClose}
        />
      </CSSTransition>
    </Portal>
  );
};
