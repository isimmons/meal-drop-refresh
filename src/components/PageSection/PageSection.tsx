import { ReactNode } from 'react';
import styled from 'styled-components';

import { Button } from '~/components/Button';
import { Heading } from '~/components/typography';

type Props = {
  title: string;
  topButtonLabel?: string;
  onTopButtonClick?: () => void;
  children: ReactNode;
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  position: relative;
  padding-left: 1rem;
`;
const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const PageSection = ({
  title,
  topButtonLabel,
  onTopButtonClick,
  children,
}: Props) => (
  <Container className="container-desktop">
    <TopContainer>
      <Heading level={2}>{title}</Heading>
      {topButtonLabel && (
        <Button clear onClick={onTopButtonClick}>
          {topButtonLabel}
        </Button>
      )}
    </TopContainer>
    {children}
  </Container>
);
