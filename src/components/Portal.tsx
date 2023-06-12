import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

import type { ReactNode } from 'react';

type Props = {
  selector: string;
  children?: ReactNode;
};

export const Portal = ({ children, selector }: Props) => {
  const ref = useRef<Element>();

  useEffect(() => {
    const element = document.querySelector<Element>(selector);
    if (element) {
      ref.current = element;
    }
  }, [selector]);

  return ref.current ? createPortal(children, ref.current) : null;
};
