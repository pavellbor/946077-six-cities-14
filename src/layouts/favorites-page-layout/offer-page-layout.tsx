import { ReactNode } from 'react';
import PageLayout from '../page-layout/page-layout';

type OfferPageLayoutProps = {
  children: ReactNode;
};

function OfferPageLayout({ children }: OfferPageLayoutProps): JSX.Element {
  return <PageLayout mainClasses="page__main--offer">{children}</PageLayout>;
}

export default OfferPageLayout;
