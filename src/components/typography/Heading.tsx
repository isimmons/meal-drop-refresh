import styled, { css } from 'styled-components';

import type { ComponentProps, ElementType } from 'react';

type FontSize = 'heading1' | 'heading2' | 'heading3' | 'heading4';

const HeadingBase = styled.h1<{ level: number }>(
  ({
    level,
    theme: {
      color,
      typography: { fontSize },
    },
  }) => css`
    margin: 0;
    color: ${color.primaryText};
    font-family: 'Montserrat';
    letter-spacing: ${level === 1 || level === 2 ? '-2px' : 'unset'};
    font-size: ${fontSize[`heading${level}` as FontSize]};
  `
);

type DefaultProps = {
  level?: 1 | 2 | 3 | 4 | 5;
  className?: string;
};

type HeadingProps = DefaultProps & ComponentProps<typeof HeadingBase>;

export const Heading = ({ level = 1, children, className }: HeadingProps) => {
  const heading = `h${level}` as ElementType;
  return (
    <HeadingBase as={heading} level={level} className={className}>
      {children}
    </HeadingBase>
  );
};
