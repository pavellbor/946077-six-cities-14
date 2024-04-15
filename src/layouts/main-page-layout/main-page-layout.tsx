import { ReactNode } from 'react';
import PageLayout from '../page-layout/page-layout';

type MainPageLayoutProps = {
  children: ReactNode;
};

function MainPageLayout({ children }: MainPageLayoutProps): JSX.Element {
  return (
    <PageLayout
      rootClasses="page--gray page--main"
      mainClasses="page__main--index"
    >
      {children}
    </PageLayout>
  );
}

export default MainPageLayout;
