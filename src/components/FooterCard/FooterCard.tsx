import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { Body } from '../typography/Body';
import { Heading } from '../typography/Heading';
import { ReactNode } from 'react';

const FooterCardContainer = styled.div(
  ({
    theme: {
      color: colors,
      spacing,
      borderRadius,
      typography: { fontSize },
    },
  }) => css`
    color: ${colors.white};

    border-radius: ${borderRadius.xs};
    h2 {
      color: white;
      margin-bottom: ${spacing.xs};
      font-size: ${fontSize.heading4};
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    a {
      color: ${colors.white};
      text-decoration: none;
      cursor: pointer;
    }

    p {
      margin-top: ${spacing.xs};
      margin-bottom: ${spacing.xs};
    }
  `
);

type Props = {
  title: string;
  links?: {
    external?: boolean;
    name: string;
    href: string;
  }[];
  children?: ReactNode;
};

export const FooterCard = ({ title, links = [], children }: Props) => (
  <FooterCardContainer>
    <Heading level={2}>{title}</Heading>
    {links.length > 0 && (
      <ul>
        {links.map(({ external, name, href }) => (
          <li key={name}>
            <Body>
              {external ? (
                <a target="_blank" rel="noopener noreferrer" href={href}>
                  {name}
                </a>
              ) : (
                <Link to={href}>{name}</Link>
              )}
            </Body>
          </li>
        ))}
      </ul>
    )}
    {children}
  </FooterCardContainer>
);
