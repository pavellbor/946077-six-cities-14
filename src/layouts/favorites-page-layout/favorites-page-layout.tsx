import { ReactNode } from 'react';
import PageLayout from '../page-layout/page-layout';

type FavoritesPageLayoutProps = {
  children: ReactNode;
};

function FavoritesPageLayout({ children }: FavoritesPageLayoutProps): JSX.Element {
  return (
    <PageLayout hasFooter mainClasses="page__main--favorite">
      {children}
    </PageLayout>
  );
}

export default FavoritesPageLayout;
