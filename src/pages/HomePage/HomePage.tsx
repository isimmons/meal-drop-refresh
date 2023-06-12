import styled from "styled-components";

import { PageTemplate } from "~/templates/PageTemplate";
import { categories } from "~/stub/categories";

import { CategoriesSection } from "./components/CategoriesSection";
import { Banner } from "./components/Banner";
import { RestaurantsSection } from "./components/RestaurantsSection";
import { AwardWinningSection } from "./components/AwardWinningSection";

const Spacing = styled.div`
  margin-bottom: 4.5rem;
`;

export const HomePage = () => {
  return (
    <PageTemplate>
      <Banner />
      <Spacing />
      <RestaurantsSection title="Our Favorite Picks" />
      <Spacing />
      <AwardWinningSection />
      <Spacing />
      <CategoriesSection categories={categories} />
      <Spacing />
    </PageTemplate>
  );
};
