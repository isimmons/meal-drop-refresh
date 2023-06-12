import { Header, HeaderComponent } from "~/components/Header/Header";
import { Footer } from "~/components/Footer/Footer";

import type { ReactNode } from "react";

import styled from "styled-components";

const Container = styled.div`
  min-height: calc(100vh - 200px);
`;

type Props = {
  type?: "default" | "sticky-header" | "basic";
  children: ReactNode | ReactNode[];
};

export const PageTemplate = ({ type = "default", children }: Props) => {
  if (type === "basic") {
    return (
      <>
        <HeaderComponent logoOnly />
        <Container>{children}</Container>
      </>
    );
  }

  if (type === "sticky-header") {
    return (
      <>
        <Header sticky />
        <Container>{children}</Container>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};
